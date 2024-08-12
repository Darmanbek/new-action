import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TTokenAuth } from 'src/services/auth/auth.types';

interface IAuthPersistStore {
  role: TTokenAuth['role'] | null;
  role_id: TTokenAuth['role_id'] | null;
  token: TTokenAuth['token'] | null;
  signIn: (tokens: TTokenAuth) => void;
  signOut: () => void;
}

export const useAuthPersistStore = create(
  persist<IAuthPersistStore>(
    (set) => ({
      role: null,
      role_id: null,
      token: null,
      signIn: (tokens) => set(tokens),
      signOut: () => set({ role: null, role_id: null, token: null }),
    }),
    {
      name: 'token',
    }
  )
);
