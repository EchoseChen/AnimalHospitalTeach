<template>
    <div class="card">
        <div class="card-img-fluid mh-100" >
            <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 text-center mh-100" >
                <img class="card-img-top" src="../../assets/img/qiantai.jpg" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h2 class="card-title">前台模式</h2>
                    <p>咨询导览、挂号收费</p>
                    <button @click="gotoqiantai" class="btn btn-success">前台工作</button>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 text-center h-100" >
            <img class="card-img-top" src="../../assets/img/yizhu.jpg" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h2 class="card-title">医助模式</h2>
                    <p>术前准备、注射工作</p>
                    <button @click="gotoyizhu" class="btn btn-success">医助工作</button>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 text-center mh-100" >
            <img class="card-img-top" src="../../assets/img/yishi.jpg" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h2 class="card-title">医师模式</h2>
                    <p>门诊坐诊、手术操刀</p>
                    <button @click="gotoyishi" class="btn btn-success">医师工作</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "cos-card",
    methods:{
        gotoqiantai(){
            this.$router.replace('/qiantai')
        },
        gotoyizhu(){
            this.$router.replace('/yizhu')
        },
        gotoyishi(){
            this.$router.replace('/yishi')
        }
    }
};
</script>
