import { Form, Input } from 'antd';
import { GlobalDrawer } from 'src/components/shared';
import { useEditHolidayMutation } from 'src/services/index.api';
import { THoliday } from 'src/services/index.types';

export const FormHoliday = () => {
  const [form] = Form.useForm<THoliday>();
  const {
    // mutate: editHoliday,
    isLoading: editLoading,
    isError: editError,
  } = useEditHolidayMutation();

  const onFinish = (values: THoliday) => {
    return values;
  };

  return (
    <GlobalDrawer form={form} isLoading={editLoading} isError={editError}>
      <Form
        name="Holiday Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          phone: '',
        }}
        requiredMark={false}
      >
        <Form.Item<THoliday>
          name="date"
          label="Выходные"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, укажите выходные!',
            },
          ]}
        >
          <Input type="date" placeholder="Введите выходные" />
        </Form.Item>
        {/* <Form.Item<THoliday>
                    name="any"
                    label="Праздничный день"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, укажите выходные!',
                        },
                    ]}
                >
                    <Input placeholder="Введите выходные" />
                </Form.Item> */}
      </Form>
    </GlobalDrawer>
  );
};
