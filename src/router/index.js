import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
// import Tables from "../views/Tables.vue";
// import Billing from "../views/Billing.vue";
// import VirtualReality from "../views/VirtualReality.vue";
// import RTL from "../views/Rtl.vue";
// import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

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
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   component: Tables,
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   component: Billing,
  // },
  // {
  //   path: "/virtual-reality",
  //   name: "Virtual Reality",
  //   component: VirtualReality,
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL",
  //   component: RTL,
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: Profile,
  // },
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
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
