<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import {Carousel, type CarouselExposed, Slide} from 'vue3-carousel'
import features from "../data/features.json";
import {ref} from "vue";

const carouselRef = ref<CarouselExposed>()
</script>

<template>
  <Carousel ref="carouselRef" :itemsToShow="1">
    <Slide v-for="(feature, i) in features">
      <div class="w-full flex-none snap-center px-4 sm:px-6">
        <div class="relative transform overflow-hidden rounded-2xl bg-neutral-800 px-5 py-6">
          <PhoneFrame class="relative mx-auto w-full max-w-[366px]">
            <img loading="lazy" :src="feature.img" :alt="`Pantalla de ${feature.title} a Transporta'm`" />
          </PhoneFrame>
          <div class="absolute inset-x-0 bottom-0 bg-neutral-800/95 p-6 backdrop-blur-sm sm:p-10">
            <Icon :icon="feature.icon" class="h-8 w-8 fill-neutral-300" />
            <h3 class="mt-6 text-sm font-semibold text-white sm:text-lg">
              {{ feature.title }}
            </h3>
            <p class="mt-2 text-sm text-neutral-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
  <div class="mt-6 flex justify-center gap-3">
    <button
      v-for="(feature, i) in features"
      type="button"
      class="relative h-1 w-4 rounded"
      :class="[carouselRef?.activeSlide === i ? 'bg-neutral-300' : 'bg-neutral-500']"
      @click="carouselRef?.slideTo(i)"
      aria-label="Navigate to slide"
    />
  </div>
</template>
