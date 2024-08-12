import { RouteProps } from 'react-router-dom';
import {
  Profile,
  NotFound,
  Teacher,
  Groups,
  GroupLessons,
  GroupStudents,
  GroupStudentsBalances,
  Home,
  Admin,
  Acceptance,
  Company,
  Holiday,
  FinanceProfits,
  FinanceDebtors,
  Chat,
} from 'src/components/pages';
import { useAuthPersistStore } from 'src/store';

export const useRoutes = () => {
  const roleName = useAuthPersistStore((state) => state.role);

  const super_admin: RouteProps[] = [
    { path: '/', element: <Home /> },
    { path: '/admins', element: <Admin /> },
    { path: '/admins/:admin_id', element: <Admin /> },
    { path: '/companies', element: <Company /> },
    { path: '/companies/:company_id', element: <Company /> },
    { path: '/acceptance', element: <Acceptance /> },
    { path: '/acceptance/:acceptance_id', element: <Acceptance /> },
    { path: '/teachers', element: <Teacher /> },
    { path: '/teachers/:teacher_id', element: <Teacher /> },
    { path: '/groups', element: <Groups /> },
    { path: '/groups/:group_id/lessons', element: <GroupLessons /> },
    { path: '/groups/:group_id/students', element: <GroupStudents /> },
    {
      path: '/groups/:group_id/students/:student_id/payments',
      element: <GroupStudentsBalances />,
    },
    { path: '/holiday', element: <Holiday /> },
    { path: '/finance', element: <Home /> },
    { path: '/finance/profits/:group_id', element: <FinanceProfits /> },
    { path: '/finance/debtors/:group_id', element: <FinanceDebtors /> },
    { path: '/chat', element: <Chat /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFound /> },
  ];

  const admin: RouteProps[] = [
    { path: '/', element: <Home /> },
    { path: '/admins', element: <Admin /> },
    { path: '/admins/:admin_id', element: <Admin /> },
    { path: '/companies', element: <Company /> },
    { path: '/companies/:company_id', element: <Company /> },
    { path: '/acceptance', element: <Acceptance /> },
    { path: '/acceptance/:acceptance_id', element: <Acceptance /> },
    { path: '/teachers', element: <Teacher /> },
    { path: '/teachers/:teacher_id', element: <Teacher /> },
    { path: '/groups', element: <Groups /> },
    { path: '/groups/:group_id/lessons', element: <GroupLessons /> },
    { path: '/groups/:group_id/students', element: <GroupStudents /> },
    {
      path: '/groups/:group_id/students/:student_id/payments',
      element: <GroupStudentsBalances />,
    },
    { path: '/holiday', element: <Holiday /> },
    { path: '/finance', element: <Home /> },
    { path: '/finance/profits/:group_id', element: <FinanceProfits /> },
    { path: '/finance/debtors/:group_id', element: <FinanceDebtors /> },
    { path: '/chat', element: <Chat /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFound /> },
  ];

  const director: RouteProps[] = [
    { path: '/', element: <Home /> },
    { path: '/admins', element: <Admin /> },
    { path: '/admins/:admin_id', element: <Admin /> },
    { path: '/companies', element: <Company /> },
    { path: '/companies/:company_id', element: <Company /> },
    { path: '/acceptance', element: <Acceptance /> },
    { path: '/acceptance/:acceptance_id', element: <Acceptance /> },
    { path: '/teachers', element: <Teacher /> },
    { path: '/teachers/:teacher_id', element: <Teacher /> },
    { path: '/groups', element: <Groups /> },
    { path: '/groups/:group_id/lessons', element: <GroupLessons /> },
    { path: '/groups/:group_id/students', element: <GroupStudents /> },
    {
      path: '/groups/:group_id/students/:student_id/payments',
      element: <GroupStudentsBalances />,
    },
    { path: '/holiday', element: <Holiday /> },
    { path: '/finance', element: <Home /> },
    { path: '/finance/profits/:group_id', element: <FinanceProfits /> },
    { path: '/finance/debtors/:group_id', element: <FinanceDebtors /> },
    { path: '/chat', element: <Chat /> },
    { path: '/profile', element: <Profile /> },
    { path: '*', element: <NotFound /> },
  ];

  if (roleName === 'super_admin') return super_admin;

  if (roleName === 'admin') return admin;

  return director;
};
