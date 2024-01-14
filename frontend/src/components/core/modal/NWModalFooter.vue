<template>
  <div class="footer">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  gap: 20px;
  bottom: 0;
  margin-left: auto;
  margin-top: auto;
  justify-content: center;
  width: 100%;
}
</style>