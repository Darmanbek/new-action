import { create } from 'zustand';

interface IMenuStore {
  open: boolean;
  collapsed: boolean;
  profileOpen: boolean;
  toggleOpen: () => void;
  toggleCollapsed: () => void;
  toggleProfileOpen: () => void;
  setProfileOpen: (open: boolean) => void;
}

export const useMenuStore = create<IMenuStore>()((set) => ({
  open: false,
  collapsed: false,
  profileOpen: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  toggleProfileOpen: () =>
    set((state) => ({ profileOpen: !state.profileOpen })),
  setProfileOpen: (open) => set({ profileOpen: open }),
}));
