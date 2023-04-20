
<template>
<p>My Exams</p>
<button @click="jumpExam"> 考试 </button>
<button @click="jumpResult"> 答卷 </button>
<button @click="jumpWatch"> 批改 </button>
</template>

<script>
export default{
    data(){
        return {

        }
    },
    methods:{
        jumpExam() {
            //todo：跳转到试卷信息修改页
            this.$router.push('/exam')
        },
        jumpResult() {
            //todo：跳转到试卷信息修改页
            this.$router.push('/result')
        },
        jumpWatch() {
            //todo：跳转到试卷信息修改页
            this.$router.push('/watch')
        },
    }
}
</script>