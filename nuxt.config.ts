export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    ssr: true,
    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'shadcn-nuxt',
            [
            '@nuxtjs/google-fonts',
                {
                    families: {
                        Nunito: {
                            wght: '200..900',
                            ital: '200..700',
                        }
                    }
                }],
        '@nuxt/icon',
    ],
    shadcn: {
        prefix: 'Ui',
        componentDir: './components/ui'
    },
    pinia: {
        storesDirs: ['./store/**']
    }
})