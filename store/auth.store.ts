import {defineStore} from 'pinia';
import {ref, watchEffect} from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
    const cookie = useCookie('my_auth_token');
    const isAuth = ref(false);
    const userName = ref<string | null>(null);
    const router = useRouter();

    watchEffect(() => {
        if (cookie.value) {
            isAuth.value = true;
            userName.value = cookie.value.user?.name || null;
        } else {
            isAuth.value = false;
            userName.value = null;
        }
    });

    async function register(registerFormData: any) {
        try {
            const {name, email, password, confirmPassword} = registerFormData;
            const finalName = name.trim() === '' ? 'Пользователь' : name;
            const result = await $fetch('http://localhost:8000/api/auth/register', {
                method: 'POST',
                body: {
                    name: finalName,
                    email,
                    password,
                    password_confirmation: confirmPassword,
                },
            });
            cookie.value = result;
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    async function login(loginFormData: any) {
        try{
            const { email, password } = loginFormData;
            const result = await $fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                body: {
                    email,
                    password,
                },
            });
            cookie.value = result;
            userName.value = result.user?.name;
            console.log(cookie.value)
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    async function logout() {
        await $fetch('http://localhost:8000/api/auth/logout', {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${cookie.value.token}`,
            },
        });
        cookie.value = null;
        userName.value = null;
    }


    return {isAuth, userName, register, login, logout};
});
