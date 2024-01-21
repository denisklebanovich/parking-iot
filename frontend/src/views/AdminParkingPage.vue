<template>
  <div>
    <AdminNavbar />
    <h2 class="mb-3 text-center">Parkings</h2>
    <ParkingItem
      v-for="parking in parkings"
      :key="parking.id"
      :parkingIndex="parking.id"
      :parkingAddress="parking.address"
      :parkingCapacity="parking.capacity"
      :parkingFreePlaces="parking.freePlaces"
      :parkedUsers="parking.users"
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
