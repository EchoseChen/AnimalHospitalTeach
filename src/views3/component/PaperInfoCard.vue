<template>
    <div class="card mb-1 me-3 ms-3">
        <div class="row align-items-center p-2">
            <div v-if="forCheck" class="col-1 text-center">
                <input type="checkbox" id="check" v-model="exam.checked">
                <label v-if="showTest" for="check">选择 {{ exam.checked }}</label>
            </div>
            <div class="col-1 text-center">
                <img class="icon icon-md " src="https://img.icons8.com/ios/512/signing-a-document.png">
            </div>
            <div class="col ps-4">
                <h6>{{ exam.name }}</h6>
                <div class="col">
                    <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.num }}道题</argon-badge>
                    <argon-badge color='success' size="sm" variant='gradient'>{{ exam.permission }}</argon-badge>
                </div>
            </div>
            <div class="col-7 text-end">
                <!-- <div class="row">
                    <div class="col">
                        <argon-button @click="myWatch" color='success'  size="sm">查看</argon-button>
                    </div>
                    <div class="col">
                        <argon-button @click="myEdit" color='warning'  size="sm">修改</argon-button>
                    </div>
                    <div class="col">
                        <argon-button @click="myDelete" color='danger'  size="sm">删除</argon-button>
                    </div>
                </div> -->
                <!-- <button @click="myEdit" class="btn me-4 bg-warning text-white">修改</button>
                <button @click="myDelete" class="btn bg-danger text-white">删除</button> -->
                <argon-button class="me-4" @click="myWatch" color='success' variant="gradient"  size="sm">查看</argon-button>
                <argon-button class="me-4" @click="myEdit" color='warning' variant="gradient" size="sm">修改</argon-button>
                <argon-button class="me-4" @click="myDelete" color='danger' variant="gradient" size="sm">删除</argon-button>
            </div>
        </div>
    </div>
</template>



<script>
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
    data() {
        return {
            exam: {
                id:'e1',
                name: '数学试卷',
                num: 4,
                permission: 'public',
                checked: false
            },
            forCheck:true,//选试卷用的
            showTest: false, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,
    },
    methods:{
        myWatch(){
            //todo: 跳转到试卷详细信息页
        },
        myDelete(){
            //弹确定窗口，发起http请求
        },
        myEdit(){
            //todo：跳转到试卷信息修改页
        }
    }
};

</script>