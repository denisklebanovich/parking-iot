<!--parking system user dashboard page-->
<template>
  <!--user can see:
      - the history of him using the parking (time of entering the parking and time of leaving the parking)
      - the current status of the parking (how many places are available)
      - the current status of his parking (how long he has been using the parking and how much he has to pay)
    -->
  <div class="dashboard">
    <div class="greating">
      <h1>Hello, {{ userStore.user.name }}</h1>
    </div>

    <div class="current-user-status">
      <h3>Current status of parking usage</h3>
      <p>Time of entering: {{ userStore.user.timeOfEntering }}</p>
      <p>Time of leaving: {{ userStore.user.timeOfLeaving }}</p>
      <p>Time of using: {{ userStore.user.timeOfUsing }}</p>
      <p>Price: {{ userStore.user.price }}</p>
    </div>

    <div class="current-parking-status">
      <h3>Current status of parking</h3>
      <p>Available places: {{ userStore.user.availablePlaces }}</p>
    </div>

    <div class="history">
      <h3>History</h3>
      <!--table of all usages from the last one to the first-->
      <table>
        <tr>
          <th>Time of entering</th>
          <th>Time of leaving</th>
        </tr>
        <tr>
          <td>12:00</td>
          <td>13:00</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>13:00</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>13:00</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted} from "vue";
import {useUserStore} from "@/stores/UserStore";

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