<template>
  <main>
    <UserNavbar/>
    <div>
      <!-- Content -->
      <div class="container mt-5">
        <h2>Your current parking page</h2>
        <!-- Not parked section -->
        <div v-if="this.currentParking" class="card mt-4">
          <div class="card-body">
            <h4 class="card-title">Not Parked</h4>
            <p class="card-text">You are not currently parked.</p>
          </div>
        </div>
        <!-- Current Parking Section -->
        <div v-else class="card mt-4">
          <div class="card-body">
            <h4 class="card-title">Current Parking</h4>
            <p class="card-text">Parking Id: {{ this.currentParking.id }}</p>
            <p class="card-text">Parking Address: {{ this.currentParking.address }}</p>
            <p class="card-text">All Parking Spaces: {{ this.currentParking.capacity }}</p>
            <p class="card-text">Free Parking Spaces: {{ this.currentParking.freePlaces }}</p>
            <p class="card-text">Entry time: {{ this.currentParking.entryTimestamp }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserNavbar from '../components/UserNavbar.vue';
import apiService from '../services/ApiService';

export default {
  components: {
    UserNavbar,
  },
  data() {
    return {
      currentParking: {
        id: null,
        address: null,
        allParkingSpaces: null,
        freeParkingSpaces: null,
      }
    };
  },
  created() {
    this.getCurrentParkingDetails();
  },
  methods: {
    async getCurrentParkingDetails() {
      try {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        this.currentParking = await apiService.getParkingInfo(userId);
      } catch (error) {
        console.error('Failed to fetch parking details:', error);
      }
    },
  },
};
</script>

<style scoped>
</style>
  