<template>
    <button class=" btn btn-primary" @click="logout">Logout</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$store.commit('user/clearUserData');
        this.$router.push('/');
      },
    },
  };
  </script>
  