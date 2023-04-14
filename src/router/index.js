import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

import MyQuestions from "../views3/MyQuestions.vue";
import MyPapers from "../views3/MyPapers.vue";
import MyExams from "../views3/MyExams.vue";

import NewQuestion from "../views3/NewQuestion";
import Paper from "../views3/Paper";
import NewPaper from "../views3/NewPaper";

//for test
import PaperInfoCard from "../views3/component/PaperInfoCard"
import QuestionCard from "../views3/component/QuestionCard"
import QuestionInfoCard from "../views3/component/QuestionInfoCard"
import QuestionActCard from "../views3/component/QuestionActCard"
import QuestionInfoCardList from "../views3/component/QuestionInfoCardList"
import HttpTest from "../views2/component/HttpTest"
import ModalTest from "../views2/component/ModalTest"
import TestCard from "../views2/component/TestCard"
import Parent from "../views2/Parent"
import Child from "../views2/component/Child"
import ListChild from "../views2/ListChild"


const routes = [
  {
    path:"/paper-info-card",
    name:"Paper Info Card",
    component:PaperInfoCard,
    children:[
      {
        path: "my-exam",
        name: "My Exam",
        component:Tables
      }
    ]
  },
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
    name:" New Question",
    component:NewQuestion,
  },
  {
    path:"/paper",
    name:"Paper",
    component:Paper
  },
  {
    path:"/new-paper",
    name:" New Paper",
    component:NewPaper,
  },
  {
    path:"/test-card",
    name:"Test Card",
    component:TestCard,
  },
  {
    path:"/my-exams",
    name:"My Exams",
    component:MyExams,
  },
  {
    path:"/question-card",
    name:"Question Card",
    component:QuestionCard,
  },
  {
    path:"/parent",
    name:"Parent",
    component:Parent,
  },
  {
    path:"/list-child",
    name:"List Child",
    component:ListChild,
  },
  {
    path:"/child",
    name:"Child",
    component:Child,
  },
  {
    path:"/question-info-card",
    name:"Question Info Card",
    component:QuestionInfoCard,
  },
  {
    path:"/question-act-card",
    name:"Question Act Card",
    component:QuestionActCard,
  },
  {
    path:"/question-info-card-list",
    name:"Question Info Card List",
    component:QuestionInfoCardList,
  },
  {
    path:"/http-test",
    name:"Http Test",
    component:HttpTest,
  },
  {
    path:"/modal-test",
    name:"Modal Test",
    component:ModalTest,
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
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
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
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
