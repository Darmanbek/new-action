import type { MenuProps } from "antd";
import {
	UserOutlined,
	TeamOutlined,
	DollarOutlined,
	UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { BsBuildings } from "react-icons/bs";
import { IoLayersOutline } from "react-icons/io5";
import { LuPieChart } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiChatsLight } from "react-icons/pi";
import { getRoleFromToken } from "src/config/token.config";
import { TRoleTypes } from "src/services/index.types";

export const useMenuRoutes = () => {
	const role = getRoleFromToken();

	const menuItems = [
		{ key: "/admins", icon: <UserOutlined />, label: "Админы" },
		{ key: "/teachers", icon: <TeamOutlined />, label: "Учителя" },
		{ key: "/groups", icon: <IoLayersOutline />, label: "Группы" },
		{ key: "/companies", icon: <BsBuildings />, label: "Филиалы" },
		{ key: "/acceptance", icon: <MdOutlineMailOutline />, label: "Заявки" },
		// { key: "/holiday", icon: <LuCalendarCheck />, label: "Каникулы" },
		{
			key: "/finance", icon: <LuPieChart />, label: "Финансы",
			children: [
				{
					key: "/finance/profits",
					icon: <DollarOutlined />,
					label: "Прибыль",
				},
				{
					key: "/finance/debtors",
					icon: <UsergroupDeleteOutlined />,
					label: "Должники",
				},
			],
		},
		{ key: "/chat", icon: <PiChatsLight />, label: "Чат" },
	];

	type TRolesMenuMap = {
		[role: string]: string[];
	};

	const rolesMenuMap: TRolesMenuMap = {
		super_admin: [
			"/admins",
			"/teachers",
			"/groups",
			// "/companies",
			"/acceptance",
			"/holiday",
			"/finance",
			"/chat",
		],
		admin: [
			"/teachers",
			"/groups",
			"/acceptance",
			"/finance",
			"/chat"
		],
		director: [
			"/admins",
			"/groups",
			"/teachers",
			"/finance",
			"/chat"
		],
	};

	const getMenuItemsForRole = (role: TRoleTypes): MenuProps["items"] => {
		return menuItems.filter((item) => rolesMenuMap[role].includes(item.key));
	};

	const super_admin = getMenuItemsForRole("super_admin");
	const admin = getMenuItemsForRole("admin");
	const director = getMenuItemsForRole("director");

	if (role === "super_admin") return super_admin;

	if (role === "admin") return admin;

	return director;
};
