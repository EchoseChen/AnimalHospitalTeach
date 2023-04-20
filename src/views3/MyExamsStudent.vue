<template>
    <div class="card m-3 p-3">
        <div class="row align-items-center pe-3">
            <div class="col-6 text-lg">
                <argon-badge class="me-3" size="md" color="info" variant="gradient">我的考试</argon-badge>
            </div>
        </div>
    </div>
    <div v-for="(exam, index) in exams" :key="index" class="d-flex flex-column">
        <div class="card mb-2 me-3 ms-3">
            <div class="row align-items-center p-2">
                <div class="col-1 text-center">
                    <img class="icon icon-md " src="https://img.icons8.com/ios/512/signing-a-document.png">
                </div>
                <div class="col ps-4">
                    <h6>{{ exam.name }}</h6>
                    <div class="col">
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.id }}</argon-badge>
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.ddl }} DDL</argon-badge>
                        <argon-badge v-if="exam.status == 'done'" color='success me-1' size="sm"
                            variant='gradient'>已完成</argon-badge>
                        <argon-badge v-if="exam.status == 'todo'" color='warning me-1' size="sm"
                            variant='gradient'>待审核</argon-badge>
                        <argon-badge v-if="exam.status == 'undo'" color='danger me-1' size="sm"
                            variant='gradient'>未完成</argon-badge>
                    </div>
                </div>
                <div class="col-7 text-end">
                    <argon-button class="me-4" @click="takeExam(index)" color='info' variant="gradient"
                        size="sm">参与考试</argon-button>
                    <argon-button class="me-4" @click="watchResult(index)" color='primary' variant="gradient"
                        size="sm">查看结果</argon-button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
// import Modal from "@/components/Modal.vue";

const API_URL = `/api/exam`

export default {
    data() {
        return {
            toDeleteIndex: -1,
            showModal: false,//模态框
            exam: {
                id: 'e1',
                name: '数学考试',
                status: 'undo',//undo未完成；todo待审核；done已完成
                ddl: '2023/04/19 23:00'
            },
            exams: [
            ],
            // forCheck: false,//选试卷用的
            showTest: true, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonButton,
        ArgonBadge,
        // ArgonAlert,
        // Modal
    },
    methods: {
        takeExam(index) {
            this.$router.push({ name: 'Take Exam', params: { id: this.exams[index].id } })
        },
        watchResult(index) {
            this.$router.push({ name: 'Watch Result Student', params: { id: this.exams[index].id } })
        },
        async getExams() {
            if (!this.showTest) {
                const url = `${API_URL}/`
                this.exams = await (await fetch(url)).json()
            }
            if (this.showTest) {
                this.exams = [
                    {
                        id: 'e1',
                        name: '数学考试',
                        status: 'undo',//undo未完成；todo待审核；done已完成
                        ddl: '2023/04/19 23:00'
                    },
                    {
                        id: 'e2',
                        name: '语文考试',
                        status: 'todo',//undo未完成；todo待审核；done已完成
                        ddl: '2023/04/29 23:00'
                    },
                    {
                        id: 'e3',
                        name: '英语考试',
                        status: 'done',//undo未完成；todo待审核；done已完成
                        ddl: '2023/05/19 23:00'
                    },
                ]
            }
        }
    },
    mounted() {
        this.getExams()
    }
}
</script>