import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

export const ROUTES = {
  START: "/start",
  SIGNUP: "/signup",
  VERIFY: "/verify",
  SIGNIN: "/signin",
  DASHBOARD: "/",
  LOCATION: "/location/:id"
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("user")) {
      next(ROUTES.START);
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
