<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
            <div class="card p-4">
                <input class="form-control" placeholder="试卷名称" v-model="exam.name">
                <div class="row mt-3">
                    <div class="col-6 align-items-center">
                        <argon-badge class="me-3" size="md" color="info" variant="gradient">开始时间</argon-badge>
                        <input type="date" v-model="exam.begin.date" class="me-2">
                        <input type="time" v-model="exam.begin.time">
                    </div>
                    <div class="col-6">
                        <argon-badge class="me-3" size="md" color="info" variant="gradient">结束时间</argon-badge>
                        <input type="date" v-model="exam.ddl.date" class="me-2">
                        <input type="time" v-model="exam.ddl.time">
                    </div>
                </div>
                <div v-if="showPaper" class="mt-3">
                    <argon-badge class="me-3 mb-3" size="md" color="info" variant="gradient">试卷</argon-badge>
                    <div class="card mb-2">
                        <div class="row align-items-center p-2">
                            <div class="col-1 text-center">
                                <img class="icon icon-md "
                                    src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/512/external-exam-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png">
                            </div>
                            <div class="col ps-4">
                                <h6>{{ exam.paper.name }}</h6>
                                <div class="col">
                                    <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.paper.id
                                    }}</argon-badge>
                                    <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.paper.num
                                    }}道题</argon-badge>
                                    <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.paper.time.hours
                                    }} 小时
                                        {{ exam.paper.time.mins }} 分钟</argon-badge>
                                    <argon-badge color='success me-1' size="sm" variant='gradient'>{{ exam.paper.permission
                                    }}</argon-badge>
                                </div>
                            </div>
                            <div class="col-7 text-end">
                                <!-- <argon-button class="me-4" @click="myWatch(exam.paper.id)" color='success'
                                    variant="gradient" size="sm">查看</argon-button> --> <!--可以有-->
                                <argon-button class="me-4" @click="checkDelete({ type: 'p',id:exam.paper.id })" color='danger'
                                    variant="gradient" size="sm">删除</argon-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="mt-3 mb-3">
                    <argon-badge class="me-3" size="md" color="info" variant="gradient">试卷</argon-badge>
                    <select v-model="tmpPaper">
                        <option v-for="(p, index) in papers" :key="index" :value="p">{{ p.id }} | {{ p.name }}</option>
                    </select>
                    <argon-button @click="addPaper" class="col-12 mt-3" color="info" variant="gradient">新增试卷</argon-button>
                </div>
                <div class="mt-3">
                    <argon-badge class="me-3" size="md" color="info" variant="gradient">考生</argon-badge>
                    <select v-model="tmpStudents" multiple>
                        <option v-for="(s, index) in students" :key="index" :value="s">{{ s.userId }} | {{ s.username }}
                        </option>
                    </select>
                    <argon-button @click="addStudent" class="col-12 mt-3" color="info"
                        variant="gradient">新增考生</argon-button>
                </div>
                <div class="mt-3">
                    <div v-for="(student, index) in exam.students" :key="index">
                        <div class="card mb-3">
                            <div class="row align-items-center p-2">
                                <div class="col-1 mt-1 ms-1">
                                    <argon-avatar
                                        img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F19%2F20210719150601_4401e.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684520357&t=e9ac7dd37b1764a81dd13553fa32dec2"
                                        alt="Avatar" size="md" circular />
                                </div>
                                <div class="col ps-4">
                                    <h6>{{ student.username }}</h6>
                                </div>
                                <div class="col-7 text-end">
                                    <!-- <argon-button class="me-4" @click="watchExam(student.userId)" color='info'
                                        variant="gradient" size="sm">批改</argon-button> --> <!--可以有-->
                                    <!-- <argon-button class="me-4" @click="watchResult(student.userId)" color='primary' variant="gradient"
                                        size="sm">查看</argon-button> -->
                                    <argon-button class="me-4" @click="checkDelete({ type: 's', id: student.userId })"
                                        color='danger' variant="gradient" size="sm">删除</argon-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <argon-button @click="postExam" class="col-12" color="success" variant="gradient">提交</argon-button>
                    <argon-button @click="goBack" class="col-12 mt-3" color="info" variant="gradient">返回</argon-button>
                </div>
            </div>
        </div>
        <div class="col-1"></div>

    </div>
    <div v-if="showTest">
        <pre>{{ exam }}</pre>
    </div>
    <div>
        <div>
            <Teleport to="body">
                <modal :show="showModal" @close="showModal = false">
                    <template #header>
                        <div class="row">
                            <div class="col-6">
                                <h6>提示</h6>
                                <!-- <div class="col">
                                    <argon-badge v-if="student.exam.status == 'done'" color='success me-1' size="sm" variant='gradient'>已完成</argon-badge>
                                    <argon-badge v-if="student.exam.status == 'todo'" color='warning me-1' size="sm" variant='gradient'>待审核</argon-badge>
                                    <argon-badge v-if="student.exam.status == 'undo'" color='danger me-1' size="sm" variant='gradient'>未完成</argon-badge>
                                    <argon-badge v-if="student.exam.score" color='success me-1' size="sm" variant='gradient'>{{ student.exam.score }}分</argon-badge>
                                    <argon-badge v-if="student.exam.finish" color='success me-1' size="sm"  variant='gradient'>{{ student.exam.finish.date }} {{ student.exam.finish.time }} FINISHED</argon-badge>
                                </div> -->
                            </div>
                            <div class="col-6 text-center">
                                <argon-badge v-if="toDelete.type=='p'" variant="gradient">试卷ID: {{toDelete.id }}</argon-badge>
                                <argon-badge v-if="toDelete.type=='s'" variant="gradient">学生ID: {{toDelete.id }}</argon-badge>
                            </div>
                        </div>
                    </template>
                    <template #body>
                        <span class="font-weight-bold">你确定要删除吗</span>
                    </template>
                    <template #footer>
                        <div class="row">
                            <div class="col-6 text-center">
                                <argon-button @click="myDelete(this.toDeleteId)" color="danger"
                                    variant="gradient">确定</argon-button>
                            </div>
                            <div class="col-6 text-center">
                                <argon-button @click="cancelDelete()" color="info" variant="gradient">取消</argon-button>
                            </div>
                        </div>
                    </template>
                </modal>
            </Teleport>
        </div>
    </div>
