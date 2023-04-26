<template>
    <div class="card m-3">
        <div class="row align-items-center pe-3 ps-3">
            <div class="col-6 text-lg">
                <argon-badge class="me-3" size="md" color="info" variant="gradient">我的考试</argon-badge>
            </div>
            <div class="col-6 p-3 text-end">
                <argon-button v-if="forCheck" @click="checkPaper" color="info" variant="gradient" size="sm"
                    class="me-4">确认</argon-button>
                <argon-button @click="newExam" color="primary" variant="gradient" size="sm" class="">新增</argon-button>
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
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.ddl.date }} {{exam.ddl.time}} DDL</argon-badge>
                        <argon-badge v-if="exam.status == 'done'" color='primary me-1' size="sm"
                            variant='gradient'>已结束</argon-badge>
                        <argon-badge v-if="exam.status == 'todo'" color='success me-1' size="sm"
                            variant='gradient'>正在进行</argon-badge>
                        <argon-badge v-if="exam.status == 'undo'" color='info me-1' size="sm"
                            variant='gradient'>尚未开始</argon-badge>
                    </div>
                </div>
                <div class="col-7 text-end">
                    <argon-button class="me-4" @click="myWatch(exam.id)" color='success' variant="gradient"
                        size="sm">查看</argon-button>
                    <argon-button class="me-4" @click="myEdit(exam.id)" color='warning' variant="gradient"
                        size="sm">修改</argon-button>
                    <argon-button class="me-4" @click="checkDelete(exam.id)" color='danger' variant="gradient"
                        size="sm">删除</argon-button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <Teleport to="body">
            <modal :show="showModal" @close="showModal = false">
                <template #header>
                    <div class="row">
                        <div class="col-6">
                            <h6>提示</h6>
                        </div>
                        <div class="col-6 text-center">
                            <argon-badge variant="gradient">考试ID: {{ this.toDeleteId }}</argon-badge>
                        </div>
                    </div>
                </template>
                <template #body>
                    <span class="font-weight-bold">你确定要删除吗</span>
                </template>
                <template #footer>
                    <div class="row">
                        <div class="col-6 text-center">
                            <argon-button @click="myDelete(this.toDeleteId)" color="danger" variant="gradient">确定</argon-button>
                        </div>
                        <div class="col-6 text-center">
                            <argon-button @click="cancelDelete()" color="info" variant="gradient">取消</argon-button>
                        </div>
                    </div>
                </template>
            </modal>
        </Teleport>
    </div>
</template>
    
<script>
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Modal from "@/components/Modal.vue";

const API_URL = `/api/exam`

export default {
    data() {
        return {
            toDeleteId: -1,
            showModal: false,//模态框
            exam: {
                id: 'e1',
                name: '数学考试',
                status: 'undo',//undo未完成；todo待审核；done已完成
                ddl: '2023/04/19 23:00'
            },
            exams: [
            ],
            showTest: false, //用来看Test结果的，正式发布的时候设置为false
            mock:false,//HTTP TEST
        }
    },
    components: {
        ArgonButton,
        ArgonBadge,
        Modal
    },
    methods: {
        async getExams() {
            if (!this.mock) {
                const url = `${API_URL}/`
                this.exams = await (await fetch(url)).json()
            }else{
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
        },
        newExam() {
            //to check
            this.$router.push('/new-exam')
        },
        myWatch(id) {
            //todo: 跳转到试卷详细信息页
            // this.$router.push({ name: 'Watch Exam', params: { id: id } })
            this.$router.push(`/watch-exam/${id}`)
        },
        async myDelete(id) {
            //todo:HTTP Delete Test
            this.showModal = false
            const url = `${API_URL}?examId=${id}`
            console.log(id)
            let result = await fetch(url, {
                method: 'delete',
            })
            console.log(result)
            // if (this.showTest || result.ok) { //showTest状态默认都是成功的 //THIS
            if(result.ok){//DELETE
                this.$toast.success(`${id}删除成功`, {
                    duration: 4000,
                    // position:"top",
                })
                this.$router.go(0)
                if(this.showTest){
                    this.exams = this.exams.filter((e)=>e.id!=id)
                }      
            } else {
                // this.showAlert = -1
                this.$toast.warning("删除失败，请重试", {
                    duration: 4000,
                    // position:"top",
                })
            }
        },
        myEdit(id) {
            //todo：跳转到试卷信息修改页
            this.$router.push({ name: 'Edit Exam', params: { id: id } })
            this.$router.push(`/edit-exam/${id}`)
        },
        checkDelete(id) {
            this.showModal = true
            this.toDeleteId = id
        },
        cancelDelete() {
            this.showModal = false
        },

    },
    mounted() {
        this.getExams()
    }
}
</script>