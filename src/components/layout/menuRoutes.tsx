import { MenuProps } from "antd";
import {
	LuLayoutGrid,
	LuUser2,
	LuUsers2,
	// LuBanknote,
	// LuClipboardList,
	// LuShoppingBag,
	// LuShoppingCart,
	// LuUserCog2,
} from "react-icons/lu";


export const useMenuRoutes = () => {

	const routes: MenuProps["items"] = [
		{
			key: "/teachers",
			icon: <LuUser2 />,
			label: "Учителя",
		},
		{
			key: "/students",
			icon: <LuUsers2 />,
			label: "Студенты",
		},
		{
			key: "/groups",
			icon: <LuLayoutGrid />,
			label: "Группы",
		},
		// {
		// 	key: "/shops",
		// 	icon: <LuShoppingBag />,
		// 	label: "Магазины",
		// },
		// {
		// 	key: "/roles",
		// 	icon: <LuUserCog2 />,
		// 	label: "Роли",
		// },
		// {
		// 	key: "/orders",
		// 	icon: <LuShoppingCart />,
		// 	label: "Заказы",
		// },
		// {
		// 	key: "/finances",
		// 	icon: <TbReportMoney />,
		// 	label: "Финансы",
		// },
		// {
		// 	key: "/balance",
		// 	icon: <IoCardOutline />,
		// 	label: "Баланс",
		// },
		// {
		// 	key: "/statistics",
		// 	icon: <LuClipboardList />,
		// 	label: "Статистика",
		// },
		// {
		// 	key: "/payments",
		// 	icon: <TbReport />,
		// 	label: "Отчёт",
		// },
		// {
		// 	key: "/shop-payments",
		// 	icon: <TbReport />,
		// 	label: "Отчёт",
		// },
		// {
		// 	key: "/pays",
		// 	icon: <LuBanknote />,
		// 	label: "Платежи",
		// },
		// {
		// 	key: "/shop-pays",
		// 	icon: <LuBanknote />,
		// 	label: "Платежи",
		// }
	]

	return routes;
};
