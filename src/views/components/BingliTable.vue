<template>
<div data-spy="scroll" data-target=".navbar"  style="position: relative;">
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
<!-- 内容 -->
<div id="section1" class="col-lg-3 bg-muted" style="padding-top:70px;width:100%;">
<div class="col-lg-12 col-md-4 card">
<div class="card-header top-0">
<h6>传染病</h6>
</div>

    <div v-for="item in disease1 " :key="item.diseaseName">
    <div class=" col-md-4 col-sm-4 text-center mh-100">
        <button class="btn btn-success block-center"><router-link :to="`/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
</button>
</div>
   
</div>
        
</div>
</div>
</div>



<div id="section2" class="col-lg-3 bg-muted" style="padding-top:25px;width:100%">
<div class="col-lg-3 col-md-4 card">
<div class="card-header top-0">
<h6>寄生虫病</h6>
</div>
<div class="col-lg-12">
<div class="row">
    <div v-for="item in disease2" :key="item.diseaseName">
    <div class="col-lg-12 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success block-center"><router-link :to="`/ZhinengStudy/case?diseaseName=${item.diseaseName}`">{{ item.diseaseName }}</router-link>
    </button>
</div>
        
</div>
</div>
</div>
</div>
</div>
<div id="section3" class="bg-muted" style="padding-top:25px;width:100%">
<div class="card">
<div class="card-header top-0">
<h6>内科</h6>
</div>
<div class="col-lg-12">
<div class="row">
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">口炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">肠炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">肠便秘</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">胰腺炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">肝炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">腹膜炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">肛门腺炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">感冒</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">鼻炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">气管支气管炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">肺炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">心力衰竭</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">尿道感染</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">尿结石</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">膀胱炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">肾炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">佝偻病</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">有机磷中毒</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">糖尿病</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">耳血肿</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">膀胱炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">中耳炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">眼睑内翻</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">结膜炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">角膜炎</button>
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
<div class="col-lg-12">
<div class="row">
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">外伤</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">外科感染</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">骨折</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">关节脱位</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">湿疹</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">皮炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">脓皮病</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">脱毛症</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">趾间囊肿</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">疝</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">阴道炎</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">阴道脱出</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">子宫蓄脓</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">难产</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">乳房炎</button>
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
<div class="col-lg-12">
<div class="row">
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">绝育</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">剖腹产</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">瞬膜腺增生物切除</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">眼球摘除</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">立耳术</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">断尾术</button>
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
<div class="col-lg-12">
<div class="row">
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">犬</button>
</div>
<div class="col-lg-3 col-md-4 col-sm-4 text-center mh-100">
<button class="btn btn-success">猫免疫程序</button>
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
                {diseaseName:"犬冠状病毒"},
                { diseaseName: "猫泛白细胞减少症" },
                { diseaseName: "猫病毒性病气管炎" },
                { diseaseName: "皮肤真菌感染" },
            ],
            disease2:[
                {diseaseName:"蛔虫病"},
                { diseaseName: "钩虫病" },
                {diseaseName:"绦虫病"},
                { diseaseName: "球虫病" },
                { diseaseName: "疥螨虫病" },
                { diseaseName: "蚤病" },
            ]
        };
    },

}

</script>
