<template>
    <div class="py-4 container-fluid">
    <div class="row">
    <!-- {{this.$route}}拿到index.js路由对象 -->
    <div class="col-lg-12">
    <div class="card text-center">
        <h4>{{this.$route.query.diseaseName}}详情页面</h4>
    </div>
    </div>
    <div class="row">
    <div class="col-lg-3 mt-2">
        <div class="card text-center">
            <h5>caseId:{{ this.Bingli[0].caseId }}</h5>
            <h5>病种分类：{{ this.Bingli[0].categoryName }}</h5>
            <h5>{{ this.Bingli[0].medicineId }}</h5>
            
        </div>
    </div>
    <div class="col-lg-3 mt-2">
        <div class="card text-center">
            <h5>病情详述：<br>{{ this.Bingli[0].admissionDescription}}</h5>
        </div>
    </div>

    <div class="col-lg-3 mt-2">
        <div class="card">
            <h5>检查结果:<br>{{ this.Bingli[0].resultDescription}}</h5>
        </div>
    </div>
    <div class="col-lg-3 mt-2">
        <div class="card">
            <h5>治疗方法:<br>{{ this.Bingli[0].therapyDescription}}</h5>
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
        }
        },
        };
      },
      mounted(){
        this.$axios.get('case/disease', {
        params: {
          diseaseName: this.Case.diseaseName,
        }
      })
      .then((res) => {
            if(res.status == 200){
                console.log(res);
                this.Bingli = res.data;
                console.log(this.Bingli);
                console.log(this.Bingli[0]);
            }
          
      }).catch(err =>{
          console.log(err);
      });
      }
    }
    </script>
    
    <style>
    </style>
    
