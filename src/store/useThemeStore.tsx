import { create } from "zustand"

interface IThemeStore {
	isDark: boolean;
	onToggleTheme: () => void;
}

const useThemeStore = create<IThemeStore>()(
	(set) => ({
		isDark: false,
		onToggleTheme: () => set((state) => ({isDark: !state.isDark}))
	})
)

export { useThemeStore }
