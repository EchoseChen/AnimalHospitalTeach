<template>
<<<<<<< HEAD
  <div class="py-4 container-fluid">
  <div class="row">
  <!-- {{this.$route}}拿到index.js路由对象 -->
  
  <div class="card">
  <div class="card-header pb-0"> 
      <div class="row">
      <div class="col-md-6">
          <div class="btn-group ">
              <button class="btn btn-success" @click="gotoStudy()">
              返回职能学习页面
          </button>
          <button class="btn btn-success" @click="goOff()">
              返回搜索结果页面
          </button>
          </div>
      </div> 
      <div class="col-md-4"><h5>{{this.$route.query.diseaseName}}病例详情页面</h5></div>
  </div>
</div> 
  <div class="row">
  <div class="col-lg-4 col-md-4 col-sm-4  mh-100">
  
      <img class="card-img" v-bind:src= "Picture" alt="Card image" style="width:100%">
      <div class="card-tittle text-center">宠物病情图片</div>
      <video controls style="width:100%">
       <source src = "https://bj.bcebos.com/v1/file-bed/catvideo.mp4" type="video/mp4" >
    </video>
  </div>
=======
    <div class="py-4 container-fluid">
    <div class="row">
    <!-- {{this.$route}}拿到index.js路由对象 -->
    
    <div class="card">
    <div class="card-header pb-0"> 
        <div class="row">
        <div class="col-md-6">
            <div class="btn-group ">
                <button class="btn btn-success" @click="gotoStudy()">
                返回职能学习页面
            </button>
            <button class="btn btn-success" @click="goOff()">
                返回搜索结果页面
            </button>
            </div>
        </div> 
        <div class="col-md-4"><h5>{{this.Case.diseaseName}}病例详情页面</h5></div>
    </div>
</div> 
    <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-4  mh-100">
    
        <img class="card-img" v-bind:src= "Picture" alt="Card image" style="width:100%">
        <div class="card-tittle text-center">宠物病情图片</div>
        <video controls style="width:100%">
    <source src="../assets/catvideo.mp4" type="video/mp4" >
    
  </video>
    </div>
>>>>>>> master

  <div class="col-lg-8 col-md-4 col-sm-4  mh-100">
  <div class="row">
      <div class="col-md-12">
          <h5>病例ID:{{ this.Case.caseId }}</h5>
          <div class="line mt-1"></div>
          <h5>病种名：{{ this.Case.categoryName }}</h5>
          <div class="line mt-1"></div>
          <h5>病例名：{{ this.Case.caseName }}</h5>
          <div class="line mt-1"></div>
      </div>
      <div class="col-md-12 mt-2">
          <div class="card-tittle"><h4>宠物病情详述</h4></div>
          <div class="line mt-1"></div>
          <h6>{{ this.Case.therapyDescription.word}}</h6>
      <!-- <h5>{{ this.Case.medicineId }}</h5> -->  
  
      </div>
      <div class="col-md-12 mt-2">
          <div class="card-tittle"><h4>宠物检查结果</h4></div>
          <div class="line mt-1"></div>
           <h6>{{ this.Case.checkDescription.word}}</h6> 
      </div>
      <div class="col-md-12 mt-2">
          <div class="card-tittle"><h4>宠物诊断结果</h4></div>
          <div class="line mt-1"></div>
           <h6>{{ this.Case.resultDescription.word}}</h6> 
      </div>
      <div class="col-md-12 mt-2">
          <div class="card-tittle"><h4>治疗方法</h4></div>
          <div class="line mt-1"></div>
           <h6>{{ this.Case.admissionDescription.word}}</h6> 
      </div>
</div>
  </div>
  </div>
  </div>
