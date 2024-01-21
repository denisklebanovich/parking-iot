<template>
    <div>
      <!-- Include the Navbar component -->
      <UserNavbar />
  
      <!-- Content -->
      <div class="container mt-5">
        <h2>Your History</h2>
  
        <!-- History Table Section -->
        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">Parking ID</th>
              <th scope="col">Parking Address</th>
              <th scope="col">Date of Entry</th>
              <th scope="col">Date of Leaving</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in parkingHistory">
              <th scope="row">{{ entry.parkingId }}</th>
              <td>{{ entry.parkingAddress }}</td>
              <td>{{ entry.entryTimestamp }}</td>
              <td>{{ entry.exitTimestamp }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import UserNavbar from '../components/UserNavbar.vue';
  import apiService from '../services/ApiService';
  import userStore from "@/stores/UserStore";
  
  export default {
    components: {
      UserNavbar,
    },
    data() {
      return {
        parkingHistory: [],
      };
    },
    created() {
      this.getParkingHistory();
    },
    methods: {
    async getParkingHistory() {
      try {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        const response = await apiService.getParkingHistory(userId);
        this.parkingHistory = response;
      } catch (error) {
        console.error('Failed to fetch parking history:', error);
      }
    },
  },
  };
  </script>
  
  <style scoped>
  </style>
  