<template>
    <div v-for="(question, idx) in questions" :key="idx">
        <div>
            <div class="card mb-2 me-3 ms-3 pe-4 ps-4 pt-3 pb-3">
                <div v-if="!isActive" class="row mb-3">
                    <div v-if="isResult" class="col-2">
                        <argon-badge v-if="waiting(idx)" class="col-12" color="warning" variant="gradient">待评审</argon-badge>
                        <argon-badge v-if="correct(idx)" class="col-12" color="success" variant="gradient">正确</argon-badge>
                        <argon-badge v-if="wrong(idx)" class="col-12" color="danger" variant="gradient">错误</argon-badge>
                    </div>
                    <div class="col"></div>
                    <div v-if="editUScore" class="col-4 text-end">
                        <div class="d-flex align-items-center">
                            <div class="col"></div>
                            <div class="col-4">
                                <input @change="question.status = 'done'" v-model="question.uScore" placeholder="得分"
                                    class="form-control text-end">
                            </div>
                            <span class="col-4 text-start ps-1">/{{ question.score }}分</span>
                        </div>
                    </div>
                    <div v-else class="col-2">
                        <div v-if="editScore">
                            <input v-model="question.score" placeholder="分数" class="form-control text-end">
                        </div>
                        <div v-else>
                            <argon-badge class="col-12" color="info" variant="gradient" size="lg">{{ question.status == 'todo'|| !question.uScore
                                ?
                                '' : question.uScore + ` / ` }} {{ question.score }}分</argon-badge>
                        </div>
                    </div>
                </div>
                <div @click="showHidden(idx)">
                    <div>
                        <h6>{{idx+1}}. {{ question.stem }}</h6>
                    </div>
                    <div v-if="select(idx)">
                        <div v-for="item of question.options" :key="item.id">
                            <div>
                                <input @change="getUScore(idx)" v-if="multiple(idx)" type="checkbox" :id="item.id" :value="item.id"
                                    v-model="question.uAnswer" :disabled="!isActive">
                                <input @change="getUScore(idx)" v-else type="radio" :id="item.id" :value="item.id" v-model="question.uAnswer"
                                    :disabled="!isActive">
                                <label :for="item.id" class="ms-4 me-4">{{ item.content }}</label>
                                <i v-if="!isActive && isRightAnswer(item.id,idx)"
                                    class="ni ni-check-bold text-success opacity-10"></i>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div>
                            <div v-if="long(idx)">
                                <textarea @change="getUScore(idx)" placeholder="请输入你的答案" :disabled="!isActive" class="form-control"
                                    v-model="question.uAnswer"></textarea>
                            </div>
                            <div v-else class="pt-2">
                                <input @change="getUScore(idx)" class="form-control" placeholder="请输入你的答案" :disabled="!isActive"
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
                    <div v-if="question.hidden">
                        <hr class="mt-3">
                        <h6 class="text-md">解析：</h6>
                        <span>{{ question.analysis }}</span>
                    </div>
                </div>
            </div>
            <!-- <div v-if="showTest">
                <pre>{{ question }}</pre>
            </div> -->
        </div>
    </div>
</template>

<script>
import ArgonBadge from "@/components/ArgonBadge.vue";


export default {
    data() {
        return {
            hidden: false,
            questions:[],
            status: 'undo',//完成考试状态'undo','todo','done'
            isActive: false,//如果是交互的则为true，否则为false.[只有学生操作是true,老师编辑试卷、批改试卷，学生查看试卷都是false]
            isResult: false,//用来展示题目的正状态：正确、错误、待评审
            // forCheck: false,//是否支持选择；可能需要改checkbox绑定
            editScore: false,//用来修改分数(新建/修改试卷的时候为true；其他时候为false)
            editUScore: false,//用来修改学生分数（批改时为true；其他时候为false）
            showTest: false, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonBadge,

    },
    methods: {
        showHidden(idx) {
            if (this.isActive) {
                this.questions[idx].hidden = false
            } else {
                this.questions[idx].hidden = !this.questions[idx].hidden
            }
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
        },
        getQuestions() {//0,1,2,3分别是单选、多选、填空、简答
            if (this.showTest) {
                this.questions = [
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
                        status: 'done',
                        checked: false,
                        score: 5,
                    },
                    {
                        stem: "1+2=",
                        options: [
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
                        answer: [
                            2,
                            3
                        ],
                        type: "multiple",
                        category: "B",
                        disease: "B1",
                        analysis: "1+2=3",
                        uAnswer: [1, 2],
                        status: 'done',
                        score: 10
                    },
                    {
                        stem: "1+2=",
                        options: [],
                        answer: [
                            "3",
                            "three"
                        ],
                        type: "short",
                        category: "C",
                        disease: "C1",
                        analysis: "1+2=3",
                        uAnswer: "3",
                        status: 'done',
                        score: 20
                    },
                    {
                        stem: "1+7=",
                        options: [],
                        answer: "",
                        type: "long",
                        category: "D",
                        disease: "D1",
                        analysis: "1+7=8",
                        uAnswer: "111111+77777=888888",
                        status: 'todo',
                        score: 30
                    }
                ]
                // this.question = questions[idx]//used
                console.log("questions: ",this.questions)
            }
        },
        isRightAnswer(id,idx) {
            if (this.questions[idx].type == 'single') {
                return id == this.questions[idx].answer
            } else if (this.questions[idx].type == 'multiple' || this.questions[idx].type == 'short') {
                return this.questions[idx].answer.indexOf(id) >= 0
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
            this.questions[idx].status = 'done'
            if (this.questions[idx].type == 'single') {
                this.questions[idx].uScore = this.questions[idx].uAnswer == this.questions[idx].answer ? this.questions[idx].score : 0
            } else if (this.questions[idx].type == 'multiple') {
                this.questions[idx].uScore = this.isEqual(this.questions[idx].answer, this.questions[idx].uAnswer) ? this.questions[idx].score : 0
            } else if (this.questions[idx].type == 'short') {
                this.questions[idx].uScore = this.questions[idx].answer.indexOf(this.questions[idx].uAnswer) >= 0 ? this.questions[idx].score : 0
            } else {
                this.questions[idx].uScore = ''
                this.questions[idx].status = 'todo'
            }
        },
        correct(idx) {
            if(this.questions[idx].status == 'done'){
                return this.questions[idx].uScore == this.questions[idx].score
            }
            return false
        },
        wrong(idx) {
            if (this.questions[idx].status == 'done') {
                return this.questions[idx].uScore != this.questions[idx].score
                
            }
            return false
        },
        waiting(idx) {
            return this.questions[idx].status == 'todo'
        },
        select(idx) {
            return this.questions[idx].type == 'single' || this.questions[idx].type == 'multiple'
        },
        multiple(idx) {
            return this.questions[idx].type == 'multiple'
        },
        single(idx) {
            return this.questions[idx].type == 'single'
        },
        short(idx) {
            return this.questions[idx].type == 'short'
        },
        long(idx) {
            return this.questions[idx].type == 'long'
        },
        undo(idx) {
            return this.questions[idx].status == 'undo'
        },
        todo(idx) {
            return this.questions[idx].status == 'todo'
        },
    },
    mounted() {
        this.getQuestions()//
        this.init('e')//{t:测试},{p:组卷},{e:考卷},{r:答卷},{w:审批};0-3，单、多、短、长
    },
    computed: {//不能有参数

    }
}
</script>