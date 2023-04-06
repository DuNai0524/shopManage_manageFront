import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/basepages/Main.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "系统首页",
        },
        component: () => import("../views/dashboard/index.vue"),
      },
      {
        path: "/staff",
        name: "staff",
        meta: {
          title: "员工管理",
        },
        component: () => import("../views/staff/index.vue"),
      },
      {
        path: "/rule",
        name: "rule",
        meta: {
          title: "规则管理",
        },
        component: () => import("../views/rule/index.vue"),
      },
      {
        path: "/favorite",
        name: "favorite",
        meta: {
          title: "员工偏好管理",
        },
        component: () => import("../views/favorite/index.vue"),
      },
      {
        path: "/store",
        name: "store",
        meta: {
          title: "门店管理",
        },
        component: () => import("../views/store/index.vue"),
      },
      {
        path: "/forecast",
        name: "forecast",
        meta: {
          title: "预计流量管理",
        },
        component: () => import("../views/forecast/index.vue"),
      },
      {
        path: "/shift",
        name: "shift",
        meta: {
          title: "排班",
        },
        component: () => import("../views/shift/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
