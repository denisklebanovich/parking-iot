<template>
  <div class="component-spinner" v-if="show">
    <div ref="slotWrapper">
      <slot />
    </div>
    <div class="overlay" :style="overlayStyles">
      <img src="../../../assets/spinner.gif" alt="loading icon" />
    </div>
  </div>
  <slot v-else />
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

type ComponentSpinnerProps = {
  show: boolean;
};
defineProps<ComponentSpinnerProps>();

const slotWrapper = ref<HTMLDivElement | null>(null);

const overlayStyles = computed(() => {
  if (slotWrapper.value) {
    const slotElement = slotWrapper.value.children[0] as HTMLElement;
    const slotElementStyles = window.getComputedStyle(slotElement);
    return {
      "border-radius": slotElementStyles.borderRadius,
    };
  } else {
    return {};
  }
});
</script>
<style scoped lang="scss">
@use "@/styles/styles.scss" as *;
.component-spinner {
  position: relative;
  z-index: 3;
  border-radius: inherit;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: rgba(white, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: spinnerDelay 125ms ease-in forwards;

    img {
      width: 100px;
      height: 100px;
      animation: spin 1s linear infinite;
    }
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinnerDelay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
