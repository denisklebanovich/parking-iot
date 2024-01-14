<script setup lang="ts">
import { ref } from "vue";
import NWSingleToast from "@/components/core/toast/NWSingleToast.vue";

export type NWToastProps = {
  color: "primary" | "secondary" | "tertiary" | "primary-inverted" | "attention";
  duration?: number;
  text: string;
  key?: number;
};

const createToastFun = (toastProps: NWToastProps) => {
  toastProps.key = toastList.value.length;
  toastList.value.push(toastProps);
  const duration = toastProps.duration || 3;
  createToastTimeout(duration, toastProps.key);
};

const createToastTimeout = (duration: number, toastQueuePlace: number) => {
  toastTimeouts.value?.push(
    new Promise((resolve) => {
      setTimeout(resolve, duration * 1000);
    }).then(() => {
      const index = toastList.value.findIndex((toast) => toast.key == toastQueuePlace);
      toastList.value.splice(index, 1);
      toastTimeouts.value.splice(index, 1);
    })
  );
};

const createToast = ref<(toastProps: NWToastProps) => void>((toastProps: NWToastProps) =>
  createToastFun(toastProps)
);
const createAttentionToast = ref<(text: string) => void>((text: string) =>
  createToastFun({ color: "attention", text })
);
const createSuccessToast = ref<(text: string) => void>((text: string) =>
  createToastFun({ color: "primary", text })
);
const toastList = ref<NWToastProps[]>([]);
const toastTimeouts = ref<Promise<void>[]>([]);

defineExpose({ createToast, createAttentionToast, createSuccessToast });
</script>

<template>
  <li class="toastContainer">
    <ul v-for="toast in toastList" v-bind:key="toast.key">
      <NWSingleToast :color="toast.color" :queue-order-number="toast.key || 0">{{
        toast.text
      }}</NWSingleToast>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
@use "src/styles/styles.scss" as *;

.toastContainer {
  list-style: none;
  position: fixed;
  right: 0;
  top: 60px;
  margin: 0 $medium $medium 0;
  z-index: 1000;
  width: 290px;
}

ul {
  padding-inline-start: 0;
}
</style>