</div>
<<<<<<< HEAD
 
  </div>
  </template>
  
  <script>
  export default {
    name: 'BingliShow',
    data(){
      return{
          Bingli:[],
          Case:{
              caseId:'',
              caseName:'',
              diseaseName:this.$route.query.diseaseName,
              categoryName:'',
              medicineId:'',
              admissionDescription: {
          word: '',
          picture: '',
          video: ''
       },
      checkDescription: {
          word: '',
          picture: '',
          video: ''
      },
      resultDescription: {
          word: '',
          picture: '',
          video: ''
      },
      therapyDescription: {
          word: '',
          picture: '',
          video: ''
=======
   
    </div>
    </template>
    
    <script>
    export default {
      name: 'BingliShow',
      data(){
        return{
            Bingli:[],
            Case:{
                caseId:'',
                caseName:this.$route.query.caseName,
                diseaseName:'',
                categoryName:'',
                medicineId:'',
                admissionDescription: {
            word: '',
            picture: '',
            video: ''
         },
        checkDescription: {
            word: '',
            picture: '',
            video: ''
        },
        resultDescription: {
            word: '',
            picture: '',
            video: ''
        },
        therapyDescription: {
            word: '',
            picture: '',
            video: ''
        }
        },
        Picture:'',
        Video:'',
        };
      },
      methods:{
        gotoStudy(){
            this.$router.replace('/ZhinengStudy')
        },
        goOff()
        {
            this.$router.back();
        },
        
        getPicture(){
            this.$axios.get('api/file/convertBaidu/'+this.Case.checkDescription.picture+'/')
      .then((res) => {
            if(res.status==200)
            {
                this.Picture =res.data;
                //this.Case.checkDescription.picture=this.Picture[0];
                console.log(res.data);
                console.log(this.Picture);
            }
      }).catch(err => {
        console.log(err);
      });
        },
        getVideo(){
            this.$axios.get('api/file/convertBaidu/'+this.Case.checkDescription.video+'/')
      .then((res) => {
            if(res.status==200)
            {
                this.Video =res.data;
                //this.Case.checkDescription.picture=this.Picture[0];
                console.log(res.data);
                console.log(this.Video);
            }
      }).catch(err => {
        console.log(err);
      });
      //this.$ref.videoPlay.src = this.Video;
      //document.querySelector('video').load();
        }
      },
      mounted(){
        this.$axios.get('api/case/casen', {
        params: {
          caseName: this.Case.caseName,
        }
      })
      .then((res) => {
            if(res.status == 200){
                console.log(res);
                this.Bingli = res.data;
                console.log(this.Bingli);
                this.Case.caseId = this.Bingli[0].caseId;
                this.Case.caseName = this.Bingli[0].caseName;
                this.Case.categoryName = this.Bingli[0].categoryName;
                this.Case.medicineId = this.Bingli[0].medicineId;
                this.Case.admissionDescription = this.Bingli[0].admissionDescription;
                this.Case.checkDescription = this.Bingli[0].checkDescription;
                this.Case.resultDescription = this.Bingli[0].resultDescription;
                this.Case.therapyDescription = this.Bingli[0].therapyDescription;
             console.log(this.Case.checkDescription.picture);
             this.getPicture();
             this.getVideo();
            }
          
      }).catch(err =>{
          console.log(err);
      });
      
>>>>>>> master
      }
      },
      Picture:'',
      Video:"http://bj.bcebos.com/v1/file-bed/catvideo.mp4?authorization=bce-auth-v1%2F67a3432ef0cf4df6ab78bf82ad3fde88%2F2023-04-21T02%3A06%3A34Z%2F-1%2F%2F28d89a0f5ff70889e75e590a3926d6b0ecdd5b47120791d6d0f92c3a3bb7f270",
      };
    },
    methods:{
      gotoStudy(){
          this.$router.replace('/ZhinengStudy')
      },
      goOff()
      {
          this.$router.back();
      },
      
      getPicture(){
          this.$axios.get('api/file/convertBaidu/'+this.Case.checkDescription.picture+'/')
    .then((res) => {
          if(res.status==200)
          {
              this.Picture =res.data;
              //this.Case.checkDescription.picture=this.Picture[0];
              // console.log(res.data);
              // console.log(this.Picture);
          }
    }).catch(err => {
      console.log(err);
    });
      },
      getVideo(){
          this.$axios.get('api/file/convertBaidu/'+this.Case.checkDescription.video+'/')
    .then((res) => {
          if(res.status==200)
          {
              this.Video =res.data;
              //this.Case.checkDescription.picture=this.Picture[0];
              console.log(res.data);
              console.log(this.Video);
          }
    }).catch(err => {
      console.log(err);
    });
    //this.$ref.videoPlay.src = this.Video;
    //document.querySelector('video').load();
      }
    },
    mounted(){
      this.$axios.get('api/case/disease', {
      params: {
        diseaseName: this.Case.diseaseName,
      }
    })
    .then((res) => {
          if(res.status == 200){
              console.log(res);
              this.Bingli = res.data;
              console.log(this.Bingli);
              this.Case.caseId = this.Bingli[0].caseId;
              this.Case.caseName = this.Bingli[0].caseName;
              this.Case.categoryName = this.Bingli[0].categoryName;
              this.Case.medicineId = this.Bingli[0].medicineId;
              this.Case.admissionDescription = this.Bingli[0].admissionDescription;
              this.Case.checkDescription = this.Bingli[0].checkDescription;
              this.Case.resultDescription = this.Bingli[0].resultDescription;
              this.Case.therapyDescription = this.Bingli[0].therapyDescription;
              console.log(this.Case.checkDescription.picture);
              console.log(this.Case.checkDescription.video);
              this.getPicture();
              // this.getVideo();
          }
        
    }).catch(err =>{
        console.log(err);
    });
    
    }
  }
  </script>
  
  <style>
  /* 横线 */
.line{
float:right;
width: 100%;
height: 1px;
margin-top: -0.5em;
background:#d4c4c4;
position: relative;
text-align: center;
}

  </style>
  
