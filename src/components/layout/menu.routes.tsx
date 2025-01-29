import {
	DollarOutlined,
	HomeOutlined,
	TeamOutlined,
	UsergroupDeleteOutlined,
	UserOutlined
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { BsBuildings } from "react-icons/bs"
import { IoLayersOutline, IoNewspaperOutline } from "react-icons/io5"
import { LuCalendarCheck, LuPieChart } from "react-icons/lu"
import { MdOutlineMailOutline } from "react-icons/md"
import { PiChatsLight, PiStudent } from "react-icons/pi"
import { ROUTES } from "src/config"
import { rolesMenuMap } from "src/data"
import { TRoleTypes } from "src/services/shared"
import { useAuthPersistStore } from "src/store"

export const useMenuRoutes = () => {
	const role = useAuthPersistStore((state) => state.role)

	const menuItems = [
		{ key: ROUTES.DASHBOARD, icon: <HomeOutlined />, label: "Главная" },
		{ key: ROUTES.ADMINS, icon: <UserOutlined />, label: "Админы" },
		{ key: ROUTES.TEACHERS, icon: <TeamOutlined />, label: "Учителя" },
		{ key: ROUTES.GROUPS, icon: <IoLayersOutline />, label: "Группы" },
		{ key: ROUTES.COMPANIES, icon: <BsBuildings />, label: "Филиалы" },
		{ key: ROUTES.ACCEPTANCES, icon: <MdOutlineMailOutline />, label: "Заявки" },
		{ key: ROUTES.STUDENTS, icon: <PiStudent />, label: "Студенты" },
		{ key: ROUTES.HOLIDAY, icon: <LuCalendarCheck />, label: "Праздничные дни" },
		{ key: ROUTES.STORIES, icon: <IoNewspaperOutline />, label: "Новости" },
		role !== "director"
			? {
					key: ROUTES.FINANCES.ROOT,
					icon: <LuPieChart />,
					label: "Финансы",
					children: [
						{
							key: ROUTES.FINANCES.PROFITS,
							icon: <DollarOutlined />,
							label: "Прибыль"
						},
						{
							key: ROUTES.FINANCES.DEBTORS,
							icon: <UsergroupDeleteOutlined />,
							label: "Должники"
						}
					]
				}
			: {
					key: ROUTES.FINANCES.ROOT,
					icon: <LuPieChart />,
					label: "Финансы"
				},
		{ key: ROUTES.CHAT, icon: <PiChatsLight />, label: "Чат" }
	]

	const getMenuItemsForRole = (role: TRoleTypes): MenuProps["items"] => {
		return menuItems.filter((item) => rolesMenuMap[role].includes(item.key))
	}

	const super_admin = getMenuItemsForRole("super_admin")
	const admin = getMenuItemsForRole("admin")
	const director = getMenuItemsForRole("director")

	if (role === "super_admin") return super_admin

	if (role === "admin") return admin

	return director
}
