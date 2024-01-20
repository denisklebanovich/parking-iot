<template>
    <main>
        <UserNavbar />

        <div>
        <!-- Content -->
        <div class="container mt-5">
            <h2>Your current parking page</h2>
    
            <!-- Current Parking Section -->
            <div class="card mt-4">
            <div class="card-body">
                <h4 class="card-title">Current Parking</h4>
                <p class="card-text">Parking Number: {{ currentParkingNumber }}</p>
                <p class="card-text">Parking Address: {{ currentParkingAddress }}</p>
                <p class="card-text">All Parking Spaces: {{ allParkingSpaces }}</p>
                <p class="card-text">Free Parking Spaces: {{ freePlaces }}</p>
            </div>
            </div>
            
        </div>
        </div>
    </main>
  </template>
  
  <script>
  import UserNavbar from '../components/UserNavbar.vue';
  import apiService from '../services/apiService';
    
  export default {
    components: {
      UserNavbar,
    },
    data() {
      return {
        currentParkingNumber: '',
        currentParkingAddress: '',
        allParkingSpaces: 0,
        freePlaces: 0,
      };
    },
    created() {
      this.getCurrentParkingDetails();
    },
    methods: {
      async getCurrentParkingDetails() {
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
    },
  };
  </script> 
  
  <style scoped>
  </style>
  