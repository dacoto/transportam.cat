<script setup lang="ts">
import GooglePlayLogo from "~/assets/svg/google-play.svg?component"
import AppStoreLogo from "~/assets/svg/app-store.svg?component"

useHead({
  link: [{ rel: 'canonical', href: 'https://transportam.cat/download' }],
})
</script>

<template>
  <ClientOnly>
    <DownloadRedirect />
  </ClientOnly>
  <Container class="py-20 sm:py-32">
    <div class="flex flex-col items-center">
      <div class="mb-20 border border-neutral-300 rounded-lg hidden lg:inline">
        <DownloadQrCard />
      </div>
      <div class="m-auto flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8">
        <a href="https://play.google.com/store/apps/details?id=cat.transportam.app" target="_blank">
          <GooglePlayLogo class="h-12" />
        </a>
        <a href="https://apps.apple.com/es/app/transportam/id6741533340" target="_blank">
          <AppStoreLogo class="h-12" />
        </a>
      </div>
    </div>
  </Container>
</template>
