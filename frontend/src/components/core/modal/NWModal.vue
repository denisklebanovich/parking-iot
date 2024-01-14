<template>
  <div class="overlay" tabindex="0">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.modal {
  width: 750px;
  max-height: 75%;
  padding: 30px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
}
</style>