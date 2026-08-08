<script setup lang="ts">
import GooglePlayLogo from "~/assets/svg/google-play.svg?component"
import AppStoreLogo from "~/assets/svg/app-store.svg?component"

const title = "Descarrega Transporta'm per a Android i iOS"
const description = "Descarrega Transporta'm i consulta horaris, properes sortides, incidències i l’estat del transport públic en temps real."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://transportam.cat/download',
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  link: [{ rel: 'canonical', href: 'https://transportam.cat/download' }],
})
</script>

<template>
  <ClientOnly>
    <DownloadRedirect />
  </ClientOnly>
  <Container class="py-20 sm:py-32">
    <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
      <h1 class="text-4xl font-medium tracking-tight text-neutral-900">
        Descarrega Transporta'm
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-neutral-600">
        Consulta les properes sortides, els horaris, les incidències i l’estat del transport públic de Barcelona i Catalunya des d’un mateix lloc.
      </p>
      <p class="mt-3 max-w-2xl text-base text-neutral-500">
        Disponible per a Android i iPhone. Si visites aquesta pàgina des del mòbil, t’enviarem automàticament a la botiga corresponent.
      </p>
      <div class="my-16 hidden rounded-lg border border-neutral-300 lg:inline">
        <DownloadQrCard />
      </div>
      <div class="mt-10 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:gap-8">
        <a
          href="https://play.google.com/store/apps/details?id=cat.transportam.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Descarrega Transporta'm a Google Play"
        >
          <GooglePlayLogo class="h-12" />
        </a>
        <a
          href="https://apps.apple.com/es/app/transportam/id6741533340"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Descarrega Transporta'm a l’App Store"
        >
          <AppStoreLogo class="h-12" />
        </a>
      </div>
    </div>
  </Container>
</template>
