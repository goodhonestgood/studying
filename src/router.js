import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/",
    name: "Test",
    component: () => import("./views/Test.vue"),
  },
  {
    path: "/sign-in",
    component: () => import("./views/SignIn.vue"),
  },
  {
      path: "/register",
      component: () => import("./views/Register.vue"),
  },
  {
    path: "/my-chat",
    component: () => import("./views/ChatList.vue"),
  },
  {
    path: "/my-chat/:id",
    name: "ChatRoom",
    component: () => import("./views/Chat.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;