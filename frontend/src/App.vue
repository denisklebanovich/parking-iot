<script setup lang="ts">
import type { Ref } from "vue";
import { onMounted, provide, ref } from "vue";
import NWToast from "@/components/core/toast/NWToast.vue";
import { useUserStore } from "@/stores/UserStore";
import NWFullscreenSpinner from "@/components/core/spinner/NWFullscreenSpinner.vue";

const toastRef = ref();

provide<Ref<typeof NWToast>>("toastRef", toastRef);
const userStore = useUserStore();
onMounted(async () => {
  userStore.getUser();
});
</script>

<template>
  <RouterView />
  <NWToast ref="toastRef" />
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #333;
  overflow: auto;
}

a {
  color: #333;
  text-decoration: none;
}

#app {
  padding: 40px;
}
</style>
