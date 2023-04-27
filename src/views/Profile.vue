<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: url('https://www.totopetinsurance.com/sites/default/files/2020-06/your-pet-included.jpg');
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
                <img v-if="Identity == '老师'"
                  src="../assets/img/teacher.png"
                  alt="profile_image"
                  class="shadow-sm w-100 border-radius-lg"
                />
                <img v-else-if="Identity == '学生'"
                  src="../assets/img/student.png"
                  alt="profile_image"
                  class="shadow-sm w-100 border-radius-lg"
                />
                <img v-else
                  src="../assets/img/instructor.png"
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
// import { VueElement } from "vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile",
  components: {ArgonInput, ArgonButton},
  data() {
    return {
      showMenu: false,
      Name: sessionStorage.getItem("username"),
      Email: sessionStorage.getItem("Email"),
      Identity: sessionStorage.getItem("Identity"),
      Password: sessionStorage.getItem("password"),
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
          this.Email = sessionStorage.getItem("Email")
          console.log(this.Email)
          if( sessionStorage.getItem("Identity") == "admin"){
            this.Identity = "管理员";
          }else if(sessionStorage.getItem("Identity") == "student"){
            this.Identity = "学生";
          }else{
            console.log("yes");
            this.Identity = "老师";
          }
          
          this.Name = sessionStorage.getItem("username"),
          this.Password =sessionStorage.getItem("password"),
          this.getPlaceholder();
      },
      updateInformation(){
        if(this.newPassword == ""){
            this.newPassword = this.Password;
        }
        if(this.newName == ""){
          this.newName = this.Name;
        }
        this.$axios.put('/api/user', {
          userId: this.Email,
          password: this.newPassword,
          identity: sessionStorage.getItem("Identity"),
          username: this.newName,
      })
      .then((res) => {
          console.log(res);
          if(res.status == 200){
            alert("修改成功！");
            this.Name = this.newName;
            this.Password = this.newPassword;
            // VueElement.prototype.username = this.Name;
            sessionStorage.setItem("username", this.Name);
            // VueElement.prototype.password = this.Password;
            sessionStorage.setItem("password", this.Password);
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
    // this.getInformation();
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
    
  },
  beforeUnmount() {
    // this.getInformation();
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  }
};
</script>
