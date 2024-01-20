<template>
    <button class=" btn btn-primary" @click="logout">Logout</button>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('user');
        this.$router.push('/');
      },
    },
  };
  </script>
  