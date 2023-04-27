<template>
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
      <div class="col-md-4"><h5>病例详情页面</h5></div>
  </div>
</div> 
  <div class="row">
  <div class="col-lg-4 col-md-4 col-sm-4  mh-100">
  
      <img class="card-img" v-bind:src= "Picture" alt="Card image" style="width:100%">
      <div class="card-tittle text-center">宠物病情图片</div>
      <!-- <video controls style="width:100%">
       <source :src= "Video" type="video/mp4" >
    </video> -->
    <!-- <div style="width:100%"> -->
    <video :src="Video" controls style="width:100%"></video>
  <!-- </div> -->
  </div>
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
 
  </div>
  </template>
      
    <script>
    export default {
      name: 'BingliShow',
      data(){
        return{
            Bingli:[],
            Case:{
                caseId:this.$route.query.caseId,
                caseName:'',
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
        Video:"",
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
      //       this.$axios.get('api/file/convertBaidu/'+this.Case.checkDescription.video+'/')
      // .then((res) => {
      //       if(res.status==200)
      //       {
      //           this.Video =res.data;
      //           //this.Case.checkDescription.picture=this.Picture[0];
      //           console.log(res.data);
      //           console.log(this.Video);
      //       }
      // }).catch(err => {
      //   console.log(err);
      // });
      //this.$ref.videoPlay.src = this.Video;
      //document.querySelector('video').load();
          this.Video = "https://bj.bcebos.com/v1/file-bed/" + this.Case.checkDescription.video;
          // this.Video =  "https://bj.bcebos.com/v1/file-bed/rabbit.mp4";
         
          console.log(this.Video);
        }
      },
      mounted(){
        this.$axios.get('api/case/id', {
        params: {
          caseId: this.Case.caseId,
        }
      })
      .then((res) => {
            if(res.status == 200){
                console.log(res);
                this.Bingli = res.data;
                console.log(this.Bingli);
                this.Case.caseId = this.Bingli.caseId;
                this.Case.caseName = this.Bingli.caseName;
                this.Case.categoryName = this.Bingli.categoryName;
                this.Case.medicineId = this.Bingli.medicineId;
                this.Case.admissionDescription = this.Bingli.admissionDescription;
                this.Case.checkDescription = this.Bingli.checkDescription;
                this.Case.resultDescription = this.Bingli.resultDescription;
                this.Case.therapyDescription = this.Bingli.therapyDescription;
             console.log(this.Case.checkDescription.picture);
             this.getPicture();
             this.getVideo();
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
  
