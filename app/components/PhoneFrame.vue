<template>
  <div class="relative aspect-366/729">
    <div class="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
    <div class="absolute left-[calc(16/366*100%)] top-[calc(13/729*100%)] grid h-[calc(705/729*100%)] w-[calc(336/366*100%)] transform grid-cols-1 overflow-hidden rounded-4xl">
      <slot />
    </div>
    <img src="/phone-frame.webp" alt="" class="pointer-events-none absolute inset-0 h-full w-full" />
  </div>
</template>
