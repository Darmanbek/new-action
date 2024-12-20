import { type  FC, PropsWithChildren } from "react";
import { AuthContext } from "src/providers/auth/AuthContext";
import { useAuthPersistStore } from "src/store";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const token = useAuthPersistStore((state) => state.token);
	return (
		<AuthContext.Provider value={{
			isAuth: !!token
		}}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };
