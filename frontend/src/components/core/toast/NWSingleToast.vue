<script lang="ts" setup>
import { defineProps, withDefaults } from "vue";


type SingleToastProps = {
  color?: "primary" | "secondary" | "tertiary" | "attention";
};

withDefaults(defineProps<SingleToastProps>(), {
  color: "primary",
});
</script>

<template>
  <div
    class="toast"
    :class="{
      secondary: color === 'secondary',
      tertiary: color === 'tertiary',
      attention: color === 'attention',
    }"
  >
    <div class="text"><slot /></div>
  </div>
</template>

<style lang="scss" scoped>
@use "src/styles/styles.scss" as *;

.toast {
  display: flex;
  flex-direction: row;
  padding: 15px;
  margin-left: auto;
  gap: 10px;
  border-radius: 10px;
  max-height: 57pt;
  background-color: primary();
  color: primary($contrast);
}

.secondary {
  background-color: secondary();
}

.tertiary {
  background-color: tertiary();
}

.attention {
  color: primary();
  background-color: attention();
}

.text {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
