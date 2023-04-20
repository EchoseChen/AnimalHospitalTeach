<template>
    <div class="card p-3 ms-3 me-3">
        <div class="d-flex justify-content-around">
            <div class="d-flex align-items-center">
                <argon-badge class="me-3" size="md" color="info" variant="gradient">病种</argon-badge>
                <select @change="fetchDiseases(category)" v-model="category">
                    <!-- <option disabled value="">选择病种</option> -->
                    <option value="">全部</option>
                    <option v-for="c of categories" :key="c.key" :value="c.categoryName">{{ c.categoryName }}</option>
                </select>
            </div>
            <div class="d-flex align-items-center">
                <argon-badge class="me-3" size="md" color="info" variant="gradient">病名</argon-badge>
                <select v-model="disease">
                    <!-- <option disabled value="">选择病名</option> -->
                    <option value="">全部</option>
                    <option v-for="d of diseases" :key="d.key" :value="d.diseaseName">{{ d.diseaseName }}</option>
                </select>
            </div>
            <div class="d-flex align-items-center">
                <argon-badge class="me-3" size="md" color="info" variant="gradient">类型</argon-badge>
                <select v-model="type">
                    <!-- <option disabled value="">题目类型</option> -->
                    <option value="">全部</option>
                    <option v-for="item of types" :key="item.key" :value="item.en">{{ item.ch }}</option>
                </select>
            </div>
            <div class="d-flex text-end">
                <argon-button @click="getQuestions(category, disease, type)" color="success" variant="gradient" size="sm"
                    class="me-4">查询</argon-button>
                <argon-button @click="newQuestion" color="primary" variant="gradient" size="sm" class="">新增</argon-button>
            </div>
            <div v-if="showTest">
                <span>{{ category }},{{ disease }},{{ type }}</span>
            </div>
        </div>

    </div>
    <div class="d-flex flex-column pt-3">
        <div v-for="(question, index) in questions" :key="index">
            <div class="card mb-2 me-3 ms-3 pt-4 ps-4 pb-2 pe-4">
                <div class="row">
                    <div class="col">
                        <div @click="showHidden(index)" class="row">
                            <div>
                                <input v-if="question.modify" v-model="question.stem" placeholder="问题"
                                    class="form-control mb-2">
                                <h6 v-else>{{ question.stem }}</h6>
                            </div>
                            <div v-if="question.type == 'multiple' || question.type == 'single'">
                                <div v-for="item of question.options" :key="item.id">
                                    <div v-if="question.modify" class="row align-items-center text-center p-1">
                                        <div class="col-1">
                                            <input v-if="question.type == 'multiple'" type="checkbox" :value="item.id"
                                                v-model="question.answer">
                                            <input v-else type="radio" :value="item.id" v-model="question.answer">
                                        </div>
                                        <div class="col-3">
                                            <input v-model="item.content" placeholder="选项" class="form-control">
                                        </div>
                                    </div>
                                    <div v-else>
                                        <input v-if="question.type == 'multiple'" type="checkbox" :value="item.id"
                                            v-model="question.answer" disabled>
                                        <input v-else type="radio" :value="item.id" v-model="question.answer" disabled>
                                        <span class="ms-3">{{ item.content }}</span>
                                    </div>
                                </div>
                                <div v-if="question.modify" class="row ps-4 pt-1">
                                    <argon-button @click="newOption(index)" color="success" variant="gradient"
                                        class="col-2">+</argon-button>
                                </div>
                            </div>
                            <div v-else>
                                <div v-if="question.modify">
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
                                                <argon-button @click="newAnswer(index)" color="success" variant="gradient">+
                                                    正确答案</argon-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div v-if="question.type == 'long'">
                                        <textarea placeholder="请输入你的答案" disabled class="form-control"></textarea>
                                    </div>
                                    <div v-else>
                                        <input class="form-control" placeholder="请输入你的答案" disabled><br>
                                        <argon-badge v-for="item of question.answer" :key="item.key" class="me-1"
                                            size="md">{{
                                                item
                                            }}</argon-badge>
                                    </div>
                                </div>
                            </div>
                            <div v-if="question.hidden">
                                <hr class="mt-3">
                                <h6 class="text-md">解析：</h6>
                                <textarea v-if="question.modify" v-model="question.analysis" placeholder="解析"
                                    class="form-control"></textarea>
                                <span v-else>{{ question.analysis }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="forCheck" class="col-1">
                        <div class="text-end">
                            <input type="checkbox" id="check" v-model="question.checked">
                            <label v-if="showTest" for="check">选择 {{ question.checked }}</label>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mt-2">
                    <div class="col">
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ question.id }}</argon-badge>
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ question.type }}</argon-badge>
                        <argon-badge color='success' size="sm" variant='gradient'>{{ question.category }} | {{
                            question.disease
                        }}</argon-badge>
                    </div>
                    <div v-if="forOptions" class="col text-end">
                        <argon-button v-if="question.modify" class="me-4" @click="myEdit(index)" color='success'
                            variant="gradient" size="sm">提交</argon-button>
                        <argon-button v-else class="me-4" @click="myEdit(index)" color='warning' variant="gradient"
                            size="sm">修改</argon-button>
                        <argon-button v-if="question.modify" class="me-4" @click="cancelEdit(index)" color='info'
                            variant="gradient" size="sm">取消</argon-button>
                        <argon-button v-else class="me-0" @click="checkDelete(index)" color='danger' variant="gradient"
                            size="sm">删除</argon-button>
                    </div>
                </div>
                <!-- <div class="mt-1">
                    <argon-alert @click="closeAlert(index)" v-if="question.showAlert == 1" color="success"
                        icon="ni ni-like-2 ni-lg">
                        <strong>提交成功!</strong>
                    </argon-alert>
                    <argon-alert @click="closeAlert(index)" v-if="question.showAlert == -1" color="danger">
                        <strong>提交失败!</strong> 重新试一下！
                    </argon-alert>
                </div> -->
            </div>
            <div v-if="showTest">
                <pre>{{ question }}</pre>
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
                        <div class="col-6 text-end">
                            <argon-badge variant="gradient">问题ID: {{ this.questions[toDeleteIndex].id }}</argon-badge>
                        </div>
                    </div>
                </template>
                <template #body>
                    <span class="font-weight-bold">你确定要删除吗</span>
                </template>
                <template #footer>
                    <div class="row">
                        <div class="col-6">
                            <argon-button @click="myDelete(toDeleteIndex)" color="danger"
                                variant="gradient">确定</argon-button>
                            <!-- <button @click="myDelete(index)" class="btn bg-white text-danger">确定</button> -->
                        </div>
                        <div class="col-6 text-end">
                            <argon-button @click="cancelDelete" color="info" variant="gradient">取消</argon-button>
                            <!-- <button  class="btn bg-white text-success">取消</button> -->
                        </div>
                    </div>
                </template>
            </modal>
        </Teleport>
    </div>
    <pre v-if="showTest"> {{ questions }}</pre>
