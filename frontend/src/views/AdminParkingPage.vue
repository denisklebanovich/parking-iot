<template>
    <div>
      <AdminNavbar />
  
      <!-- Content -->
      <div class="container mt-5">
        <h2>Admin Parking Page</h2>
  
        <!-- Current Parking Status Section -->
        <div class="card mt-4">
          <div class="card-body">
            <h4 class="card-title">Current Parking Status</h4>
            <p class="card-text">Parking Number: {{ currentParkingNumber }}</p>
            <p class="card-text">Parking Address: {{ currentParkingAddress }}</p>
            <p class="card-text">All Parking Spaces: {{ allParkingSpaces }}</p>
            <p class="card-text">Empty Parking Spaces: {{ emptyParkingSpaces }}</p>
          </div>
        </div>
  
        <!-- Users Currently Parked Table Section -->
        <br>
        <h3>Currently parked Users</h3>
        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">RFID Card Number</th>
              <th scope="col">Date of Entry</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in usersCurrentlyParked">
              <td>{{ user.name }}</td>
              <td>{{ user.rfidCardNumber }}</td>
              <td>{{ user.dateOfEntry }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import AdminNavbar from '../components/AdminNavbar.vue';
  import apiService from '../services/apiService';
  
  export default {
    components: {
      AdminNavbar,
    },
    data() {
      return {
        currentParkingNumber: '',
        currentParkingAddress: '',
        allParkingSpaces: 0,
        emptyParkingSpaces: 0,
        usersCurrentlyParked: [
          { name: '', rfidCardNumber: '', dateOfEntry: ''},
        ],
      };
    },
    created() {
      this.getAdminParkingStatus();
      this.getCurrentlyParkedUsers();
    },
    methods: {
      async getAdminParkingStatus() {
        try {
          const token = localStorage.getItem('token');

          if (!token) {
            console.error('Unauthorized: Token not found');
            return;
          }

          const parkingDetails = await apiService.getCurrentParkingDetails(token);

          this.currentParkingNumber = parkingDetails.parkingNumber;
          this.currentParkingAddress = parkingDetails.parkingAddress;
          this.allParkingSpaces = parkingDetails.allSpaces;
          this.freeParkingSpaces = parkingDetails.freeSpaces;
        } catch (error) {
          console.error('Failed to fetch parking details:', error);
        }
      },

      async getCurrentlyParkedUsers() {
      try {
        const token = localStorage.getItem('token');
        this.usersCurrentlyParked = await apiService.getCurrentlyParkedUsers(token);
        } catch (error) {
          console.error('Failed to fetch currently parked users:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  