import { createRouter, createWebHistory } from "vue-router";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import HospitalGuide from "../views/HospitalGuide.vue";
import PhotoSphere from "../views/PhotoSphere.vue";
import Cosplay from "../views/Cosplay.vue";
import qiantai from "../views/qiantai.vue";
import yizhu from "../views/yizhu.vue";
import yishi from "../views/yishi.vue";
import ZhinengStudy from "../views/ZhinengStudy.vue";
import BingliShow from "../views/BingliShow.vue";
import Admin from "../views/Admin.vue";
import CaseList from "../views/components/CaseList.vue";
import adminManagement from "../views/AdminManagement.vue";
const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/HospitalGuide",
    name: "医院导览",
    component: HospitalGuide,
  },
  {
    path: "/photoSphere",
    name: "PhotoSphere",
    component: PhotoSphere,
  },
  {
    path: "/cosplay",
    name: "角色扮演",
    component: Cosplay,
  },
  {
    path: "/qiantai",
    name: "前台模式",
    component: qiantai,
  },
  {
    path: "/yizhu",
    name: "医助模式",
    component: yizhu,
  },
  {
    path: "/yishi",
    name: "医师模式",
    component: yishi,
  },
  {
    path:"/ZhinengStudy",
    name: "职能学习",
    component: ZhinengStudy,
  },
  {
    path:"/case",
    name: "病例详情",
    component: BingliShow,
  },
  {
    path:"/admin",
    name: "管理员",
    component: Admin,
  },
  {
    path:"/caselist",
    name: "搜索结果",
    component: CaseList,
  },
  {
    path:"/main",
    name: "后台管理",
    component: adminManagement,
  }
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
