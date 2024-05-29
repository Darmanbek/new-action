import { FC } from "react";
import { FormProfile } from "./form/FormProfile";
// import { DescProfile } from './descriptions/DescProfile';
import { TableProfile } from "./table/TableProfile";

const Profile: FC = () => {
	return (
		<>
			<FormProfile />
			<TableProfile />
			{/* <DescProfile /> */}
		</>
	);
};

export { Profile };
