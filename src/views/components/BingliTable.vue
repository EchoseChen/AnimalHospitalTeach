<template>
    <div class="row">
    <div class="col-lg-8" data-spy="scroll" data-target=".navbar"  style="position: relative;">
    <!-- 可滚动区域 -->
    <nav class="navbar navbar-expand-lg top-0 z-index-3 position-absolute bg-white">
    <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" href="#section1">传染病</a></li>
    <li class="nav-item"><a class="nav-link" href="#section2">寄生虫病</a></li>
    <li class="nav-item"><a class="nav-link" href="#section3">内科</a></li>
    <li class="nav-item"><a class="nav-link" href="#section4">外产科疾病</a></li>
    <li class="nav-item"><a class="nav-link" href="#section5">常用手术</a></li>
    <li class="nav-item"><a class="nav-link" href="#section6">免疫</a></li>
    <!-- 添加下拉菜单子内容 -->
    
    </ul>
    </nav>
    </div>
    <div class="col-lg-4">
        <input type="text" name="" id="" placeholder="搜索" v-model="diseaseName"/> 
  	<img src="../../assets/img/search.png" @click="caseSearch()" class=" btn bg-muted" style="height: 75%;width: 25%;">

</div>
    <!-- 内容 -->
    <div id="section1" class="row bg-muted" style="padding-top:70px;width:100%;">
    <div class="col-lg-12 col-md-4 card">
    <div class="card-header top-0">
    <h6>传染病</h6>
    </div>
    <div class="sc-list">
        <div v-for="item in disease1 " :key="item.diseaseName" class="sc-item">
        <div class=" col-md-12 col-sm-4 text-center mh-100">
            <button class="btn btn-success block-center"><router-link :to="`/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
    </button>
    </div>
    </div>
    </div>
    </div>
    <div id="section2" class="bg-muted" style="padding-top: 25px;width: 100%;">
        <div class="col-lg-12 col-md-4 card">
    <div class="col-lg-12 col-md-4 card">
    <div class="card-header top-0">
    <h6>寄生虫病</h6>
    </div>
    <div class="sc-list">
        <div v-for="item in disease2 " :key="item.diseaseName" class="sc-item">
        <div class=" col-md-12 col-sm-4 text-center mh-100">
            <button class="btn btn-success block-center"><router-link :to="`/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
    </button>
    </div>
    </div>
    </div>
    </div>
        </div>
    </div>   
    </div>
    </div>
    <div id="section3" class="bg-muted" style="padding-top: 25px;width: 100%;">
        <div class="col-lg-12 col-md-4 card">
    <div class="card-header top-0">
    <h6>内科</h6>
    </div>
    <div class="sc-list">
        <div v-for="item in disease3 " :key="item.diseaseName" class="sc-item">
        <div class=" col-md-12 col-sm-4 text-center mh-100 ">
            <button class="btn btn-success block-center"><router-link :to="`/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
    </button>
    </div>
    </div>
    </div>
            
    </div> 
    </div>
    <div id="section4" class="bg-muted"  style="padding-top:25px;width:100%">
    <div class="card">
    <div class="card-header top-0">
    <h6>外产科疾病</h6>
    </div>
    <div class="sc-list">
        <div v-for="item in disease4 " :key="item.diseaseName" class="sc-item">
        <div class=" col-md-12 col-sm-4 text-center mh-100 ">
            <button class="btn btn-success block-center"><router-link :to="`/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div id="section5" class="bg-muted"  style="padding-top:25px;width:100%">
    <div class="card">
    <div class="card-header top-0">
    <h6>常用手术</h6>
    </div>
    <div class="sc-list">
        <div v-for="item in disease5 " :key="item.diseaseName" class="sc-item">
        <div class=" col-md-12 col-sm-4 text-center mh-100 ">
            <button class="btn btn-success block-center"><router-link :to="`/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
    </button>
    </div>
    
    </div>
    </div>
    </div>
    </div>
    <div id="section6" class="bg-muted"  style="padding-top:25px;width:100%">
    <div class="card">
    <div class="card-header top-0">
    <h6>免疫</h6>
    </div>
    <div class="sc-list">
        <div v-for="item in disease6 " :key="item.diseaseName" class="sc-item">
        <div class=" col-md-12 col-sm-4 text-center mh-100 ">
            <button class="btn btn-success block-center"><router-link :to="`/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
    </button>
    </div>
    
    </div>
    </div>
    </div>
    </div>
    
    
    </template>
    <script>
    //import { Router } from 'express';
    
    
    export default{
        name: "BingliTable",
        data() {
            return {
                disease1: [
                    { diseaseName: "犬瘟热" },
                   
                    { diseaseName: "犬细小病毒" },
                    { diseaseName:"犬冠状病毒"},
                    { diseaseName: "皮肤真菌感染" },
                    { diseaseName: "猫泛白细胞减少症" },
                    { diseaseName: "猫病毒性病气管炎" },
                    
                ],
                disease2:[
                    { diseaseName: "蚤病" },
                    {diseaseName:"蛔虫病"},
                    { diseaseName: "钩虫病" },
                    {diseaseName:"绦虫病"},
                    { diseaseName: "球虫病" },
                    { diseaseName: "疥螨虫病" },
                    
                ],
                disease3:[
                    {diseaseName:"口炎"},
                    { diseaseName: "肠炎" },
                    {diseaseName:"感冒"},
                    { diseaseName: "鼻炎" },
                    { diseaseName: "肺炎" },
                    { diseaseName: "肝炎" },
                    { diseaseName: "肾炎" },
                    {diseaseName:"肠便秘"},
                    { diseaseName: "胰腺炎" },
                    { diseaseName: "腹膜炎" },
                    { diseaseName: "尿结石" },
                    { diseaseName: "膀胱炎" },
                    {diseaseName:"佝偻病"},
                    { diseaseName: "耳血肿" },
                    { diseaseName: "中耳炎" },
                    { diseaseName: "结膜炎" },
                    { diseaseName: "角膜炎" },
                    { diseaseName: "肛门腺炎" },
                    { diseaseName: "心力衰竭" },
                    {diseaseName:"尿道感染"},
                    { diseaseName: "眼睑内翻" },
                    { diseaseName: "有机磷中毒" },
                    { diseaseName: "气管支气管炎" },
                ],
                disease4:[
                    { diseaseName: "疝" },
                    {diseaseName:"外伤"},
                    { diseaseName: "湿疹" },
                    { diseaseName: "皮炎" },
                    {diseaseName:"难产"},
                    {diseaseName:"骨折"},
                    {diseaseName: "脓皮病" },
                    { diseaseName: "阴道炎" },
                    { diseaseName: "乳房炎" },
                    { diseaseName: "关节脱位" },
                    { diseaseName: "外科感染"},
                    {diseaseName:"趾间囊肿"},
                    { diseaseName: "阴道脱出" },
                    { diseaseName: "子宫蓄脓" },
                ],
                disease5:[
                    { diseaseName: "绝育" },
                    {diseaseName:"剖腹产"},
                    { diseaseName: "立耳术" },
                    {diseaseName:"断尾术"},
                    { diseaseName: "眼球摘除" },
                    { diseaseName: "瞬膜腺增生物切除" },
                    
                ],
                disease6:[
                { diseaseName: "犬免疫程序" },
                    {diseaseName:"猫免疫程序"},
                ],
                caseName:'',
                diseaseName:'',
                categoryName:'',
            };
        },
        methods:{
            caseSearch(){
                this.$router.replace('/caselist?diseaseName='+this.diseaseName);
            }
        }
    
    }
    
    </script>
    <style>
    .sc-item{
        text-align: center;
        float: left;
        width: 150px;
        margin-left: 10px;
        margin-right:10px;
      }
      .sc-list{
      
        justify-content: space-between;
        margin-left: 10px;
        margin-right:10px;
        display: block;
      }
    
    </style>
    