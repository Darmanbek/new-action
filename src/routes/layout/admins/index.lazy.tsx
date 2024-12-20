import { useAuthPersistStore } from "src/store";
import { FormAdmin } from "./form/FormAdmin";
import { TableAdmin } from "./table/TableAdmin";

export default function Admins() {
	const role = useAuthPersistStore(
		state => state.role
	);
	return (
		<>
			{role !== "director" && <FormAdmin />}
			<TableAdmin />
		</>
	);
}
