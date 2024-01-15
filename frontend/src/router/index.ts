import { createRouter, createWebHistory } from 'vue-router'
import SigninView from "@/views/SigninView.vue";
import DashboardUserVue from "@/views/DashboardUser.vue";
import DashboardAdminVue from "@/views/DashboardAdmin.vue";

export const ROUTES = {
  SIGNIN: "/signin",
  DASHBOARD_USER: "/user",
  DASHBOARD_ADMIN: "/admin"
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: ROUTES.SIGNIN,
    },
    {
      path: ROUTES.SIGNIN,
      name: ROUTES.SIGNIN,
      component: SigninView
    },
    {
      path: ROUTES.DASHBOARD_USER,
      name: ROUTES.DASHBOARD_USER,
      component: DashboardUserVue
    },
    {
      path: ROUTES.DASHBOARD_ADMIN,
      name: ROUTES.DASHBOARD_ADMIN,
      component: DashboardAdminVue
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("user")) {
      next(ROUTES.SIGNIN);
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
