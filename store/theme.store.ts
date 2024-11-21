import { defineStore } from "pinia";

enum Theme {
    Light = 'light',
    Dark = 'dark',
}

const THEME = 'theme';

export const useThemeStore = defineStore(THEME, {
    state: () => ({
        theme: Theme.Light as Theme,
    }),
    actions: {
        initTheme() {
            if (import.meta.client) {
                const savedTheme = localStorage.getItem(THEME) as Theme | null;
                this.theme = savedTheme === Theme.Dark ? Theme.Dark : Theme.Light;
            }
        },
        toggleTheme() {
            this.theme = this.theme === Theme.Light ? Theme.Dark : Theme.Light;
            if (import.meta.client) {
                localStorage.setItem(THEME, this.theme);
            }
        },
    },
    getters: {
        getTheme: (state) => state.theme,
    },
});