<template>
    <div>
        <div class="card mb-2 me-3 ms-3 pe-4 ps-4 pt-3 pb-3">
            <div v-if="!isActive" class="row mb-3">
                <div v-if="isResult" class="col-2">
                    <argon-badge v-if="waiting" class="col-12" color="warning" variant="gradient">待评审</argon-badge>
                    <argon-badge v-if="correct" class="col-12" color="success" variant="gradient">正确</argon-badge>
                    <argon-badge v-if="wrong" class="col-12" color="danger" variant="gradient">错误</argon-badge>
                </div>
                <div class="col"></div>
                <!-- <div class="col-4"> -->
                <div v-if="editUScore" class="col-4 text-end">
                    <div class="d-flex align-items-center">
                        <div class="col"></div>
                        <div class="col-4">
                            <input @change="question.status = 'done'" v-model="question.uScore" placeholder="得分" class="form-control text-end">
                        </div>
                        <!-- <argon-badge class="col-6" color="info" variant="gradient" size="lg">{{ question.score }}分</argon-badge> -->
                        <span class="col-4 text-start ps-1">/{{ question.score }}分</span>
                    </div>
                </div>
                <div v-else class="col-2">
                    <div v-if="editScore">
                        <input v-model="question.score" placeholder="分数" class="form-control text-end">
                    </div>
                    <div v-else>
                        <argon-badge class="col-12" color="info" variant="gradient" size="lg">{{ question.status=='todo' ?
                            '' : question.uScore + ` / `  }} {{ question.score }}分</argon-badge>
                    </div>
                </div>
            </div>
            <div @click="showHidden">
                <div>
                    <h6>{{ question.stem }}</h6>
                </div>
                <div v-if="select">
                    <div v-for="item of question.options" :key="item.id">
                        <!-- <div class="row align-items-center text-center p-1">
                        <div class="col-1">
                            <input v-if="multiple" type="checkbox" :value="item.id"
                                v-model="question.uAnswer">
                            <input v-else type="radio" :value="item.id" v-model="question.uAnswer">
                        </div>
                        <div class="col-6">
                            <input v-model="item.content" placeholder="选项" class="form-control" disabled>
                        </div>
                        <div class="col-1">
                            <i v-if="isRightAnswer(item.id)" class="ni ni-check-bold text-success opacity-10"></i>
                        </div>
                    </div> -->
                        <div>
                            <input v-if="multiple" type="checkbox" :id="item.id" :value="item.id" v-model="question.uAnswer"
                                :disabled="!isActive">
                            <input v-else type="radio" :id="item.id" :value="item.id" v-model="question.uAnswer"
                                :disabled="!isActive">
                            <label :for="item.id" class="ms-4 me-4">{{ item.content }}</label>
                            <i v-if="!isActive && isRightAnswer(item.id)"
                                class="ni ni-check-bold text-success opacity-10"></i>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <!-- <div v-if="modify">
                    <div v-if="question.type == 'long'">
                        <textarea placeholder="请输入你的答案" disabled class="form-control"></textarea>
                    </div>
                    <div v-else>
                        <input placeholder="请输入你的答案" disabled class="form-control"><br>
                        <div class="row">
                            <div v-for="(item, index) in question.answer" :key="index" class="col-2">
                                <input v-model="question.answer[index]" class="form-control col-2">
                            </div>
                            <div class="col-2 text-center">
                                <argon-button @click="newAnswer" color="success" variant="gradient">+
                                    正确答案</argon-button>
                            </div>
                        </div>
                    </div>
                </div> -->
                    <div>
                        <div v-if="long">
                            <textarea placeholder="请输入你的答案" :disabled="!isActive" class="form-control"
                                v-model="question.uAnswer"></textarea>
                        </div>
                        <div v-else class="pt-2">
                            <input class="form-control" placeholder="请输入你的答案" :disabled="!isActive"
                                v-model="question.uAnswer"><br>
                            <div v-if="!isActive">
                                <h6 class="text-md">正确答案：</h6>
                                <argon-badge v-for="item of question.answer" :key="item.key" class="me-2" size="md"
                                    color="success" variant="gradient">{{ item
                                    }}</argon-badge>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="hidden">
                    <hr class="mt-3">
                    <h6 class="text-md">解析：</h6>
                    <span>{{ question.analysis }}</span>
                </div>
            </div>
        </div>
        <!-- <div v-if="forCheck" class="col-1">
        <div class="text-end">
            <input type="checkbox" id="check" v-model="question.checked">
            <label v-if="showTest" for="check">选择 {{ question.checked }}</label>
        </div>
    </div> -->
        <div v-if="showTest">
            <pre>{{ question }}</pre>
        </div>
    </div>
</template>

<script>
import ArgonBadge from "@/components/ArgonBadge.vue";
// import ArgonButton from "@/components/ArgonButton.vue";
// import ArgonAlert from "@/components/ArgonAlert.vue";
// import Modal from "@/components/Modal.vue";

// const API_URL = `/api/question`

