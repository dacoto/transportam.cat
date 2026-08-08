<script setup lang="ts">
import Icon from "~/assets/svg/icon.svg?component"

const footerLinks = [
  { to: '/#features', label: 'Funcionalitats' },
  { to: '/#reviews', label: 'Valoracions' },
  { to: '/download', label: 'Descarregar' },
  { to: '/contact', label: 'Contacte' },
]

const legalLinks = [
  { to: '/legal-notice', label: 'Avís legal' },
  { to: '/privacy-policy', label: 'Privacitat' },
  { to: '/terms', label: 'Termes i condicions' },
]
</script>

<template>
  <footer class="border-t border-neutral-200">
    <Container>
      <div class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
        <div>
          <div class="flex items-center text-neutral-900">
            <Icon class="h-12 w-12 flex-none" />
            <div class="ml-4">
              <p class="text-base font-semibold">Transporta'm</p>
              <p class="text-sm">El transport a temps real.</p>
            </div>
          </div>
          <nav aria-label="Navegació del peu" class="mt-11 flex flex-wrap gap-x-8 gap-y-4">
            <NuxtLink
              v-for="link in footerLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
        <DownloadQrCard />
      </div>
      <div class="flex flex-col items-center border-t border-neutral-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
        <nav aria-label="Informació legal" class="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <NuxtLink
            v-for="link in legalLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <p class="mt-6 text-sm text-neutral-500 md:mt-0">
          &copy; Copyright {{ new Date().getFullYear() }}. Tots els drets reservats.
        </p>
      </div>
    </Container>
  </footer>
</template>
