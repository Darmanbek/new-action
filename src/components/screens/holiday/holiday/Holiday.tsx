import { FormHoliday } from 'src/components/screens/holiday/holiday/form/FormHoliday';
import { TableHoliday } from 'src/components/screens/holiday/holiday/table/TableHoliday';
import { FC } from "react";

const Holiday: FC = () => {
  return (
    <>
      <FormHoliday />
      <TableHoliday />
    </>
  );
};

export default Holiday;
