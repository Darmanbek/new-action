import { createContext } from "react";

interface AuthContext {
	isAuth: boolean;
}

export const AuthContext = createContext<AuthContext | null>(null);
