import { defineStore } from 'pinia';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const AUTH_TOKEN_COOKIE_NAME = 'auth_token';
const BACKEND_URL = 'http://localhost:8000/api';

interface User {
    name: string;
}
interface AuthCookie {
    token: string;
    user?: User;
}

export const useAuthStore = defineStore('auth', () => {
    const cookie = useCookie<AuthCookie | null>(AUTH_TOKEN_COOKIE_NAME);
    const isAuthed = ref<boolean>(false);
    const userName = ref<string | null>(null);
    const router = useRouter();

    watchEffect(() => {
        if (cookie.value) {
            isAuthed.value = true;
            userName.value = cookie.value.user?.name || null;
        } else {
            isAuthed.value = false;
            userName.value = null;
        }
    });

    async function register(registerFormData: { name: string; email: string; password: string; confirmPassword: string }) {
        try {
            const { name, email, password, confirmPassword } = registerFormData;
            const finalName = name.trim() === '' ? 'Пользователь' : name;
            const result = await $fetch<AuthCookie>(BACKEND_URL + '/auth/register', {
                method: 'POST',
                body: {
                    name: finalName,
                    email,
                    password,
                    password_confirmation: confirmPassword,
                },
            });
            cookie.value = result;
            await router.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    async function login(loginFormData: { email: string; password: string }) {
        try {
            const { email, password } = loginFormData;
            const result = await $fetch<AuthCookie>(BACKEND_URL+'/auth/login', {
                method: 'POST',
                body: {
                    email,
                    password,
                },
            });
            cookie.value = result;
            userName.value = result.user?.name || null;
            console.log(cookie.value);
            await router.push('/');
        } catch (err) {
            console.error(err);
        }
    }

    async function logout() {
        try {
            if (cookie.value?.token) {
                await $fetch(BACKEND_URL + '/auth/logout', {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${cookie.value.token}`,
                    },
                });
            }
            cookie.value = null;
            userName.value = null;
        } catch (err) {
            console.error(err);
        }
    }

    return { isAuthed, userName, register, login, logout };
});