<template>
  <NWFullscreenSpinner v-if="fullscreen && show" />
  <NWComponentSpinner v-else :show="show">
    <slot />
  </NWComponentSpinner>
</template>

<script setup lang="ts">
import NWFullscreenSpinner from "@/components/core/spinner/NWFullscreenSpinner.vue";
import NWComponentSpinner from "@/components/core/spinner/NWComponentSpinner.vue";

interface SpinnerProps {
  show: boolean;
  fullscreen?: boolean;
}
withDefaults(defineProps<SpinnerProps>(), { fullscreen: false });
</script>
