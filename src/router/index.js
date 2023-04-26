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

import MyQuestions from "../views3/MyQuestions.vue";
import MyPapers from "../views3/MyPapers.vue";
import MyExamsTeacher from "../views3/MyExamsTeacher.vue";
import MyExamsStudent from "../views3/MyExamsStudent.vue";
import NewQuestion from "../views3/NewQuestion";
import NewPaper from "../views3/NewPaper";
import EditPaper from "../views3/EditPaper";
import WatchPaper from "../views3/WatchPaper";
import TakeExam from "../views3/TakeExam";
import WatchResultStudent from "../views3/WatchResultStudent";
import WatchResultTeacher from "../views3/WatchResultTeacher";
import NewExam from "../views3/NewExam";
import WatchExam from "../views3/WatchExam";
import EditExam from "../views3/EditExam";

const routes = [
  {
    path:"/my-questions",
    name:"My Questions",
    component:MyQuestions,
  },
  {
    path:"/my-papers",
    name:"My Papers",
    component:MyPapers,
  },
  {
    path:"/new-question",
    name:"New Question",
    component:NewQuestion,
  },
  {
    path:"/new-exam",
    name:"New Exam",
    component:NewExam,
  },
  {
    path:"/watch-exam/:id",
    name:"Watch Exam",
    component:WatchExam,
  },
  {
    path:"/edit-exam/:id",
    name:"Edit Exam",
    component:EditExam,
  },
  {
    path:"/watch-result-student/:id",
    name:"Watch Result Student",
    component:WatchResultStudent,
  },
  {
    path:"/watch-result-teacher/:eId/:sId",
    name:"Watch Result Teacher",
    component:WatchResultTeacher,
  },
  {
    path:"/new-paper",
    name:"New Paper",
    component:NewPaper,
  },
  {
    path:"/edit-paper/:id",
    name:"Edit Paper",
    component:EditPaper,
  },
  {
    path:"/watch-paper/:id",
    name:"Watch Paper",
    component:WatchPaper,
  },
  {
    path:"/take-exam/:id",
    name:"Take Exam",
    component:TakeExam,
  },

  {
    path:"/my-exams-student",
    name:"My Exams Student",
    component:MyExamsStudent,
  },
  {
    path:"/my-exams-teacher",
    name:"My Exams Teacher",
    component:MyExamsTeacher,
  },
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

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
