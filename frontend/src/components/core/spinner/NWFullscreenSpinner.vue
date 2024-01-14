<template>
  <teleport to="body">
    <div class="fullscreen-spinner">
      <div class="overlay">
        <img src="../../../assets/spinner.gif" alt="loading icon" />
        <div class="loading-text">Loading...</div>
      </div>
    </div>
  </teleport>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
@use "@/styles/styles.scss" as *;

.fullscreen-spinner {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  animation: spinnerDelay 125ms ease-in forwards;

  .overlay {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: rgba(white, 0.7);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    img {
      width: 150px;
      height: 150px;
    }

    .loading-text {
      color: primary();
      text-align: center;
    }
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
