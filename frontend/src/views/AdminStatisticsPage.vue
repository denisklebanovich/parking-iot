<template>
    <main>
      <AdminNavbar />
      <div class="my-5">
        <div class="mx-auto w-75" style="max-width:100%;">
          <h2 class="text-center mb-3">Statistics</h2>
  
          <!-- Placeholder statistics -->
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Total Users</h5>
                  <p class="card-text">{{ totalUsers }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Total Parking Spaces</h5>
                  <p class="card-text">{{ totalParkingSpaces }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Average Stay Time</h5>
                  <p class="card-text">{{ averageStayTime }} minutes</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Most Used Parking Place</h5>
                  <p class="card-text">{{ mostUsedParkingPlace }}</p>
                </div>
              </div>
            </div>
            <!-- Add more statistics cards as needed -->
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import AdminNavbar from '../components/AdminNavbar.vue';
  import apiService from '../services/apiService';

  export default {
    name: 'AdminStatistics',
    components: {
      AdminNavbar,
    },
    data() {
      return {
        totalUsers: 0,
        totalParkingSpaces: 0,
        averageStayTime: 0,
        mostUsedParkingPlace: '',
      };
    },
    created() {
      this.fetchStatistics();
    },
    methods: {
      async fetchStatistics() {
        try {
          const token = localStorage.getItem('token');
          const statistics = await apiService.getAdminStatistics(token);

          this.totalUsers = statistics.totalUsers;
          this.totalParkingSpaces = statistics.totalParkingSpaces;
          this.averageStayTime = statistics.averageStayTime;
          this.mostUsedParkingPlace = statistics.mostUsedParkingPlace;
        } catch (error) {
          console.error('Failed to fetch statistics:', error);
        }
      },
    },
  };
</script>
  