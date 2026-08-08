<template>
  <div class="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
    <div class="relative z-10 order-last col-span-6 space-y-6">
      <div
        v-for="(feature, i) in features"
        @click="selected = i"
        class="relative rounded-2xl transition-colors cursor-pointer"
        :class="[ selected === i ? 'bg-neutral-800': ' hover:bg-neutral-800/30']"
      >
        <div class="relative z-10 p-8">
          <Icon :icon="feature.icon" class="h-8 w-8 fill-neutral-300" />
          <h3 class="mt-6 text-lg font-semibold text-white">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm text-neutral-400">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="relative col-span-6">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <CircleBackground class="animate-spin-slower" />
      </div>
      <PhoneFrame class="z-10 mx-auto w-full max-w-[366px]">
        <img loading="lazy" :src="features[selected]!.img" :alt="`Pantalla de ${features[selected]!.title} a Transporta'm`" />
      </PhoneFrame>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
import features from "../data/features.json"
import Icon from "./Icon.vue";
import PhoneFrame from "./PhoneFrame.vue";
import CircleBackground from "../assets/svg/circle-background.svg";

const selected = ref(0)
</script>