</template>
    
<script>
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
// import ArgonAlert from "@/components/ArgonAlert.vue";
import Modal from "@/components/Modal.vue";

const API_URL = `/api/question`

export default {
    data() {
        return {
            categories: '',
            diseases: '',
            types: [{
                ch: '单选题',
                en: 'single'
            }, {
                ch: '多选题',
                en: 'multiple'
            }, {
                ch: '填空题',
                en: 'short'
            }, {
                ch: '简答题',
                en: 'long'
            }],
            questions: '',
            category: '',
            disease: '',
            type: '',
            mock: true,//模拟HTTP调用
            toDeleteIndex: -1,//用来存想要删除的index
            //list
            showModal: false,
            forOptions: true,//是否支持删除，修改操作
            forCheck: false,//是否支持选择；可能需要改checkbox绑定
            showTest: false //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,
        // ArgonAlert,
        Modal

    },
    methods: {
        newQuestion() {
            this.$router.push('/new-question')
        },
        async fetchCategories() {//GET
            const url = `/api/category/`
            this.categories = await (await fetch(url)).json()
            console.log("categories: ", this.categories)

            /* mock */
            if (this.mock) {
                this.categories = [{
                    id: 1,
                    categoryName: 'A'
                },
                {
                    id: 2,
                    categoryName: 'B'
                },
                {
                    id: 3,
                    categoryName: 'C'
                },
                {
                    id: 4,
                    categoryName: 'D'
                },
                ]
            }
        },
        async fetchDiseases(category) {//GET
            this.disease = ''

            // console.log("category:",this.category)
            const url = encodeURI(`/api/disease/category?categoryName=${this.category}`)
            // console.log("url:",url)

            this.diseases = await (await fetch(url)).json()
            console.log("diseases:", this.diseases)

            /* mock */
            if (this.mock) {
                if (category == '') {
                    this.diseases = [
                        {
                            id: 1,
                            diseaseName: 'A1',
                        },
                        {
                            id: 2,
                            diseaseName: 'A2',
                        },
                        {
                            id: 3,
                            diseaseName: 'A3',
                        },
                        {
                            id: 4,
                            diseaseName: 'B1',
                        },
                        {
                            id: 5,
                            diseaseName: 'B2',
                        },
                        {
                            id: 6,
                            diseaseName: 'C1',
                        },
                        {
                            id: 7,
                            diseaseName: 'D1',
                        },
                        {
                            id: 8,
                            diseaseName: 'D2',
                        },
                        {
                            id: 9,
                            diseaseName: 'D3',
                        }]
                } else {
                    this.diseases = this.diseases = [
                        {
                            id: 1,
                            diseaseName: 'A1',
                        },
                        {
                            id: 2,
                            diseaseName: 'A2',
                        },
                        {
                            id: 3,
                            diseaseName: 'A3',
                        },
                        {
                            id: 4,
                            diseaseName: 'B1',
                        },
                        {
                            id: 5,
                            diseaseName: 'B2',
                        },
                        {
                            id: 6,
                            diseaseName: 'C1',
                        },
                        {
                            id: 7,
                            diseaseName: 'D1',
                        },
                        {
                            id: 8,
                            diseaseName: 'D2',
                        },
                        {
                            id: 9,
                            diseaseName: 'D3',
                        }]
                    this.diseases = this.diseases.filter((d) => d.diseaseName.charAt(0) == category)
                }
            }
        },
        async getQuestions(category, disease, type) {//通过病种、病名、题目类型、用户id(todo)，查问题
            // const url = `${API_URL}?category=${this.category}&disease=${this.disease}&type=${this.type}&uid=${this.userId}`

            //todo!!!!!!!
            const url = `${API_URL}/`

            this.questions = await (await fetch(url)).json()

            console.log("questions", this.questions)

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

            //本地过滤
            if (category) {
                this.questions = this.questions.filter((question) => question.category == category)
            }
            if (disease) {
                this.questions = this.questions.filter((q) => q.disease == disease)
            }
            if (type) {
                this.questions = this.questions.filter((q) => q.type == type)
            }
            // if(uid){
            //     this.questions = this.questions.filter((q)=>q.uid == uid)
            // }
        },
        //list
        showHidden(index) {
            if (!this.questions[index].modify) {
                this.questions[index].hidden = !this.questions[index].hidden
            }
        },
        // closeAlert(index) {
        //     this.questions[index].showAlert = 0
        // },
        newAnswer(index) {
            this.questions[index].answer.push('')
        },
        newOption(index) {
            let num = this.questions[index].options.length
            this.questions[index].options.push({ id: num + 1, content: '' })
        },
        async myEdit(index) {
            this.questions[index].hidden = true
            if (!this.questions[index].modify) {
                this.questions[index].modify = true
            } else {
                //todo:HTTP Put Test
                const url = `${API_URL}?questionId=${this.questions[index].id}`
                let result = await fetch(url, {
                    method: 'put',
                    body: JSON.stringify(this.questions[index]),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log("PUT: ", url)
                console.log("PUT body:", this.questions[index])
                console.log("PUT result:", result)
                if (this.showTest || result.ok) { //showTest状态默认都是成功的
                    // this.questions[index].showAlert = 1
                    this.questions[index].modify = false
                    this.$toast.success(`修改成功，问题ID: ${this.questions[index].id}`, {
                        duration: 4000,
                        // position:"bottom"
                    })
                } else {
                    // this.questions[index].showAlert = -1
                    this.$toast.error("提交失败！请重试！", {
                        duration: 4000,
                        // position:"bottom"
                    })
                }
            }
        },
        checkDelete(index) {
            this.showModal = true
            this.toDeleteIndex = index
        },
        cancelDelete() {
            this.showModal = false
        },
        cancelEdit(index) {
            this.questions[index].modify = false
        },
        async myDelete(index) {
            //todo:HTTP Delete Test
            this.showModal = false
            this.toDeleteIndex = -1
            const url = `${API_URL}?questionId=${this.questions[index].id}`
            console.log("DELETE: ", url)
            let result = await fetch(url, {
                method: 'delete',
            })
            console.log("DELETE", result)
            if (this.showTest || result.ok) { //showTest状态默认都是成功的
                // this.questions[index].showAlert = 1
                // this.questions[index].modify = false
                this.$toast.success(`删除成功，问题ID: ${this.questions[index].id}`, {
                    duration: 4000,
                    // position:"top"
                })
                if(this.showTest){
                    this.questions = this.questions.filter((q)=> q.id!=this.questions[index].id)
                }
            } else {
                // this.questions[index].showAlert = -1
                this.$toast.error("删除失败，请重试！", {
                    duration: 4000,
                    // position:"top"
                })
            }
        }
    },
    watch: {

    },
    created() {
        this.fetchCategories()
        this.fetchDiseases(this.category)
        this.getQuestions()
    }
}
</script>