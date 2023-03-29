<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <!-- <div class="col-12">
        <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        /> -->
      <!-- </div> -->
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <!-- <h4 class="font-weight-bolder">Sign In</h4> -->
                  <h4 class="font-weight-bolder">登录</h4>
                  <!-- <p class="mb-0">Enter your email and password to sign in</p> -->
                  <p class="mb-0">请输入您的用户名和密码</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <!-- <argon-input type="email" placeholder="Email" name="email" size="lg" /> -->
                      <argon-input type="name" placeholder="用户名" name="name" size="lg" />
                    </div>
                    <div class="mb-3">
                      <argon-input type="password" placeholder="密码" name="password" size="lg" />
                    </div>
                    <argon-switch id="rememberMe">Remember me</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="secondary"
                        fullWidth
                        size="lg"
                      >登录</argon-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    还没有账号?
                    <router-link to="/Signup">
                    <a class="text-primary text-gradient font-weight-bold"> 注册</a>
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://cdn.pixabay.com/photo/2018/05/07/10/49/husky-3380550__480.jpg');
          background-size: cover; background-position: 80%;"
              >
                <span class="mask bg-gradient-secondary opacity-6"></span>
                <h2
                  class="mt-5 text-white font-weight-bolder position-relative"
                >虚拟宠物医院学习系统</h2>
                <h5
                  class="text-white position-relative"
                >开启您的虚拟宠物医院学习之旅</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    Navbar,
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
