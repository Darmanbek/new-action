import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IToken {
	token: string | null;
}

interface IAuthPersistStore {
	token: IToken["token"];
	signIn: (tokens: { token: string }) => void;
	signOut: () => void;
}

const useAuthPersistStore = create(
	persist<IAuthPersistStore>(
		(set) => ({
			token: null,
			role: null,
			user_id: null,
			signIn: ({ token }) => set({ token }),
			signOut: () => set({ token: null, }),
		}),
		{
			name: "token",
		}
	)
);

export { useAuthPersistStore };
