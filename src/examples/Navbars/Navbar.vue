<template>
  <nav
    class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" textWhite="text-white" />
      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="'ms-md-auto'"
        >
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <!-- <router-link
              :to="{ name: 'Signin' }"
              class="px-0 nav-link font-weight-bold text-white"
              target="_blank"
            > -->
              <!-- <i class="fa fa-user" :class=" 'me-sm-2'"></i> -->
              <span class="d-sm-inline d-none font-weight-bold text-white">您好, {{ this.userId }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <!-- </router-link>  -->
          </li>
          <!-- <p class="px-0 nav-link font-weight-bold text-white nav-item d-flex align-items-center d-sm-inline d-none">您好, {{ this.userId }}</p> -->
          <li class="nav-item d-flex align-items-center">
            <router-link
              to="/signin"
              class="px-0 nav-link font-weight-bold text-white"
            >
              <i class="fa fa-user" :class=" 'me-sm-2'"></i>
              <span class="d-sm-inline d-none">退出</span>
            </router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
      userId: "",
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
    this.userId = localStorage.getItem("Email");
  },
  components: {
    Breadcrumbs
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
