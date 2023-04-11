<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="card shadow-lg mt-n6 col-md-8">
        <div class="card-body p-3">
          <div class="row gx-4">
            <div class="col-auto">
              <div class="avatar avatar-xl position-relative">
                <img
                  src="../assets/img/team-1.jpg"
                  alt="profile_image"
                  class="shadow-sm w-100 border-radius-lg"
                />
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <h5 class="mb-1">{{ this.Email }}</h5>
                <p class="mb-0 font-weight-bold text-sm">{{ this.Name }}</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">管理个人信息</p>
                <argon-button color="success" size="sm" class="ms-auto" v-on:click=updateInformation
                  >确定修改信息</argon-button>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">用户信息</p>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >邮箱</label>
                  <p>{{ this.Email }}</p>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >身份</label>
                  <p>{{ this.Identity }}</p>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >姓名</label
                  >
                  <argon-input type="text" id = "name" placeholder="" v-model="newName"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >密码</label
                  >
                  <argon-input type="text" id = "password" placeholder="" v-model="newPassword" />
                </div>
            </div>
              
            </div>
          </div>
        </div>
       
      </div> 
  </main>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { VueElement } from "vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile",
  components: {ArgonInput, ArgonButton},
  data() {
    return {
      showMenu: false,
      Name:"",
      Email:"",
      Password:"",
      Identity:"",
      newPassword:"",
      newName:"",
    };
  },
  methods:{
      getPlaceholder(){
            var inputName = document.getElementById("name");
            var inputPassword = document.getElementById("password");
            inputName.placeholder = this.Name;
            inputPassword.placeholder = this.Password;
      },

      getInformation(){
          this.Email = VueElement.prototype.Email;
          if( VueElement.prototype.Identity == "admin"){
            this.Identity = "管理员";
          }else if(VueElement.prototype.Identity == "student"){
            this.Identity = "学生";
          }else if(VueElement.prototype.Identity == "student"){
            this.Identity = "老师";
          }
          
          this.Name = VueElement.prototype.username;
          this.Password = VueElement.prototype.password;
          this.getPlaceholder();
      },
      updateInformation(){
        this.$axios.put('api/user', {
          userId: this.Email,
          password: this.newPassword,
          identity:VueElement.prototype.Identity,
          username: this.newName,
      })
      .then((res) => {
          console.log(res);
          if(res.status == 200){
            alert("修改成功！");
            this.Name = this.newName;
            this.Password = this.newPassword;
            this.getPlaceholder();
            
          }
          
      }).catch(err =>{
          console.log(err);
      });
      }
  },

  mounted() {
    this.$store.state.isAbsolute = true;
    this.getInformation();
   

  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
    
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  }
};
</script>
