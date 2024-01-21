<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light ms-2 me-2">
    <a class="navbar-brand" href="#"><b>Smart Park</b></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/user/parking" class="nav-link">Current Parking</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user/history" class="nav-link">History</router-link>
        </li>
      </ul>
      <div class="navbar-nav ms-auto">
        <span class="navbar-brand">{{ userName }} {{ userSurname }}</span>
        <LogoutButton/>
      </div>
    </div>
  </nav>
</template>


<script>
import LogoutButton from './LogoutButton.vue';
import useUserStore from '../stores/UserStore';

export default {
  components: {
    LogoutButton,
  },
  computed: {
    userName() {
      const userStore = useUserStore();
      return userStore.user.name;
    },
    userSurname() {
      const userStore = useUserStore();
      return userStore.user.surname;
    },
  },
};
</script>
