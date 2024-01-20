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
              <th scope="col">Date of Entry</th>
              <th scope="col">Date of Leaving</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in parkingHistory">
              <td>{{ entry.parkingAddress }}</td>
              <td>{{ entry.dateOfEntry }}</td>
              <td>{{ entry.dateOfLeaving }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
        parkingHistory: [],
      };
    },
    created() {
      this.getParkingHistory();
    },
    methods: {
    async getParkingHistory() {
      try {
        const response = await apiService.getParkingHistory();
        this.parkingHistory = response;
        console.log(response);
      } catch (error) {
        console.error('Failed to fetch parking history:', error);
      }
    },
  },
  };
  </script>
  
  <style scoped>
  </style>
  