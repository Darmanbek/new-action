import {
	Rate,
	Space,
	Tooltip,
} from "antd";
import Icon, {
	DeleteOutlined,
	EyeFilled,
} from "@ant-design/icons";
import { IoSnow, IoSunny } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { GlobalPopconfirm } from "src/components/shared";
import { UiButton, UiTag, UiTooltipButton } from "src/components/ui";
import { useCreateFrozenStatusMutation } from "src/services/frozen-status/frozen.status.api";
import { useDeleteGroupsStudentsMutation } from "src/services/groups/groups.api";
import { TStudent } from "src/services/index.types";
import { formatEmpty, phoneFormatter, priceFormatter } from "src/utils";

export const useColumnsStudents = () => {
	const navigate = useNavigate();
	const { group_id } = useParams();

	const { mutate: deleteStudent } = useDeleteGroupsStudentsMutation(group_id);
	const { mutate: onFrozen } = useCreateFrozenStatusMutation();

	const frozenStudent = (item: TStudent) => {
		onFrozen({
			student_id: item.id,
			is_frozen: !item?.frozen_status?.is_frozen,
		});
	};

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
						<UiTag icon={<Icon component={IoSnow} />} color={"cyan"}>
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
					<GlobalPopconfirm
						title={`${student.first_name} ${student.last_name}`}
						onConfirm={() => frozenStudent(student)}
					>
						<UiTooltipButton
							title={student?.frozen_status?.is_frozen ? "Разморозить" : "Заморозить"}
							type={"primary"}
							shape={"circle"}
							showTitle={true}
							color={student?.frozen_status?.is_frozen ? "orange" : "darkcyan"}
							icon={<Icon component={student?.frozen_status?.is_frozen ? IoSunny : IoSnow} />}
							aria-label="Snow"
						/>
					</GlobalPopconfirm>
					<GlobalPopconfirm
						title={`${student.first_name} ${student.last_name}`}
						onConfirm={() => deleteStudent({ student_id: [student.id] })}
					>
						<UiTooltipButton
							title={"Удалить"}
							type={"primary"}
							shape={"circle"}
							showTitle={true}
							danger={true}
							icon={<DeleteOutlined />}
							aria-label="Delete"
						/>
					</GlobalPopconfirm>
				</Space>
			),
		},
	];

	return columns;
};
