import { useEffect } from 'react';
import { Form, Input, InputNumber } from 'antd';
import { GlobalDrawer } from 'src/components/shared';
import { UiDatePicker, UiSelect } from 'src/components/ui';
import {
  useCreateGroupsMutation,
  useEditGroupsMutation,
  useGetTeachersQuery,
} from 'src/services/index.api';
import { TGroupChange } from 'src/services/index.types';
import { useFormStorageStore } from 'src/store';
import { formatNum, dateFormatter } from 'src/utils';

export const FormGroups = () => {
  const [form] = Form.useForm<TGroupChange>();
  const paramsForm = useFormStorageStore((state) => state.paramsForm);
  const { data: teachers } = useGetTeachersQuery({ page: 10 });
  const {
    mutate: createGroup,
    isLoading: createLoading,
    isError: createError,
  } = useCreateGroupsMutation();
  const {
    mutate: editGroup,
    isLoading: editLoading,
    isError: editError,
  } = useEditGroupsMutation();

  const teachersOptions = teachers?.data.map((teacher) => ({
    value: teacher.id,
    label: `${teacher.first_name} ${teacher.last_name}`,
  }));

  const onFinish = (values: TGroupChange) => {
    if (values.start_date) {
      values.start_date = dateFormatter(values.start_date);
    }
    if (paramsForm) {
      editGroup({
        ...values,
      });
    } else {
      createGroup({
        ...values,
      });
    }
  };

  useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({
        ...paramsForm,
        teacher_id:
          paramsForm.teachers.find((el: TGroupChange) => !el.assistant).id ||
          null,
        assistant:
          paramsForm.teachers.find((el: TGroupChange) => el.assistant).id ||
          null,
      });
    }
  }, [paramsForm, form]);

  return (
    <GlobalDrawer
      form={form}
      isLoading={createLoading || editLoading}
      isError={createError || editError}
    >
      <Form
        name="Group Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item<TGroupChange>
          name="name"
          label="Название группа"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите название группа!',
            },
          ]}
        >
          <Input placeholder="Введите название группа" />
        </Form.Item>

        <Form.Item<TGroupChange>
          name="description"
          label="Название описание"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите описание!',
            },
          ]}
        >
          <Input placeholder="Введите название описание" />
        </Form.Item>

        <Form.Item<TGroupChange>
          name="teacher_id"
          label="Учитель"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, выберите учителя!',
            },
          ]}
        >
          <UiSelect placeholder="Выберите учителя" options={teachersOptions} />
        </Form.Item>

        <Form.Item<TGroupChange>
          name="assistant"
          label="Ассистент"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, выберите ассистента!',
            },
          ]}
        >
          <UiSelect
            placeholder="Выберите ассистента"
            options={teachersOptions}
          />
        </Form.Item>

        {!paramsForm && (
          <Form.Item<TGroupChange>
            name="start_date"
            label="Дата"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, выберите дату!',
              },
            ]}
          >
            <UiDatePicker placeholder="Выберите дату" />
          </Form.Item>
        )}

        <Form.Item
          name="price"
          label="Цена"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите Цена!',
            },
          ]}
        >
          <InputNumber
            formatter={formatNum}
            addonAfter="uzs"
          />
        </Form.Item>

        <Form.Item<TGroupChange>
          name="duration"
          label="Продолжительность"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите продолжительность!',
            },
          ]}
        >
          <InputNumber
            style={{ width: '100%' }}
            placeholder="Введите продолжительность"
          />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};
