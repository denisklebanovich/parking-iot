<!--parking system user dashboard page-->
<template>
  <div class="greeting">
    <h1>Hello, {{ userStore.user?.username }}</h1>
  </div>
  <div class="dashboard-container">
    <!--user can see:
      - the history of him using the parking (time of entering the parking and time of leaving the parking)
      - the current status of the parking (how many places are available)
      - the current status of his parking (how long he has been using the parking and how much he has to pay)
    -->
    
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
import { onMounted } from "vue";
import NWSpinner from "@/components/core/spinner/NWSpinner.vue";

const userStore = useUserStore();

onMounted(async () => {
  await userStore.getUser()?.username;
});

</script>
<style scoped lang="scss">
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.dashboard-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.dashboard-content__item {
  margin: 0 1rem;
}
</style>
