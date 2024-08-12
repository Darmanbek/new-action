import type { MenuProps } from 'antd';
import {
  UserOutlined,
  CarryOutOutlined,
  ApartmentOutlined,
  InboxOutlined,
  TeamOutlined,
  AppstoreOutlined,
  DollarOutlined,
  PieChartOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { getRoleFromToken } from 'src/config/token.config';

export const useMenuRoutes = () => {
  const role = getRoleFromToken();

  const menuItems = [
    { key: '/admins', icon: <UserOutlined />, label: 'Админы' },
    { key: '/teachers', icon: <TeamOutlined />, label: 'Учителя' },
    { key: '/groups', icon: <AppstoreOutlined />, label: 'Группы' },
    { key: '/companies', icon: <ApartmentOutlined />, label: 'Филиалы' },
    { key: '/acceptance', icon: <InboxOutlined />, label: 'Заявки' },
    { key: '/holiday', icon: <CarryOutOutlined />, label: 'Каникулы' },
    {
      key: '/finance',
      icon: <PieChartOutlined />,
      label: 'Финансы',
      children: [
        {
          key: '/finance/profits/:group_id',
          icon: <DollarOutlined />,
          label: 'Прибыль',
        },
        {
          key: '/finance/debtors/:group_id',
          icon: <UsergroupDeleteOutlined />,
          label: 'Должники',
        },
      ],
    },
    { key: '/chat', icon: <CarryOutOutlined />, label: 'Чат' },
  ];

  type TrolesMenuMap = {
    [role: string]: string[];
  };

  const rolesMenuMap: TrolesMenuMap = {
    super_admin: [
      '/admins',
      '/teachers',
      '/groups',
      '/companies',
      '/acceptance',
      '/holiday',
      '/finance',
      '/chat',
    ],
    admin: ['/teachers', '/holiday', '/groups', '/finance', '/chat'],
    director: ['/admins', '/groups', '/teachers', '/finance', '/chat'],
  };

  const getMenuItemsForRole = (role: string): MenuProps['items'] => {
    return menuItems.filter((item) => rolesMenuMap[role].includes(item.key));
  };

  const super_admin = getMenuItemsForRole('super_admin');
  const admin = getMenuItemsForRole('admin');
  const director = getMenuItemsForRole('director');

  if (role === 'super_admin') return super_admin;

  if (role === 'admin') return admin;

  return director;
};
