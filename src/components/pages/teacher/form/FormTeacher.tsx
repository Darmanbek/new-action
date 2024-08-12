import { useState, useEffect } from 'react';
import { Form, Input, Radio, Upload, Button } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { GlobalDrawer } from 'src/components/shared';
import { UiInputMask, UiDatePicker } from 'src/components/ui';
import {
  useCreateTeachersMutation,
  useEditTeachersMutation,
} from 'src/services/index.api';
import { TTeacherChange } from 'src/services/index.types';
import { useFormStorageStore } from 'src/store';
import { phoneReverseFormatter } from 'src/utils';

export const FormTeacher = () => {
  const [form] = Form.useForm<TTeacherChange>();
  const [isMale, setIsMale] = useState<number | null>(null);
  const paramsForm = useFormStorageStore((state) => state.paramsForm);
  const {
    mutate: createTeacher,
    isLoading: createLoading,
    isError: createError,
  } = useCreateTeachersMutation();
  const {
    mutate: editTeacher,
    isLoading: editLoading,
    isError: editError,
  } = useEditTeachersMutation();

  const normFile = (e: any) => {
    if (Array.isArray(e)) return e;
    return e?.fileList;
  };

  const onFinish = (values: TTeacherChange) => {
    const formData = new FormData();

    if (values.phone) {
      formData.append('phone', phoneReverseFormatter(values.phone));
    }
    if (values.avatar && Array.isArray(values.avatar) && values.avatar.length) {
      const [avatar] = values.avatar;
      formData.append('avatar', avatar.originFileObj as File);
    }
    formData.append('first_name', values.first_name);
    formData.append('last_name', values.last_name);
    formData.append('is_male', values.is_male);
    formData.append('password', values.password);
    formData.append('birthday', values.birthday);
    if (paramsForm) {
      editTeacher({
        ...values,
        assistant: false,
        id: paramsForm.id,
        group_count: 0,
        groups: [],
      });
    } else {
      createTeacher(formData);
    }
  };

  useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({
        ...paramsForm,
        phone: `+${paramsForm.phone}`,
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
        name="Teacher Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          phone: '',
          is_male: isMale,
        }}
        requiredMark={false}
      >
        <Form.Item<TTeacherChange>
          name="first_name"
          label="Имя"
          rules={[{ required: true, message: 'Пожалуйста, введите Имя!' }]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>

        <Form.Item<TTeacherChange>
          name="last_name"
          label="Фамилия"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите Фамилию!',
            },
          ]}
        >
          <Input placeholder="Введите фамилию" />
        </Form.Item>

        <Form.Item<TTeacherChange>
          name="phone"
          label="Телефон"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите Телефон!',
            },
          ]}
        >
          <UiInputMask
            placeholder="Введите телефон номер"
            mask={'+\\9\\98 99 999 99 99'}
          />
        </Form.Item>

        {!paramsForm && (
          <Form.Item<TTeacherChange>
            name="birthday"
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

        <Form.Item<TTeacherChange> name="is_male" label="Пол">
          <Radio.Group
            value={isMale}
            onChange={(e: RadioChangeEvent) => setIsMale(e.target.value)}
          >
            <Radio value={0}>Мужчина</Radio>
            <Radio value={1}>Женщина</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<TTeacherChange>
          name="avatar"
          label="Фото"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            action="http://localhost:5173/"
            beforeUpload={() => false}
            maxCount={1}
            listType="picture"
            accept=".png, .jpg, .jpeg"
          >
            <Button icon={<UploadOutlined />}>Нажмите, чтобы загрузить</Button>
          </Upload>
        </Form.Item>

        <Form.Item<TTeacherChange>
          name="password"
          label="Пароль"
          rules={[
            {
              required: !paramsForm,
              message: 'Пожалуйста, введите Пароль!',
            },
          ]}
        >
          <Input.Password placeholder="Введите пароль" type="password" />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};
