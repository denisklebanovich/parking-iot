<template>
    <main>
        <AdminNavbar />
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Add User</h2>
              <form @submit.prevent="register(userData)">
                <!--Rfid-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="rfid" class="form-label">Rfid number</label>
                      <input v-model="userData.rfid" id="rfid" type="text"  name="rfid" class="form-control" placeholder="Rfid number" required>
                    </div>
                </div>
                <!--Name-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input v-model="userData.name" id="name"  type="text" name="name" class="form-control" placeholder="Name" required>
                  </div>
                </div>
                <!--Surname-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="surname" class="form-label">Surname</label>
                      <input v-model="userData.surname" id="surname" type="surname"  name="surname" class="form-control" placeholder="Surname" required>
                    </div>
                  </div>
                <!--Username-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="username" class="form-label">Username</label>
                      <input v-model="userData.username" id="username" type="text"  name="username" class="form-control" placeholder="Username" required>
                    </div>
                  </div>
                <!--Password-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input v-model="userData.password" id="password" type="text"  name="password" class="form-control" placeholder="Password" required>
                    </div>
                  </div>
                <!--Licence plate-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="plate" class="form-label">License plate</label>
                      <input v-model="userData.plate" id="plate" type="text"  name="plate" class="form-control" placeholder="License plate" required>
                    </div>
                  </div>
               <!-- Submit -->
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>
              </form>
            </div>
          </div>
    </main>
</template>


<script>
import AdminNavbar from '../components/AdminNavbar.vue';
import apiService from '../services/ApiService';

export default {
  components: {
    AdminNavbar,
  },
  data() {
    return {
      userData: {
        rfid: '',
        name: '',
        surname: '',
        username: '',
        password: '',
        licensePlate: ''
      },
    };
  },
  methods: {
    async register(userData) {
      try {
        const response = await apiService.signup(userData);

        if (response) {
          this.$router.push('/admin/parking');
        } else {
          console.error('Failed to add user');
        }
      } catch (error) {
        console.error('Failed to add user:', error);
      }
    },
  },
};
</script>