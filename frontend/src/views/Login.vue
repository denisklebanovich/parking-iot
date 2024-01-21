<template>
    <div class="container mt-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-4">
          <h2 class="mb-4 text-center">Login</h2>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">Username:</label>
              <input type="username" class="form-control" v-model="username" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password:</label>
              <input type="password" class="form-control" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
</template>
  
  
  <script>
  import useUserStore from '../stores/UserStore';

  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },

    methods: {
      async login() {
        const userStore = useUserStore();
        
      try {
        const user = await userStore.signin( {username: this.username, password: this.password} );
        await userStore.setUser(user);
        this.$router.push(user.role === 'USER' ? '/user/parking' : '/admin/parking');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
  