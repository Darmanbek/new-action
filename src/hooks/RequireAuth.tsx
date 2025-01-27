import { FC, ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAuthPersistStore } from "src/store"

export const RequireAuth: FC<{ children: ReactNode }> = ({ children }) => {
	const token = useAuthPersistStore((state) => state.token)
	return token ? children : <Navigate to={"/login"} replace={true} />
}
