import { Form, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import { GlobalDrawer } from 'src/components/shared';
import { useCreateGroupStudentsBalancesMutation } from 'src/services/index.api';
import { TGroupStudentCreateBalance } from 'src/services/index.types';
import { formatNum, handleNumericInputKeyDown } from 'src/utils';

export const FormGroupStudentsBalances = () => {
  const [form] = Form.useForm<TGroupStudentCreateBalance>();
  const { student_id } = useParams();
  const {
    mutate: createGroupStudentBalances,
    isLoading: createLoading,
    isError: createError,
  } = useCreateGroupStudentsBalancesMutation();

  const onFinish = (values: TGroupStudentCreateBalance) => {
    createGroupStudentBalances({
      ...values,
      student_id: Number(student_id),
      payment_type_id: 1,
    });
  };

  return (
    <GlobalDrawer form={form} isLoading={createLoading} isError={createError}>
      <Form
        name="Group Students Balances Form"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        initialValues={{}}
        requiredMark={false}
      >
        <Form.Item
          name="amount"
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
            onKeyDown={handleNumericInputKeyDown}
          />
        </Form.Item>
      </Form>
    </GlobalDrawer>
  );
};
