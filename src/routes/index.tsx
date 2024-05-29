import { RouteProps } from "react-router-dom";
import { 
  Profile,
	NotFound,
	Teacher,
	Student,
	Groups,
	Group,
	GroupStudents,
	GroupLessons,
	Home
} from "src/components/screens";

export const useRoutes = () => {

	const routes: RouteProps[] = [
		{ path: "/", element: <Home />},
		
		{ path: "/teachers", element: <Teacher />},
		{ path: "/students", element: <Student />},
		{ path: "/groups", element: <Groups />},
		{ path: "/groups/:group_id", element: <Group />},
		{ path: "/groups/:group_id/students", element: <GroupStudents />},
		{ path: "/groups/:group_id/lessons", element: <GroupLessons />},

		{ path: "/profile", element: <Profile /> },
		{ path: "*", element: <NotFound /> },
	];
	return routes;
};
