<script setup lang="ts">
import GooglePlayLogo from "~/assets/svg/google-play.svg?component"
import AppStoreLogo from "~/assets/svg/app-store.svg?component"
import RodaliesLogo from "~/assets/svg/rodalies.svg?component"
import RenfeLogo from "~/assets/svg/renfe.svg?component"
import FgcLogo from "~/assets/svg/fgc.svg?component"
import TramLogo from "~/assets/svg/tram.svg?component"
import TmbLogo from "~/assets/svg/tmb.svg?component"
import AmbLogo from "~/assets/svg/amb.svg?component"
import BicingLogo from "~/assets/svg/bicing.svg?component"
import GanxetaLogo from "~/assets/svg/ganxeta.svg?component"
import Award4DLogo from "~/assets/svg/4d_award.svg?component"

const operators = [
  { component: RodaliesLogo, label: 'Rodalies' },
  { component: RenfeLogo, label: 'Renfe' },
  { component: FgcLogo, label: 'FGC' },
  { component: TramLogo, label: 'Tram' },
  { component: TmbLogo, label: 'TMB' },
  { component: AmbLogo, label: 'AMB' },
  { component: BicingLogo, label: 'Bicing' },
  { component: GanxetaLogo, label: 'Ganxeta' }
]

const awards = [
  {
    component: Award4DLogo,
    label: '4D',
    href: 'https://4d.cat/convocatoria/#finalistes'
  }
]
</script>

<template>
  <div class="overflow-hidden py-20 sm:pt-32 lg:pb-24">
    <Container>
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
          <h1 class="text-4xl font-medium tracking-tight text-neutral-900">
            El transport a temps real.
          </h1>
          <p class="mt-6 text-lg text-neutral-600">
            Consulta l’estat del transport públic a temps real,
            verifica els horaris, incidències i estat del servei,
            a Barcelona i Catalunya. Planifica els teus trajectes de forma ràpida i eficient
            sense sorpreses.
          </p>
          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <a
              href="https://play.google.com/store/apps/details?id=cat.transportam.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descarrega Transporta'm a Google Play"
            >
              <GooglePlayLogo class="h-10" />
            </a>
            <a
              href="https://apps.apple.com/es/app/transportam/id6741533340"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Descarrega Transporta'm a l’App Store"
            >
              <AppStoreLogo class="h-10" />
            </a>
          </div>
        </div>

        <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <BackgroundIllustration class="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-neutral-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
          <div class="-mx-4 h-[448px] [mask-image:linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            <PhoneFrame class="mx-auto max-w-[366px]">
              <img alt="Properes sortides de transport públic a Transporta'm" src="/stop_departures.webp" />
            </PhoneFrame>
          </div>
        </div>

        <div class="relative lg:col-span-7 xl:col-span-6 flex flex-col space-y-9">
          <div>
            <p class="text-center text-sm font-semibold text-neutral-900 lg:text-left">
              Entitats i operadors
            </p>
            <ul
              role="list"
              class="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-6 lg:mx-0 lg:justify-start"
            >
              <li
                v-for="operator in operators"
                :key="operator.label"
                class="flex"
              >
                <component :is="operator.component" class="w-22" />
              </li>
            </ul>
          </div>

          <div>
            <p class="text-center text-sm font-semibold text-neutral-900 lg:text-left">
              Premis
            </p>
            <ul
              role="list"
              class="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-8 gap-y-6 lg:mx-0 lg:justify-start"
            >
              <li
                v-for="award in awards"
                :key="award.label"
                class="flex"
              >
                <a :href="award.href" target="_blank" rel="noopener noreferrer" :aria-label="`Consulta el premi ${award.label}`">
                  <component :is="award.component" class="h-26" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
