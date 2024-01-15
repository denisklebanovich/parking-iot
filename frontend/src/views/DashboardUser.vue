<!--parking system user dashboard page-->
<template>
  <!--user can see:
      - the history of him using the parking (time of entering the parking and time of leaving the parking)
      - the current status of the parking (how many places are available)
      - the current status of his parking (how long he has been using the parking and how much he has to pay)
    -->
  <div class="dashboard">
    <div class="greating">
      <h1>Hello, {{ userStore.user && userStore.user.name }}</h1>
    </div>
    <UserStatus class="current-user-status"></UserStatus>
    <ParkingStatus class="current-parking-status"></ParkingStatus>
    <UserHistory class="history"></UserHistory>
  </div>
</template>

<script setup lang="ts">
import UserHistory from '@/components/user/UserHistory.vue'
import UserStatus from '@/components/user/UserStatus.vue'
import ParkingStatus from '@/components/user/ParkingStatus.vue'

import { useUserStore } from '@/stores/UserStore'
import { onMounted} from "vue"

const userStore = useUserStore();

onMounted(async () => {
  await userStore.getUser();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.greating {
  margin: 20px;
}

.current-user-status {
  margin: 20px;
}

.current-parking-status {
  margin: 20px;
}

.history {
  margin: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {background-color: #f2f2f2;}

</style>