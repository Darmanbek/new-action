import { createContext } from "react"

interface AuthContext {
	isAuth: boolean
	isDirector: boolean
	companyId?: string
}

export const AuthContext = createContext<AuthContext | null>(null)