</template>

<script>

import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Modal from "@/components/Modal.vue";
import ArgonAvatar from "@/components/ArgonAvatar.vue";
import { VueElement } from "vue";

const API_URL = `/api/exam`

export default {
    data() {
        return {
            toDelete: {
                type: '',//s代表学生,p代表paper
                id: ''
            },
            tmpPaper: null,//预选试卷
            tmpStudents: [],//预选学生
            papers: [],//用来选试卷的
            students: [],//用来选考生的
            exam: {
                name: '第一次考试',
                begin: {},
                ddl: {},
                paper: {},
                students: [],
            },
            showModal: false,
            showPaper: false,

            userId:'',
            showTest: false,//打印测试信息
            mock:false,//HTTP TEST
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,
        Modal,
        ArgonAvatar,
    },
    methods: {
        async getExam() {
            const id = this.$route.params.id;
            console.log(this.$route.params);//打印结果为{user:'david'}
            const url = `${API_URL}?examId=${id}`

            if (!this.mock) {
                this.exam = await (await fetch(url)).json()
                console.log("exam", this.exam)
            }else{/* mock */
                this.exam = {
                    "name": "第一次考试",
                    "begin": {
                        "date": "2023-04-11",
                        "time": "10:09"
                    },
                    "ddl": {
                        "date": "2023-04-24",
                        "time": "07:07"
                    },
                    "paper": {
                        "id": "p2",
                        "name": "语文试卷",
                        "num": 5,
                        "permission": "public",
                        "time": {
                            "hours": 1,
                            "mins": 30
                        },
                        "checked": false
                    },
                    "students": [
                        {
                            "userId": "s02",
                            "username": "Max"
                        },
                        {
                            "userId": "s03",
                            "username": "Vivian"
                        },
                        {
                            "userId": "s04",
                            "username": "Black"
                        }
                    ]
                }
            }
            if(this.exam.paper){
                this.showPaper = true
            }
        },
        async getPapers() {
            const url = `/api/paper/`

            if (!this.mock) {
                this.papers = await (await fetch(url)).json()
                console.log("papers", this.papers)
            }else{ /* mock */
                this.papers = [{
                    id: 'p1',
                    name: '数学试卷',
                    num: 3,//可能要改
                    permission: 'public',
                    time: {
                        hours: 2,
                        mins: 30
                    },
                    checked: false,
                },
                {
                    id: 'p2',
                    name: '语文试卷',
                    num: 5,//可能要改
                    permission: 'public',
                    time: {
                        hours: 1,
                        mins: 30,
                    },
                    checked: false,
                },
                {
                    id: 'p3',
                    name: '英语试卷',
                    num: 7,//可能要改
                    permission: 'public',
                    time: {
                        hours: 3,
                        mins: 2,
                    },
                    checked: false,
                }
                ]
            }
            console.log(this.questions)
        },
        async getStudents() {
            const url = `/api/user/identity?identity=student`

            if (!this.mock) {
                this.students = await (await fetch(url)).json()
            } else {
                this.students = [
                    {
                        userId: 's01',
                        username: 'Lucy',
                        exam: {
                            status: 'done',
                            score: 98,
                            finish: {
                                date: "2023-03-01",
                                time: '20:22:20'
                            }

                        }
                    },
                    {
                        userId: 's02',
                        username: 'Max'
                    },
                    {
                        userId: 's03',
                        username: 'Vivian'
                    },
                    {
                        userId: 's04',
                        username: 'Black'
                    },
                    {
                        userId: 's05',
                        username: 'Smith'
                    },
                    {
                        userId: 's06',
                        username: 'Laura'
                    },
                ]
            }
            console.log("students", this.students)
        },
        getExamId(result) {
            //todo：需要修改
            if (!this.mock) {
                return result.id
            } else {
                return "Q01_test"
            }
        },
        async postExam() {
            /*todo:HTTP POST Test*/
            //是不是应该给我返回paperId
            const url = `${API_URL}?examId=${this.exam.id}`
            this.getExamInfo()
            let result = await fetch(url, {
                method: 'put',
                body: JSON.stringify(this.exam),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(this.exam)
            console.log(result)

            /* showTest=true，默认HTTP请求都成功了 */
            // if (this.showTest || result.ok) { //THIS
            if(result.ok){//DELETE
                this.$toast.success(`提交成功，试卷ID: ${this.getExamId(await result.json())}`, {
                    duration: 4000,
                    // position:"bottom"
                })
                this.$router.push('/my-exams-teacher')
            } else {
                this.$toast.error("提交失败", {
                    duration: 4000,
                    // position:"bottom"
                })
            }
        },
        getExamInfo(){
            this.exam.userId = this.userId
        },
        goBack(){
            this.$router.go(-1)
        },
        addPaper() {//新增试题
            // this.exam.paper = this.papers.filter((p) => p.id == this.pId)[0]
            if (this.tmpPaper) {
                this.exam.paper = this.tmpPaper
                this.showPaper = true
            }
        },
        addStudent() {//新增考生
            const res = new Map()
            this.exam.students = this.exam.students.concat(this.tmpStudents)
                .filter((s) => !res.has(s.userId) && res.set(s.userId, 1))//去重
        },
        myWatch(pid) {
            //todo: 跳转到试卷详细信息页
            this.$router.push({ name: 'Watch Paper', params: { id: pid } })
        },
        checkDelete(obj) {
            this.showModal = true
            this.toDelete = obj
        },
        cancelDelete() {
            this.showModal = false
        },
        myDelete() {
            //todo:HTTP Delete Test
            this.showModal = false
            if (this.toDelete.type == 'p') {
                this.exam.paper = {}
                this.showPaper = false
                this.$toast.success(`试卷删除成功`, {
                    duration: 4000,
                    // position:"top",
                })
            } else {
                this.exam.students = this.exam.students.filter((s) => s.userId != this.toDelete.id)
                this.$toast.success(`考生${this.toDelete.id}删除成功`, {
                    duration: 4000,
                    // position:"top",
                })
            }

        },
        watchExam(stuId) {//to change
            this.$router.push({ name: 'Watch Result Teacher', params: { eId: this.exam.id, sId: stuId } })
        },
        // watchResult(stuId) {// to change
        //     this.$router.push({ name: 'Watch Result Student', params: { eId: this.exam.id, sId: stuId} })
        // }
        getUserInfo(){
            if(this.showTest){
                this.userId = "testUser"
            }else{
                this.userId = VueElement.prototype.Email //TEST
            }
        },
    },
    mounted() {
        this.getExam()
        this.getPapers()
        this.getStudents()
    },
    created(){
        this.getUserInfo()
    }
}

</script>