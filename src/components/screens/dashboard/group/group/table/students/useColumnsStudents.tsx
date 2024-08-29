import {
	Rate,
	Space,
	Tooltip,
} from "antd";
import Icon, {
	EyeFilled,
} from "@ant-design/icons";
import { IoSnow } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { UiButton, UiTag } from "src/components/ui";
import { TStudent } from "src/services/index.types";
import { formatEmpty, phoneFormatter, priceFormatter } from "src/utils";

export const useColumnsStudents = () => {
	const navigate = useNavigate();

	const columns: ColumnsType<TStudent> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1,
		},
		{
			ellipsis: true,
			title: "Имя Фамилия",
			dataIndex: "name",
			key: "name",
			render: (_, student) => (
				<Space>
					<Link to={`students/${student.id}`}>
						{`${student.first_name} ${student.last_name}`}
					</Link>
					{student?.frozen_status?.is_frozen && (
						<UiTag icon={<Icon><IoSnow /></Icon>} color={"cyan"}>
							Заморожен
						</UiTag>
					)}
				</Space>
			),
		},
		{
			ellipsis: true,
			// rowScope: "row",
			title: "Рейтинг",
			key: "rating",
			render: (_v, student) => (
				<Space>
					<Rate count={1} value={1} disabled={true} />
					{student?.rating}
				</Space>
			),
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		{
			align: "center",
			ellipsis: true,
			title: "Баланс",
			dataIndex: "balance",
			key: "balance",
			render: (balance: TStudent["balance"]) => (
				<UiTag color={Number(balance?.total_amount) >= 0 ? "green" : "red"}>
					{priceFormatter(balance?.total_amount)}
				</UiTag>
			),
		},
		{
			align: "center",
			ellipsis: true,
			title: "Дата оплаты",
			dataIndex: "balance",
			key: "balance_recharge",
			render: (balance: TStudent["balance"]) => formatEmpty(balance?.balance_recharge?.deadline),
		},
		{
			fixed: "right",
			width: 100,
			align: "center",
			title: "Действия",
			key: "actions",
			render: (_v, student) => (
				<Space onClick={(e) => e.stopPropagation()}>
					<Tooltip title="Смотреть">
						<UiButton
							shape={"circle"}
							icon={<EyeFilled />}
							onClick={() => navigate(`students/${student.id}`)}
							aria-label="View"
						/>
					</Tooltip>
				</Space>
			),
		},
	];

	return columns;
};
