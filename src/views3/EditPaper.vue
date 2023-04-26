<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
            <div class="card p-4">
                <input class="form-control" placeholder="试卷名称" v-model="paper.name">
                <div class="row mt-3">
                    <div class="col-6 align-items-center">
                        <argon-badge class="me-3" size="md" color="info" variant="gradient">时长</argon-badge>
                        <select v-model="paper.time.hours">
                            <option disabled value="">小时</option>
                            <option v-for="(h, index) in hours" :key="hours[index]">{{ h }}</option>
                        </select>
                        <argon-badge class="ms-1 me-3" size="md" color="success" variant="gradient">小时</argon-badge>
                        <select v-model="paper.time.mins">
                            <option disabled value="">分钟</option>
                            <option v-for="(m, index) in mins" :key="mins[index]">{{ m }}</option>
                        </select>
                        <argon-badge class="ms-1 me-3" size="md" color="success" variant="gradient">分钟</argon-badge>
                    </div>
                    <div class="col-6">
                        <argon-badge class="me-3" size="md" color="info" variant="gradient">权限</argon-badge>
                        <select v-model="paper.permission">
                            <!-- <option disabled value="">权限</option> -->
                            <option value="public">公开</option>
                            <option value="private">私有</option>
                            <option v-for="c of categories" :key="c.key">{{ c }}</option>
                        </select>
                    </div>
                </div>
                <div class="mt-3">
                    <div v-for="(question, idx) in paper.questions" :key="idx">
                        <!-- <pre>{{ question }}</pre> -->
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
                                    <div class="text-end mt-2">
                                        <argon-button @click="deleteItem(idx)" class="" color="danger" variant="gradient">删除</argon-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <argon-badge class="me-3" size="md" color="info" variant="gradient">题目</argon-badge>
                    <select v-model="qId">
                        <option v-for="(q, index) in questions" :key="index" :value="q.id">{{ q.id }}</option>
                    </select>

                    <argon-badge class="me-3 ms-3" size="md" color="info" variant="gradient">分数</argon-badge>
                    <input v-model="qScore" placeholder="分数" class="text-end" style="width:80px;" type="number">
                </div>
                <div class="mt-3">
                    <argon-button @click="addQuestion" class="col-12" color="primary" variant="gradient">新增问题</argon-button>
                </div>
                <div class="mt-3">
                    <argon-button @click="postPaper" class="col-12" color="success" variant="gradient">提交</argon-button>
                    <argon-button @click="goBack" class="col-12 mt-3" color="info" variant="gradient">返回</argon-button>
                </div>
            </div>
        </div>
        <div class="col-1"></div>

    </div>
    <div v-if="showTest">
        <pre>{{ paper }}</pre>
    </div>
</template>

<script>

import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const API_URL = `/api/paper`

