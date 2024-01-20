import { defineStore } from 'pinia';
import ApiService from '../services/ApiService';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: undefined,
  }),
  getters: {
    userUser: state => state.user,
  },
  actions: {
    async signin(signInRequest){
        return ApiService.signin(signInRequest);
    },
    async signup(signUpRequest){
        return ApiService.signup(signUpRequest);
    },
    async setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.user = user;
    },
    async getUser() {
        if (!this.user) {
            const user = localStorage.getItem("user");
            if (user) {
              this.user = JSON.parse(user);
            }
          }
        return this.user;
    },
    clearUserData() {
      this.user = undefined;
    },
  },
});

// Export the store for use in the application
export default useUserStore;