export default {
    data() {
        return {
            // showAlert: 0,
            // showModal: false,
            hidden: false,
            // modify: true,
            question: {},
            status: 'undo',//完成考试状态'undo','todo','done'
            isActive: false,//如果是交互的则为true，否则为false.[只有学生操作是true,老师编辑试卷、批改试卷，学生查看试卷都是false]
            isResult: false,//用来展示题目的正状态：正确、错误、待评审
            // forCheck: false,//是否支持选择；可能需要改checkbox绑定
            editScore: false,//用来修改分数(新建/修改试卷的时候为true；其他时候为false)
            editUScore: false,//用来修改学生分数（批改时为true；其他时候为false）
            showTest: true, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    props:{
        // question:{
        //     type:Object,
        //     required:true
        // }
    },
    components: {
        ArgonBadge,
        // ArgonButton,
        // ArgonAlert,
        // Modal
    },
    methods: {
        showHidden() {
            if (this.isActive) {
                this.hidden = false
            } else {
                this.hidden = !this.hidden
            }
        },
        init(mode) {
            switch (mode) {
                case 't'://test 测试
                    this.showTest = true
                    break;
                case 'p'://teacher paper 老师组卷
                    this.question.uAnswer = []//used
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
        },
        getQuestion(idx) {//0,1,2,3分别是单选、多选、填空、简答
            if (this.showTest) {
                let questions = [
                    {
                        id: 'q01',
                        stem: '1+1=?',
                        options: [{
                            id: 1,
                            content: '1'
                        }, {
                            id: 2,
                            content: '2'
                        }, {
                            id: 3,
                            content: '3'
                        }],
                        answer: 2,
                        uAnswer: 3,
                        type: 'single',
                        category: 'A',
                        disease: 'A1',
                        analysis: '1+1=2',
                        status: 'undo',
                        checked: false,
                        score: 5,
                    },
                    {
                        "stem": "1+2=",
                        "options": [
                            {
                                "id": 1,
                                "content": "2"
                            },
                            {
                                "id": 2,
                                "content": "3"
                            },
                            {
                                "id": 3,
                                "content": "three"
                            }
                        ],
                        "answer": [
                            2,
                            3
                        ],
                        "type": "multiple",
                        "category": "B",
                        "disease": "B1",
                        "analysis": "1+2=3",
                        uAnswer: [1, 2],
                        status: 'done',
                        score: 10
                    },
                    {
                        "stem": "1+2=",
                        "options": [],
                        "answer": [
                            "3",
                            "three"
                        ],
                        "type": "short",
                        "category": "C",
                        "disease": "C1",
                        "analysis": "1+2=3",
                        uAnswer: "3",
                        status: 'done',
                        score: 20
                    },
                    {
                        "stem": "1+7=",
                        "options": [],
                        "answer": "",
                        "type": "long",
                        "category": "D",
                        "disease": "D1",
                        "analysis": "1+7=8",
                        uAnswer: "111111+77777=888888",
                        status: 'todo',
                        score: 30
                    }
                ]
                this.question = questions[idx]//used
                console.log("question: ",this.question)
            }

            if (this.showTest) {//修改题目信息
                // this.question.uAnswer = '11111'
                // this.question.answer = [1,2,3]
                // this.question.uScore = 100
                // this.question.score =100

                //操作属性
                // this.showTest = true
                // this.editScore = true
                // this.editUScore = true
                // this.isActive = true
            }

        },
        isRightAnswer(id) {
            if (this.question.type == 'single') {
                return id == this.question.answer
            } else if (this.question.type == 'multiple' || this.question.type == 'short') {
                return this.question.answer.indexOf(id) >= 0
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
        getUScore() {//提交试卷的时候调用//used
            //todo:还没调用
            this.question.status = 'done'
            if (this.question.type == 'single') {
                this.question.uScore = this.question.uAnswer == this.question.answer ? this.question.score : 0
            } else if (this.question.type == 'multiple') {
                this.question.uScore = this.isEqual(this.question.answer, this.question.uAnswer) ? this.question.score : 0
            } else if (this.question.type == 'short') {
                this.question.uScore = this.question.answer.indexOf(this.question.uAnswer) >= 0 ? this.question.score : 0
            } else {
                this.question.uScore = ''
                this.question.status = 'todo'
            }
        }
    },
    mounted() {
        this.getQuestion(3)//
        this.init('w')//{t:测试},{p:组卷},{e:考卷},{r:答卷},{w:审批};0-3，单、多、短、长
        this.getUScore()//todo 其实不再这里掉用
    },
    computed: {
        select() {
            return this.question.type == 'single' || this.question.type == 'multiple'
        },
        multiple() {
            return this.question.type == 'multiple'
        },
        single() {
            return this.question.type == 'single'
        },
        short() {
            return this.question.type == 'short'
        },
        long() {
            return this.question.type == 'long'
        },
        undo() {
            return this.question.status == 'undo'
        },
        todo() {
            return this.question.status == 'todo'
        },
        correct() {
            if(this.question.status == 'done'){
                return this.question.uScore == this.question.score
            }
            return false
        },
        wrong() {
            if (this.question.status == 'done') {
                return this.question.uScore != this.question.score
                
            }
            return false
        },
        waiting() {
            return this.question.status == 'todo'
        }

    }
}
</script>