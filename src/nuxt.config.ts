// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ],
    runtimeConfig: {
        public: {
            kontent: {
                environmentId: process.env.KONTENT_ENVIRONMENT_ID,
                previewApiKey: process.env.KONTENT_PREVIEW_KEY,
            }
        }
    },
    app: {
        head: {
            link: [{
                rel: 'stylesheet',
                href: '/fonts/fontello-771c82e0/css/fontello.css'
            }],
            script: [
                {
                    type: 'text/javascript',
                    src: 'https://cdn.jsdelivr.net/npm/@kentico/kontent-smart-link@2.0.0/dist/kontent-smart-link.umd.min.js'
                }
            ]
        }
    },
    css: [
        '~/assets/scss/init.scss',
    ],
})
