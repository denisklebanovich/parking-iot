<template>
  <NWButton
    class="button-with-spinner"
    :disabled="disabled || showSpinner"
    :type="type"
    :color="color"
  >
    <PulseLoader class="spinner" size="11px" :loading="showSpinner" color="#000000"></PulseLoader>
    <slot />
  </NWButton>
</template>

<script setup lang="ts">
import NWButton from "@/components/core/button/NWButton.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

type NWButtonSpinnerProps = {
  showSpinner?: boolean;
  type?: "flat" | "outlined";
  color?: "primary" | "tertiary" | "secondary";

  disabled?: boolean;
};

withDefaults(defineProps<NWButtonSpinnerProps>(), {
  showSpinner: false,
  type: "flat",
  color: "primary",
});
</script>

<style scoped lang="scss">
.button-with-spinner {
  justify-content: center;
}

.spinner {
  position: absolute;
  margin-left: 120px;
}
</style>
