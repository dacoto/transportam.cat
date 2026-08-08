import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://transportam.cat',
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ca',
        class: 'bg-neutral-50 antialiased scroll-smooth'
      },
      bodyAttrs: {
        class: 'min-h-screen flex flex-col'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'description', content: "L’app per consultar l’estat del transport públic en temps real. Descobreix horaris, incidències i estat del servei, per planificar els teus trajectes de forma ràpida i eficient. Ideal per moure’t sense sorpreses!" },
        { property: 'og:title', content: "Transporta'm | Transport públic en temps real" },
        { property: 'og:description', content: "L’app per consultar l’estat del transport públic en temps real." },
        { property: 'og:url', content: 'https://transportam.cat' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "Transporta'm" },
        { name: 'twitter:description', content: 'El transport públic a temps real.' }
        // { property: 'og:image', content: '/og-image.jpg' },
        // { name: 'twitter:image', content: '/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }
      ],
      title: "Transporta'm | El transport públic a temps real"
    }
  },

  modules: ['nuxt-svgo', '@nuxtjs/sitemap'],

  svgo: {
    defaultImport: 'component',
  },
})
