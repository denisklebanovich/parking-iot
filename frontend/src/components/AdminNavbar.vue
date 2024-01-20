<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ms-4 me-4">
      <a class="navbar-brand" href="#">Your App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/admin/parking" class="nav-link">Current Parking</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/add" class="nav-link">Add new user</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/statistics" class="nav-link">Statistics</router-link>
          </li>
        </ul>
        <div class="navbar-nav ms-auto">
        <span class="navbar-brand">{{ userName }} {{ userSurname }}</span>

        <LogoutButton />
      </div>
      </div>
    </nav>
  </template>
  
<script>
import LogoutButton from './LogoutButton.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    LogoutButton,
  },
  computed: {
    ...mapGetters('user', ['userName', 'userSurname']),
  },
};
</script>