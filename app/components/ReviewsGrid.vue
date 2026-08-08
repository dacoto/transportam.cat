<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
import ReviewCard from "./ReviewCard.vue";
import reviews from "../data/reviews.json";
import { computed } from "vue";
import { useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints({
  lg: 1024,
});

const isMobile = breakpoints.smaller("lg");

const activeGroups = computed(() => {
  return isMobile.value
    ? [{ reviews: reviews.flatMap(group => group.reviews), duration: 150 }]
    : reviews;
});
</script>

<template>
  <ClientOnly>
    <div class="relative -mx-4 mt-16 grid grid-cols-3 items-start gap-8 overflow-hidden px-4 sm:mt-20">
      <div
        v-for="(group, groupIndex) in activeGroups"
        :key="groupIndex"
        class="col-span-3 flex h-[49rem] max-h-[150vh] flex-col lg:col-span-1"
      >
        <Vue3Marquee class="w-auto!" vertical :duration="group.duration">
          <ReviewCard
            v-for="review in group.reviews"
            :key="`${review.author}-${review.title}`"
            :review="review"
          />
        </Vue3Marquee>
      </div>
      <div class="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-neutral-50" />
      <div class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-neutral-50" />
    </div>

    <template #fallback>
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:mt-20">
        <ReviewCard
          v-for="review in reviews.flatMap(group => group.reviews)"
          :key="`${review.author}-${review.title}`"
          :review="review"
        />
      </div>
    </template>
  </ClientOnly>
</template>
