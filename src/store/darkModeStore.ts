import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "theme",
    }
  )
);
