<template>
  <div>
    <AdminNavbar />
    <h2 class="mb-3 text-center">Parkings</h2>
    <ParkingItem
      v-for="parking in parkings"
      :key="parking.parkingIndex"
      :parkingIndex="parking.parkingIndex"
      :parkingAddress="parking.parkingAddress"
      :parkingCapacity="parking.parkingCapacity"
      :parkingFreePlaces="parking.parkingFreePlaces"
      :parkedUsers="parking.parkedUsers"
    />
  </div>
</template>

<script>
import ParkingItem from '../components/ParkingItem.vue';
import AdminNavbar from '../components/AdminNavbar.vue';
import apiService from '../services/ApiService';

export default {
  components: {
    ParkingItem,
    AdminNavbar,
  },
  data() {
    return {
      parkings: [],
    };
  },
  created() {
    this.getParkings();
  },
  methods: {
    async getParkings() {
      try {
        this.parkings = await apiService.getParkings();
      } catch (error) {
        console.error('Failed to fetch parkings:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
