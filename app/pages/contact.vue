<script setup lang="ts">
import ObfuscatedEmail from "~/components/ObfuscatedEmail.vue";

const title = "Contacte | Transporta'm"
const description = "Contacta amb l’equip de Transporta'm per fer-nos arribar dubtes, suggeriments o avisos sobre l’aplicació."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: 'https://transportam.cat/contact',
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  link: [{ rel: 'canonical', href: 'https://transportam.cat/contact' }],
})
</script>

<template>
  <Container class="py-20 sm:py-32">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h1 class="text-3xl font-medium tracking-tight text-neutral-900">Contacte</h1>
      <p class="mt-4 text-base text-neutral-700">
        Tens dubtes, suggeriments o has trobat algun error? Ens encantarà llegir-te.
      </p>
    </div>

    <div class="mx-auto mt-12 max-w-2xl">
      <div class="rounded-2xl border border-neutral-200 p-8 sm:text-center">
        <h2 class="text-lg font-semibold text-neutral-900">Correu electrònic</h2>
        <p class="mt-2 text-sm text-neutral-700">
          Escriu-nos a
          <ObfuscatedEmail subject="Contacte des de transportam.cat" />
          i et respondrem tan aviat com puguem.
        </p>
      </div>
    </div>
  </Container>
</template>
