export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore();

    if (authStore.isAuthed) {
        return navigateTo('/');
    }
})