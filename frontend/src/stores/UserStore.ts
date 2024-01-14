import type { SignInRequest, SignUpRequest, User } from "@/model/User";
import { defineStore } from "pinia";
import { signin, signup } from "@/services/AuthService";
import router from "@/router";

export interface UserStoreState {
  user?: User;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserStoreState => ({
    user: undefined
  }),
  actions: {
    signin: async function(signinRequest: SignInRequest) {
      return await signin(signinRequest);
    },
    signup: async function(signupRequest: SignUpRequest) {
      await signup(signupRequest);
    },
    setUser: function(user: User) {
      localStorage.setItem("user", JSON.stringify(user));
      this.user = user;
    },
    getUser: function() {
      if (!this.user) {
        const user = localStorage.getItem("user");
        if (user) {
          this.user = JSON.parse(user);
        }
      }
      return this.user;
    }
  },
});