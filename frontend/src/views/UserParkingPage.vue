<template>
    <main>
        <UserNavbar />
        <div>
          <!-- Content -->
          <div class="container mt-5">
            <h2>Your current parking page</h2>
            <!-- Not parked section -->
              <div v-if="!isUserParked" class="card mt-4">
                <div class="card-body">
                  <h4 class="card-title">Not Parked</h4>
                  <p class="card-text">You are not currently parked.</p>
                </div>
              </div>
            <!-- Current Parking Section -->
            <div v-else class="card mt-4">
              <div class="card-body">
                  <h4 class="card-title">Current Parking</h4>
                  <p class="card-text">Parking Id: {{ currentParkingNumber }}</p>
                  <p class="card-text">Parking Address: {{ currentParkingAddress }}</p>
                  <p class="card-text">All Parking Spaces: {{ allParkingSpaces }}</p>
                  <p class="card-text">Free Parking Spaces: {{ freeParkingSpaces }}</p>
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
        currentParkingNumber: '',
        currentParkingAddress: '',
        allParkingSpaces: 0,
        freeParkingSpaces: 0,
      };
    },
    computed: {
    isUserParked() {
      // Check if parking information is not null or empty
      return (
        this.currentParkingNumber !== null &&
        this.currentParkingNumber !== '' &&
        this.currentParkingAddress !== null &&
        this.currentParkingAddress !== ''
      );
    },
  },
    created() {
      this.getCurrentParkingDetails();
    },
    methods: {
      async getCurrentParkingDetails() {
        try {
          const parkingDetails = await apiService.getParkingInfo();
          console.log(parkingDetails);

          this.currentParkingNumber = parkingDetails.parkingIndex;
          this.currentParkingAddress = parkingDetails.parkingAddress;
          this.allParkingSpaces = parkingDetails.parkingCapacity;
          this.freeParkingSpaces = parkingDetails.parkingFreePlaces;
        } catch (error) {
          console.error('Failed to fetch parking details:', error);
        }
      },
    },
  };
  </script> 
  
  <style scoped>
  </style>
  