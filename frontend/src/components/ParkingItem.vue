<template>
    <div class="card mb-3">
      <div class="card-header" id="parkName" @click="toggleDetails">
        <button class="btn">
          {{ getTitle() }}
          <i :class="['fas', showDetails ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
        </button>
      </div>
      <div v-if="showDetails">
        <div class="card-body">
            <div class="parking-details card border-info mb-3">
                <div class="card-header">Parking Details</div>
                <div class="card-body">
                    <p class="card-text">Parking Capacity: {{ parkingCapacity }}</p>
                    <p class="card-text">Free Parking Places: {{ parkingFreePlaces }}</p>
                </div>
            </div>
            
          <div class="currently-parked-users md-3">
            <p class="table-caption">Currently parked users:</p>
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Entry</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in parkedUsers" :key="user.name">
                  <td>{{ user.name }} {{ user.surname}}</td>
                  <td>{{ user.entryTimestamp }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      parkingIndex: String,
      parkingAddress: String,
      parkingCapacity: Number,
      parkingFreePlaces: Number,
      parkedUsers: Array,
    },
    data() {
      return {
        showDetails: false,
      };
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails;
      },
      getTitle() {
        return `Parking ${this.parkingIndex} - ${this.parkingAddress}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  
  #parkName {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-body {
    padding: 15px;
  }
  
  .table-caption {
  font-weight: bold;
  font-size: 16px; 
  color: black; 
}
  .badge {
    font-size: 14px;
  }
  
  .fa {
    margin-left: 5px;
  }
  
  </style>
  