<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
            <div class="card p-4">
                <h2 class="ms-3">{{ exam.name }}</h2>
                <div class="row mt-3 ms-2">
                    <div class="col-6 align-items-center">
                        <argon-badge class="me-3" size="md" color="info" variant="gradient">时长</argon-badge>
                        <argon-badge class="ms-1 me-3" size="md" color="success" variant="gradient">{{ exam.paper.time.hours
                        }}
                            小时
                            {{ exam.paper.time.mins }} 分钟</argon-badge>
                    </div>
                </div>
                <div class="mt-3">
                    <div v-for="(question, idx) in exam.paper.questions" :key="idx">
                        <div>
                            <div class="card mb-2 me-3 ms-3 pe-4 ps-4 pt-3 pb-3">
                                <div v-if="!isActive" class="row mb-3">
                                    <div v-if="isResult" class="col-2">
                                        <argon-badge v-if="waiting(idx)" class="col-12" color="warning"
                                            variant="gradient">待评审</argon-badge>
                                        <argon-badge v-if="correct(idx)" class="col-12" color="success"
                                            variant="gradient">正确</argon-badge>
                                        <argon-badge v-if="wrong(idx)" class="col-12" color="danger"
                                            variant="gradient">错误</argon-badge>
                                    </div>
                                    <div class="col"></div>
                                    <div v-if="editUScore" class="col-4 text-end">
                                        <div class="d-flex align-items-center">
                                            <div class="col"></div>
                                            <div class="col-4">
                                                <input @change="question.status = 'done'" v-model="question.uScore"
                                                    placeholder="得分" class="form-control text-end">
                                            </div>
                                            <span class="col-4 text-start ps-1">/{{ question.score }}分</span>
                                        </div>
                                    </div>
                                    <div v-else class="col-2">
                                        <div v-if="editScore">
                                            <input v-model="question.score" placeholder="分数" class="form-control text-end">
                                        </div>
                                        <div v-else>
                                            <argon-badge class="col-12" color="info" variant="gradient" size="lg">{{
                                                question.status == 'todo' || !question.uScore
                                                ?
                                                '' : question.uScore + ` / ` }} {{ question.score }}分</argon-badge>
                                        </div>
                                    </div>
                                </div>
                                <div @click="showHidden(idx)">
                                    <div>
                                        <h6>{{ idx + 1 }}. {{ question.stem }}</h6>
                                    </div>
                                    <div v-if="select(idx)">
                                        <div v-for="item of question.options" :key="item.id">
                                            <div>
                                                <input @change="getUScore(idx)" v-if="multiple(idx)" type="checkbox"
                                                    :id="item.id" :value="item.id" v-model="question.uAnswer"
                                                    :disabled="!isActive">
                                                <input @change="getUScore(idx)" v-else type="radio" :id="item.id"
                                                    :value="item.id" v-model="question.uAnswer" :disabled="!isActive">
                                                <label :for="item.id" class="ms-4 me-4">{{ item.content }}</label>
                                                <i v-if="!isActive && isRightAnswer(item.id, idx)"
                                                    class="ni ni-check-bold text-success opacity-10"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div>
                                            <div v-if="long(idx)">
                                                <textarea @change="getUScore(idx)" placeholder="请输入你的答案"
                                                    :disabled="!isActive" class="form-control"
                                                    v-model="question.uAnswer"></textarea>
                                            </div>
                                            <div v-else class="pt-2">
                                                <input @change="getUScore(idx)" class="form-control" placeholder="请输入你的答案"
                                                    :disabled="!isActive" v-model="question.uAnswer"><br>
                                                <div v-if="!isActive">
                                                    <h6 class="text-md">正确答案：</h6>
                                                    <argon-badge v-for="item of question.answer" :key="item.key"
                                                        class="me-2" size="md" color="success" variant="gradient">{{ item
                                                        }}</argon-badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="question.hidden">
                                        <hr class="mt-3">
                                        <h6 class="text-md">解析：</h6>
                                        <span>{{ question.analysis }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="me-3 ms-3">
                    <argon-button @click="postResult" color="success" variant="gradient" class="col-12">提交</argon-button>
                </div>
            </div>
        </div>
        <div class="col-1">
        </div>
    </div>
    <div>
        <pre v-if="showTest">{{ exam }}</pre>
    </div>
</template>

<script>

import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { VueElement } from "vue";

const API_URL = `/api/exam`

export default {
    data() {
        return {
            exam: {},
            examId: '',
            // paper: {
            //     id: '',
            //     name: '',
            //     time: {
            //         hours: null,
            //         mins: null,
            //     },
            //     permission: '',
            //     userId: '',
            //     questions: []
            // },
            //status: 'undo',//完成考试状态'undo','todo','done'
            isActive: false,//如果是交互的则为true，否则为false.[只有学生操作是true,老师编辑试卷、批改试卷，学生查看试卷都是false]
            isResult: false,//用来展示题目的正状态：正确、错误、待评审
            // forCheck: false,//是否支持选择；可能需要改checkbox绑定
            editScore: false,//用来修改分数(新建/修改试卷的时候为true；其他时候为false)
            editUScore: false,//用来修改学生分数（批改时为true；其他时候为false）

            userId:'',
            showTest: false,//打印测试信息
            mock:false,//HTTP Test
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,

    },
    methods: {
        async getExam() {
            this.examId = this.$route.params ? this.$route.params.id : "e01";//exam
            console.log("params: ", this.$route.params);//打印结果为{user:'david'}
            const url = `${API_URL}/paper?examId=${this.examId}`

            if (!this.mock) {
                this.exam = await (await fetch(url)).json()
                console.log("exam", this.exam)
            }else{
                this.exam = {
                    id: this.examId,
                    name: "第一次考试",
                    // status: "undo",
                    // ddl: "2023/05/01 23:59:00",
                    paper: {
                        "id": "p01",
                        "name": "数学考试1",
                        "time": {
                            "hours": "2",
                            "mins": "10"
                        },
                        "permission": "public",
                        "userId": "",
                        "questions": [
                            {
                                "id": "q01",
                                "stem": "1+1=",
                                "options": [
                                    {
                                        "id": 1,
                                        "content": "1"
                                    },
                                    {
                                        "id": 2,
                                        "content": "2"
                                    },
                                    {
                                        "id": 3,
                                        "content": "3"
                                    }
                                ],
                                "answer": 2,
                                "type": "single",
                                "category": "A",
                                "disease": "A1",
                                "analysis": "1+1=2",
                                "score": 5
                            },
                            {
                                "id": "q02",
                                "stem": "1+2=",
                                "options": [
                                    {
                                        "id": 1,
                                        "content": "1"
                                    },
                                    {
                                        "id": 2,
                                        "content": "three"
                                    },
                                    {
                                        "id": 3,
                                        "content": "3"
                                    },
                                    {
                                        "id": 4,
                                        "content": "4"
                                    }
                                ],
                                "answer": [
                                    2,
                                    3
                                ],
                                "type": "multiple",
                                "category": "B",
                                "disease": "B2",
                                "analysis": "1+2=3",
                                "score": 10
                            },
                            {
                                "id": "q05",
                                "stem": "1+4=",
                                "options": [],
                                "answer": [
                                    "5",
                                    "五"
                                ],
                                "type": "short",
                                "category": "C",
                                "disease": "C1",
                                "analysis": "1+4=5",
                                "score": 5
                            },
                            {
                                "id": "q04",
                                "stem": "1+23=",
                                "options": [],
                                "answer": "",
                                "type": "long",
                                "category": "D",
                                "disease": "D2",
                                "analysis": "1+23=24",
                                "score": 10
                            }
                        ]
                    },
                    student: ""//todo:userId
                }
                console.log(this.exam)
            }

            for(let i=0;i<this.exam.paper.questions.length;i++){
                if(this.exam.paper.questions[i].type=='multiple'){
                    this.exam.paper.questions[i].uAnswer = []
                }
            }
        },
        async postResult() {
            /*todo:HTTP POST Test*/
            //是不是应该给我返回resultId
            const url = `/api/result`
            this.getExamResult()
            let result = await fetch(url, {
                method: 'post',
                body: JSON.stringify(this.exam),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("POST, exam:", this.exam)
            console.log("POST result:", result)

            /* showTest=true，默认HTTP请求都成功了 */
            // if (this.showTest || result.ok) { //THIS
            if(result.ok){//DELETE
                this.$toast.success(`提交成功，答卷ID: ${this.getResultId(await result.json())}`, {
                    duration: 4000,
                    // position:"bottom"
                })
                this.$router.push(`/watch-result-student/${this.examId}`)
            } else {
                this.$toast.error("提交失败", {
                    duration: 4000,
                    // position:"bottom"
                })
            }
        },
        getExamStatus(){
            if(this.exam.paper.questions.filter((q)=> q.status=='done').length!=this.exam.paper.questions.length){
                return 'todo'
            }else{
                return 'done'
            }
        },
        getExamScore(){
            // let sum = 0
            // for(let i=0;i<this.exam.paper.questions.length;i++){
            //     if(this.exam.paper.questions[i].uScore){
            //         sum+=this.exam.paper.questions[i].uScore
            //     }
            // }
            // return sum

            return this.exam.paper.questions.reduce((total,q) => q.uScore ? total += q.uScore : total+=0, 0)
        },
        getExamResult(){
            for(let i=0;i<this.exam.paper.questions.length;i++){
                if(this.exam.paper.questions[i].status==null){
                    if(this.exam.paper.questions[i].type == 'long'){
                        this.exam.paper.questions[i].status = 'todo'
                    }else{
                        this.exam.paper.questions[i].status = 'done'
                    }
                    this.exam.paper.questions[i].uScore = 0
                }
            }
            this.exam.examId = this.examId
            this.exam.studentId = this.userId
            this.exam.status = this.getExamStatus()
            this.exam.score = this.getExamScore()
            let now = this.timeFormate(new Date()).split(" ")
            this.exam.submitTime = {
                date: now[0],
                time: now[1]
            }
            this.exam.current = this.timeFormate(new Date())
        },
        getResultId(result){//todo
            if(this.mock){
                return "e01"
            }else{
                return result.id
            }
        },
        init(mode) {
            switch (mode) {
                case 't'://test 测试
                    this.showTest = true
                    break;
                case 'p'://teacher paper 老师组卷
                    // this.question.uAnswer = []//used
                    this.editScore = false
                    break;
                case 'e'://student exam  学生考试
                    this.isActive = true
                    break;
                case 'r'://student result 学生答卷
                    this.isResult = true
                    break;
                case 'w'://teacher watch 审批
                    this.editUScore = true
                    this.isResult = true
                    break;
                default:
                    this.editUScore = false
                    this.editScore = false
                    this.isActive = false
                    this.isResult = false
                    break;
            }
        },
        showHidden(idx) {
            if (this.isActive) {
                this.exam.paper.questions[idx].hidden = false
            } else {
                this.exam.paper.questions[idx].hidden = !this.exam.paper.questions[idx].hidden
            }
        },
        isRightAnswer(id, idx) {
            if (this.exam.paper.questions[idx].type == 'single') {
                return id == this.exam.paper.questions[idx].answer
            } else if (this.exam.paper.questions[idx].type == 'multiple' || this.exam.paper.questions[idx].type == 'short') {
                return this.exam.paper.questions[idx].answer.indexOf(id) >= 0
            } else {
                return false
            }
        },
        isEqual(l1, l2) {
            if (l1.length != l2.length) {
                return false
            } else {
                return l1.sort().join() == l2.sort().join()
            }
        },
        getUScore(idx) {//提交试卷的时候调用//used
            //todo:还没调用
            this.exam.paper.questions[idx].status = 'done'
            if (this.exam.paper.questions[idx].type == 'single') {
                this.exam.paper.questions[idx].uScore = this.exam.paper.questions[idx].uAnswer == this.exam.paper.questions[idx].answer ? this.exam.paper.questions[idx].score : 0
            } else if (this.exam.paper.questions[idx].type == 'multiple') {
                this.exam.paper.questions[idx].uScore = this.isEqual(this.exam.paper.questions[idx].answer, this.exam.paper.questions[idx].uAnswer) ? this.exam.paper.questions[idx].score : 0
            } else if (this.exam.paper.questions[idx].type == 'short') {
                this.exam.paper.questions[idx].uScore = this.exam.paper.questions[idx].answer.indexOf(this.exam.paper.questions[idx].uAnswer) >= 0 ? this.exam.paper.questions[idx].score : 0
            } else {
                this.exam.paper.questions[idx].uScore = ''
                this.exam.paper.questions[idx].status = 'todo'
            }
        },
        correct(idx) {
            if (this.exam.paper.questions[idx].status == 'done') {
                return this.exam.paper.questions[idx].uScore == this.exam.paper.questions[idx].score
            }
            return false
        },
        wrong(idx) {
            if (this.exam.paper.questions[idx].status == 'done') {
                return this.exam.paper.questions[idx].uScore != this.exam.paper.questions[idx].score

            }
            return false
        },
        waiting(idx) {
            return this.exam.paper.questions[idx].status == 'todo'
        },
        select(idx) {
            return this.exam.paper.questions[idx].type == 'single' || this.exam.paper.questions[idx].type == 'multiple'
        },
        multiple(idx) {
            return this.exam.paper.questions[idx].type == 'multiple'
        },
        single(idx) {
            return this.exam.paper.questions[idx].type == 'single'
        },
        short(idx) {
            return this.exam.paper.questions[idx].type == 'short'
        },
        long(idx) {
            return this.exam.paper.questions[idx].type == 'long'
        },
        undo(idx) {
            return this.exam.paper.questions[idx].status == 'undo'
        },
        todo(idx) {
            return this.exam.paper.questions[idx].status == 'todo'
        },
        getUserInfo(){
            if(this.showTest){
                this.userId = "321@163.com"
            }else{
                this.userId = VueElement.prototype.Email //TEST
            }
        },
        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
            let day = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
            let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
            let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
            let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
            return year + "-" + month + "-" + day + " "+ hh + ":" + mm + ':' + ss;
        },
    },
    created() {
        this.getUserInfo()
        this.getExam()
        this.init('e')
    }
}

</script>