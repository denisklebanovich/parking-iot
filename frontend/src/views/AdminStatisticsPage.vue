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
                  <p class="card-text">{{ this.statistics.totalUsers }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Total Parking Spaces</h5>
                  <pt class="card-text">{{ this.statistics.totalParkingPlaces  }}</pt>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Average Stay Time</h5>
                  <p class="card-text">{{ this.formattedAverageStayTime}}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Most Used Parking</h5>
                  <p class="card-text">{{ this.statistics.mostPopularParkingId }} - {{this.statistics.mostPopularParkingAddress}}</p>
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
  import apiService from '../services/ApiService';

  export default {
    name: 'AdminStatistics',
    components: {
      AdminNavbar,
    },
    data() {
      return {
        statistics: {
          totalUsers: 0,
          totalParkingPlaces: 0,
          averageStayTime: 0,
          mostPopularParkingId: 0,
          mostPopularParkingAddress: '',
        }
      };
    },
    computed: {
      // Add formatted average stay time with hours and minutes
      formattedAverageStayTime() {
        const hours = Math.floor(this.statistics.averageStayTime / 60);
        const minutes = this.statistics.averageStayTime % 60;
        return `${hours}h ${minutes}m`;
      },
    },
    created() {
      this.fetchStatistics();
    },
    methods: {
      async fetchStatistics() {
        try {
           this.statistics = await apiService.getAdminStatistics();
        } catch (error) {
          console.error('Failed to fetch statistics:', error);
        }
      },
    },
  };
</script>
  