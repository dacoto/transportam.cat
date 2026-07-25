<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    user?: string;
    domain?: string;
    subject?: string;
  }>(),
  { user: "hello", domain: "transportam.cat" },
);

// Assembled only on the client so the plain address (and its "@") never appears
// in the prerendered HTML that scrapers read. Until then we render a
// human-readable, regex-unfriendly fallback.
const address = ref("");

const href = computed(() => {
  if (!address.value) return undefined;
  const query = props.subject ? `?subject=${encodeURIComponent(props.subject)}` : "";
  return `mailto:${address.value}${query}`;
});

const fallback = computed(() => `${props.user} [at] ${props.domain.replace(/\./g, " [dot] ")}`);

onMounted(() => {
  address.value = `${props.user}@${props.domain}`;
});
</script>

<template>
  <a v-if="href" :href="href" class="text-primary underline">{{ address }}</a>
  <span v-else class="text-primary underline">{{ fallback }}</span>
</template>