export default {
    data() {
        return {
            userId:'',
            hours: [],
            mins: [],
            questions: [],//所有可选的题目信息
            qId: '',//选择题目
            qScore: '',//设置分数
            paper: {
                name: '',
                time: {
                    hours: null,
                    mins: null,
                },
                permission: '',
                userId: '',
                questions: []
            },
            //status: 'undo',//完成考试状态'undo','todo','done'
            isActive: false,//如果是交互的则为true，否则为false.[只有学生操作是true,老师编辑试卷、批改试卷，学生查看试卷都是false]
            isResult: false,//用来展示题目的正状态：正确、错误、待评审
            // forCheck: false,//是否支持选择；可能需要改checkbox绑定
            editScore: false,//用来修改分数(新建/修改试卷的时候为true；其他时候为false)
            editUScore: false,//用来修改学生分数（批改时为true；其他时候为false）

            showTest: false,//打印测试信息
            mock:false,//模拟HTTP
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,

    },
    methods: {
        async getPaper() {
            const id=this.$route.params.id;
            console.log(this.$route.params);//打印结果为{user:'david'}
            const url = `${API_URL}?paperId=${id}`

            if (!this.mock) {
                this.paper = await (await fetch(url)).json()
                console.log("paper", this.paper)
            }
            /* mock */
            if (this.mock) {
                this.paper = {
                    "id":id,
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
                }
            }
        },
        async getQuestions() {
            const url = `/api/question/`

            if (!this.mock) {
                this.questions = await (await fetch(url)).json()
                console.log("questions", this.questions)
            }
            /* mock */
            if (this.mock) {
                this.questions = [
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
                        "analysis": "1+1=2"
                    },
                    {
                        id: 'q02',
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
                        "analysis": "1+2=3"
                    },
                    {
                        'id': 'q05',
                        "stem": "1+4=",
                        "options": [],
                        "answer": [
                            "5",
                            "五"
                        ],
                        "type": "short",
                        "category": "C",
                        "disease": "C1",
                        "analysis": "1+4=5"
                    },
                    {
                        id: 'q04',
                        "stem": "1+23=",
                        "options": [],
                        "answer": "",
                        "type": "long",
                        "category": "D",
                        "disease": "D2",
                        "analysis": "1+23=24"
                    }
                ]
            }
            console.log(this.questions)
        },
        getPaperInfo(){
            this.paper.userId = this.userId
        },
        async postPaper() {
            /*todo:HTTP POST Test*/
            //是不是应该给我返回paperId
            const url = `${API_URL}?paperId=${this.paper.id}`
            this.getPaperInfo()
            let result = await fetch(url, {
                method: 'put',
                body: JSON.stringify(this.paper),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(this.paper)
            console.log(result)

            /* showTest=true，默认HTTP请求都成功了 */
            // if (this.showTest || result.ok) { //THIS
            if(result.ok){ //DELETE
                this.$toast.success(`提交成功，试卷ID: ${this.getPaperId(await result.json())}`, {
                    duration: 4000,
                    // position:"bottom"
                })
                this.$router.push('/my-papers')
            } else {
                this.$toast.error("提交失败", {
                    duration: 4000,
                    // position:"bottom"
                })
            }
        },
        getUserInfo(){
            if(this.showTest){
                this.userId = "testUser"
            }else{
                this.userId = localStorage.getItem("Email")
            }
        },
        addQuestion() {//新增试题
            //选择题目
            //设置分数
            //本地记录
            let question = this.questions.filter((q) => q.id == this.qId)[0]
            question.score = this.qScore
            this.paper.questions.push(question)
        },
        init(mode) {
            switch (mode) {
                case 't'://test 测试
                    this.showTest = true
                    break;
                case 'p'://teacher paper 老师组卷
                    // this.question.uAnswer = []//used
                    this.editScore = true
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
            for (let i = 0; i < 24; i++) {
                this.hours.push(i)
            }
            for (let i = 0; i < 60; i++) {
                this.mins.push(i)
            }
        },
        getPaperId(result) {
            //todo：需要修改
            if (!this.mock) {
                return result.id
            } else {
                return "Q01_test"
            }
        },
        goBack(){
            this.$router.go(-1)
        },
        showHidden(idx) {
            if (this.isActive) {
                this.paper.questions[idx].hidden = false
            } else {
                this.paper.questions[idx].hidden = !this.paper.questions[idx].hidden
            }
        },
        isRightAnswer(id, idx) {
            if (this.paper.questions[idx].type == 'single') {
                return id == this.paper.questions[idx].answer
            } else if (this.paper.questions[idx].type == 'multiple' || this.paper.questions[idx].type == 'short') {
                return this.paper.questions[idx].answer.indexOf(id) >= 0
            } else {
                return false
            }
        },
        isEqual(l1, l2) {
            if (l1.length != l2.length) {
                return false
            } else {
                l1 = l1.sort
                l2 = l2.sort
                return l1 == l2
            }
        },
        getUScore(idx) {//提交试卷的时候调用//used
            //todo:还没调用
            this.paper.questions[idx].status = 'done'
            if (this.paper.questions[idx].type == 'single') {
                this.paper.questions[idx].uScore = this.paper.questions[idx].uAnswer == this.paper.questions[idx].answer ? this.paper.questions[idx].score : 0
            } else if (this.paper.questions[idx].type == 'multiple') {
                this.paper.questions[idx].uScore = this.isEqual(this.paper.questions[idx].answer, this.paper.questions[idx].uAnswer) ? this.paper.questions[idx].score : 0
            } else if (this.paper.questions[idx].type == 'short') {
                this.paper.questions[idx].uScore = this.paper.questions[idx].answer.indexOf(this.paper.questions[idx].uAnswer) >= 0 ? this.paper.questions[idx].score : 0
            } else {
                this.paper.questions[idx].uScore = ''
                this.paper.questions[idx].status = 'todo'
            }
        },
        correct(idx) {
            if (this.paper.questions[idx].status == 'done') {
                return this.paper.questions[idx].uScore == this.paper.questions[idx].score
            }
            return false
        },
        wrong(idx) {
            if (this.paper.questions[idx].status == 'done') {
                return this.paper.questions[idx].uScore != this.paper.questions[idx].score

            }
            return false
        },
        waiting(idx) {
            return this.paper.questions[idx].status == 'todo'
        },
        select(idx) {
            return this.paper.questions[idx].type == 'single' || this.paper.questions[idx].type == 'multiple'
        },
        multiple(idx) {
            return this.paper.questions[idx].type == 'multiple'
        },
        single(idx) {
            return this.paper.questions[idx].type == 'single'
        },
        short(idx) {
            return this.paper.questions[idx].type == 'short'
        },
        long(idx) {
            return this.paper.questions[idx].type == 'long'
        },
        undo(idx) {
            return this.paper.questions[idx].status == 'undo'
        },
        todo(idx) {
            return this.questions[idx].status == 'todo'
        },
        deleteItem(idx){
            let qId = this.paper.questions[idx].id
            this.paper.questions = this.paper.questions.filter((q)=> q.id!=qId)
        }
    },
    mounted() {
        this.init('p')
    },
    created(){
        this.getUserInfo()
        this.getPaper()
        this.getQuestions()
    }
}

</script>