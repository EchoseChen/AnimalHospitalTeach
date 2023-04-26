<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/HospitalGuide" :class="getRoute() === 'HospitalGuide' ? 'active' : ''" :navText="'医院导览'">
          <template v-slot:icon>
            <i class="ni ni-tag text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/Cosplay" :class="getRoute() === 'Cosplay' ? 'active' : ''" :navText="'角色扮演'">
          <template v-slot:icon>
            <i class="ni ni-badge text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/ZhinengStudy" :class="getRoute() === 'ZhinengStudy' ? 'active' : ''" :navText="'职能学习'">
          <template v-slot:icon>
            <i class="ni ni-book-bookmark text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/my-questions" :class="getRoute() === 'my-questions' ? 'active' : ''" :navText="'我的问题'">
          <template v-slot:icon>
            <i class="ni ni-tag text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/my-papers" :class="getRoute() === 'my-papers' ? 'active' : ''" :navText="'我的试卷'">
          <template v-slot:icon>
            <i class="ni ni-badge text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/my-exams-teacher" :class="getRoute() === 'my-exams-teacher' ? 'active' : ''"
          :navText="'老师|我的考试'">
          <template v-slot:icon>
            <i class="ni ni-send text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/my-exams-student" :class="getRoute() === 'my-exams-student' ? 'active' : ''"
          :navText="'学生|我的考试'">
          <template v-slot:icon>
            <i class="ni ni-send text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="mt-3 nav-item">
        <h6 v-if="this.$store.state.isRTL" class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'">
          صفحات المرافق
        </h6>
        <h6 v-else class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'">
          用户页面
        </h6>
      </li>
      <li class="nav-item" id = "selfcare">
        <sidenav-item
          url="/profile"
          :class="getRoute() === 'profile' ? 'active' : ''"
          :navText="'个人管理'"
        >
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/signin" :class="getRoute() === 'signin' ? 'active' : ''" :navText="'Sign In'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item" >
        <sidenav-item
          url="/signup"
          :class="getRoute() === 'signup' ? 'active' : ''"
          :navText="'Sign Up'"
        >
          <template v-slot:icon>
            <i class="ni ni-collection text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item" id = "admincare">
        <sidenav-item
          url="/admin"
          :class="getRoute() === 'admin' ? 'active' : ''"
          :navText="'用户管理'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item" id = "adminmanage">
        <sidenav-item
          url="/main.html"
          :navText="'后台管理'"
        >
          <template v-slot:icon>
            <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "虚拟宠物医院学习软件",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>
