import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'light', // Default value
    }),
    actions: {
        initTheme() {
            if (process.client) { // Check if running in the browser
                const savedTheme = localStorage.getItem('theme');
                this.theme = savedTheme || 'light';
            }
        },
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            if (process.client) {
                localStorage.setItem('theme', this.theme); // Persist the theme
            }
        },
    },
    getters: {
        getTheme: (state) => state.theme,
    },
});
