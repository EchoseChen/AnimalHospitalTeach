<template>
  <!-- <div class="container top-0 position-sticky z-index-sticky"> -->
    <!-- <div class="row">
      <div class="col-12">
        <navbar isBtn="bg-gradient-light" />
      </div>
    </div> -->
  <!-- </div> -->
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://cdn.pixabay.com/photo/2017/08/29/01/22/dogs-2691871_1280.jpg'); background-position:80% 20%;"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">欢迎来到虚拟宠物医院!</h1>
            <!-- <p
              class="text-lead text-white"
            >Use these awesome forms to login or screate new account in your project for free.</p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center" style="margin-bottom: -7%;">
              <h4>注册</h4>
            </div>
            <!-- <div class="row px-xl-5 px-sm-4 px-3">
              
             
              <div class="mt-2 position-relative text-center">
                <p
                  class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3"
                >请输入信息</p>
              </div>
            </div> -->
            <div class="card-body"  >
              <form role="form">
                <argon-input type="email" placeholder="邮箱" aria-label="Email" v-model="signupRuleForm.userId"/>
                <argon-input type="text" placeholder="用户名" aria-label="Name" v-model="signupRuleForm.username"/>
                <argon-input type="password" placeholder="密码" aria-label="Password" v-model="signupRuleForm.password"/>
                <argon-input type="password" placeholder="再次输入密码" aria-label="AgainPassword" v-model="signupRuleForm.repassowrd"/>
                <argon-radio id = "stu" checked name = "identity" style="display: inline-block; margin-right: 17%;">学 生</argon-radio>
                <argon-radio id = "tea" name = "identity" style="display: inline-block; margin-right: 17%;">教 师</argon-radio>
                <argon-radio id = "admin" name = "identity" style="display: inline-block;">管 理 员</argon-radio>
                <!-- <argon-checkbox checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree the
                    <a
                      href="javascript:;"
                      class="text-dark font-weight-bolder"
                    >Terms and Conditions</a>
                  </label>
                </argon-checkbox> -->
              </form>
                <div class="text-center">
                  <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2" v-on:click="checkPasswordAndSignup()" >注册</argon-button>
                </div>
                <p class="text-center">
                  已经拥有账户?
                  <router-link to="/Signin">
                    <a class="text-dark font-weight-bolder">登录</a>
                  </router-link>
                </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- <app-footer /> -->
</template>

<script>
// import Navbar from "@/examples/PageLayout/Navbar.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
// import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonRadio from "@/components/ArgonRadio.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signup",
  
  components: {
    // Navbar,
    // AppFooter,
    ArgonInput,
    ArgonRadio,
    // ArgonCheckbox,
    ArgonButton,
  },
  data(){
    return{
      signupRuleForm: {
          userId: '',
          password: '',
          identity:'',
          repassowrd:'',
        },
      data: '',

    }
  },
  methods:{
    checkPasswordAndSignup(){
        if(this.signupRuleForm.password != this.signupRuleForm.repassowrd){
          alert("两次密码输入不一致，请重新输入");
        }else{
            if(document.getElementById("stu").checked){
              this.signupRuleForm.identity = "student";
            }else if(document.getElementById("tea").checked){
              this.signupRuleForm.identity = "teacher";
            }else{
              this.signupRuleForm.identity = "admin";
            }
            
            this.signup();
        }
    },
    signup(){
      this.$axios.post('user', {
          userId: this.signupRuleForm.userId,
          password: this.signupRuleForm.password,
          username: this.signupRuleForm.username,
          identity: this.signupRuleForm.identity,
      })
      .then((res) => {
          console.log(res);
          if(res.status == 200){
            this.$router.push("/signin");
          }
          

      }).catch(err =>{
          console.log(err);
          alert("用户邮箱已经存在，请换一个账号注册！")
      });

      
      // console.log(this.loginRuleForm.userId);
      // console.log(this.loginRuleForm.password);
      // alert(this.loginRuleForm.password+this.loginRuleForm.userId);s
      // API({
      //   URL:'/user/',
      //   method:'get'
      // }).then((res)=>{
      //           // alert('请求成功!');
      //           alert(res);
      //       });

      // this.$axios.
      //           get('http://1.116.1.85:8080/api/user', {
      //               params: {'userId': this.loginRuleForm.userId}
      //           }).then((res) => {
      //               console.log(res.data)
      //               if(res.data.passward == this.loginRuleForm.password){
      //                 this.$router.push("/dashboard-default")
      //               }
      //           }).catch(err => {
      //               console.log(err)
      //           })
    },
    login1(){
      console.log("你好");
      if(this.signupRuleForm.password == "123") {
        this.$router.push("/dashboard-default")
      } else {
        // alert(this.loginRuleForm.password)
        if(document.getElementById("stu").checked){
              this.signupRuleForm.identity = "student";
            }else if(document.getElementById("tea").checked){
              this.signupRuleForm.identity = "teacher";
            }else{
              this.signupRuleForm.identity = "admin";
            }
        alert(this.signupRuleForm.identity)
      }
      // this.$router.push("/dashboard-default")
      // console.log(this.loginRuleForm.userId);
      // console.log(this.loginRuleForm.password);
    }
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
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = false;
    body.classList.add("bg-gray-100");
  },
};
</script>


