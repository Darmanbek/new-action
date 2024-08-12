import { useEffect } from 'react';
import { Form, Input } from 'antd';
import { GlobalDrawer } from 'src/components/shared';
import { UiInputMask } from 'src/components/ui';
import { useFormStorageStore } from 'src/store';
import { TAdmin } from 'src/services/index.types';

export const FormProfile = () => {
  const [form] = Form.useForm<TAdmin>();
  const paramsForm = useFormStorageStore((state) => state.paramsForm);

  const onFinish = (values: TAdmin) => {
    console.log(values);
  };

  useEffect(() => {
    if (paramsForm)
      form.setFieldsValue({
        ...paramsForm,
      });
  }, [paramsForm, form]);

  return (
    <GlobalDrawer form={form} isLoading={false} isError={false}>
      <Form
        name="Me Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          phone: '',
        }}
        requiredMark={false}
      >
        <Form.Item<TAdmin>
          name="first_name"
          label="Имя"
          rules={[{ required: true, message: 'Пожалуйста, введите Имя!' }]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item<TAdmin>
          name="last_name"
          label="Фамилия"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, введите Фамилию!',
            },
          ]}
        >
          <Input placeholder="Введите Фамилию" />
        </Form.Item>
        <Form.Item<TAdmin>
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
        {/* <Form.Item<TAdmin>
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: !paramsForm,
                            message: 'Пожалуйста, введите Пароль!',
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Введите пароль"
                        type="password"
                    />
                </Form.Item> */}
      </Form>
    </GlobalDrawer>
  );
};
