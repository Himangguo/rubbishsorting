import Vue from "vue";
import Router from "vue-router";
// 重写router中的replace方法
const routerReplace = Router.prototype.replace;
Router.prototype.replace = function(location) {
  return routerReplace.call(this, location).catch(error => error);
};
// 重写router中的push方法
const routerPush = Router.prototype.push;
Router.prototype.push = function(location) {
  return routerPush.call(this, location).catch(error => error);
};

// 懒加载组件
const Home = () => import("views/home/Home");
const Game1 = () => import("views/game1/Game1");
const User = () => import("views/user/User");
const Game2 = () => import("views/game2/Game2");

Vue.use(Router);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    meta: {
      title: "垃圾分类小游戏"
    },
    component: Home
  },
  {
    path: "/Game1",
    meta: {
      title: "垃圾分类-传送带"
    },
    component: Game1
  },
  {
    path: "/Game2",
    meta: {
      title: "test"
    },
    component: Game2
  },
  {
    path: "/user",
    meta: {
      title: "游戏设置"
    },
    component: User
  }
];

const router = new Router({
  routes,
  mode: "history"
});
// 设置浏览器标签title
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});
export default router;
