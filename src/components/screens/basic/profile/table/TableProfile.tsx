import { Tooltip } from "antd";
import { FC } from "react";
import { BiArrowBack, BiSolidEditAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetMeQuery } from "src/services";
import { useFormStorageStore } from "src/store";
import { useColumnsProfile } from "./useColumnsProfile";

const TableProfile: FC = () => {
	const { data: user, isLoading } = useGetMeQuery();
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
	const navigate = useNavigate();

	const columns = useColumnsProfile();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Профиль"
					children={[
						<Tooltip title="Изменить" key="Edit">
							<UiButton
								key="Edit_Button"
								type="primary"
								icon={<BiSolidEditAlt />}
								onClick={() => setParamsForm(user?.data)}
								aria-label="Edit"
							/>
						</Tooltip>,
						<Tooltip title="Назад" key="Back">
							<UiButton
								key="Back_Button"
								type="primary"
								icon={<BiArrowBack />}
								onClick={() => navigate(-1)}
							/>
						</Tooltip>,
					]}
				/>
			)}
			dataSource={[user?.data]}
			columns={columns}
			loading={isLoading}
			pagination={false}
		/>
	);
};

export { TableProfile };
