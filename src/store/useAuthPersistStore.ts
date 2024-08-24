import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TTokenAuth } from "src/services/auth/auth.types";

interface IAuthPersistStore {
	role: TTokenAuth["role"] | null;
	role_id: TTokenAuth["role_id"] | null;
	token: TTokenAuth["token"] | null;
	company: Pick<TTokenAuth["company"], "id" | "name"> | null;
	toCompany: (company: TTokenAuth["company"]) => void;
	signIn: (tokens: TTokenAuth) => void;
	signOut: () => void;
}

export const useAuthPersistStore = create(
	persist<IAuthPersistStore>(
		(set) => ({
			role: null,
			role_id: null,
			token: null,
			company: null,
			signIn: (tokens) => set(tokens),
			toCompany: (company: TTokenAuth["company"]) => set((state) => ({ ...state, company })),
			signOut: () => set({ role: null, role_id: null, token: null, company: null }),
		}),
		{
			name: "token",
		},
	),
);
