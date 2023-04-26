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

//deprecated
import MyExams from "../views2/MyExams.vue";
import Exam from "../views2/Exam";
import Result from "../views2/Result";
import Watch from "../views2/Watch";

//for test
import PaperInfoCard from "../views3/component/PaperInfoCard"
import StudentExamCard from "../views3/component/StudentExamCard"
import ExamInfoCard from "../views3/component/ExamInfoCard"
import QuestionCard from "../views3/component/QuestionCard"
import QuestionInfoCard from "../views3/component/QuestionInfoCard"
import QuestionActCard from "../views3/component/QuestionActCard"
import QuestionInfoCardList from "../views3/component/QuestionInfoCardList"
import QuestionActCardList from "../views3/component/QuestionActCardList"
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
    path:"/exam-info-card",
    name:"Exam Info Card",
    component:ExamInfoCard
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
    path:"/exam",
    name:"Exam",
    component:Exam,
  },
  {
    path:"/result",
    name:"Result",
    component:Result,
  },
  {
    path:"/watch",
    name:"Watch",
    component:Watch,
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
    path:"/question-card",
    name:"Question Card",
    component:QuestionCard,
  },
  {
    path:"/student-exam-card",
    name:"Student Exam Card",
    component:StudentExamCard
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
    path:"/question-act-card-list",
    name:"Question Act Card List",
    component:QuestionActCardList,
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
