<script setup lang="ts">
const title = "Transporta'm | Transport públic en temps real a Catalunya"
const description = "Consulta horaris, properes sortides, incidències i l’estat del transport públic en temps real a Barcelona i Catalunya amb Transporta'm."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://transportam.cat',
  ogType: 'website',
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  link: [{ rel: 'canonical', href: 'https://transportam.cat' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MobileApplication',
        name: "Transporta'm",
        url: 'https://transportam.cat',
        description,
        applicationCategory: 'TravelApplication',
        operatingSystem: 'Android, iOS',
        downloadUrl: [
          'https://play.google.com/store/apps/details?id=cat.transportam.app',
          'https://apps.apple.com/es/app/transportam/id6741533340',
        ],
        publisher: {
          '@type': 'Organization',
          name: "Transporta'm",
          url: 'https://transportam.cat',
          logo: 'https://transportam.cat/icon.svg',
        },
      }),
    },
  ],
})
</script>

<template>
  <Hero />
  <Features />
  <Reviews />
  <Questions />
</template>
