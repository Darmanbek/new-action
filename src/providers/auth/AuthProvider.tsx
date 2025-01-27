import { type FC, PropsWithChildren } from "react"
import { AuthContext } from "src/providers/auth/AuthContext"
import { useAuthPersistStore } from "src/store"

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const token = useAuthPersistStore((state) => state.token)
	const role = useAuthPersistStore((state) => state.role)
	const company = useAuthPersistStore((state) => state.company)

	return (
		<AuthContext.Provider
			value={{
				isAuth: !!token,
				isDirector: role === "director",
				companyId: company?.id
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider }
