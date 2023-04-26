<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
            <div class="card p-4 m-3">
                <div class="row mt-3">
                    <div class="col-1"></div>
                    <div class="col border-radius-lg">
                        <div>
                            <h4>新增题目</h4>
                        </div>
                        <div class="mt-4 row">
                            <div class="col-6">
                                <!-- <span class="text-dark font-weight-bold">病种: </span> -->
                                <argon-badge class="me-3" size="md" color="info" variant="gradient">病种</argon-badge>
                                <select @change="fetchDiseases(question.category)" v-model="question.category">
                                    <option disabled value="">选择病种</option>
                                    <option v-for="c of categories" :key="c.key" :value="c.categoryName">{{ c.categoryName
                                    }}</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <!-- <span class="text-dark font-weight-bold">病名: </span> -->
                                <argon-badge class="me-3" size="md" color="info" variant="gradient">病名</argon-badge>
                                <select v-model="question.disease">
                                    <option disabled value="">选择病名</option>
                                    <option v-for="d of diseases" :key="d.key" :value="d.diseaseName">{{ d.diseaseName }}
                                    </option>
                                </select>
                            </div>
                            <div v-if="showTest" class="col-2">
                                <span>{{ question.category }},{{ question.disease }}</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <argon-badge class="me-3" size="md" color="info" variant="gradient">类型</argon-badge>
                            <input type="radio" id="1" value="select" v-model="picked">
                            <label for="1" class="text-lg me-5">选择</label>
                            <input type="radio" id="2" value="text" v-model="picked">
                            <label for="2" class="text-lg">填空</label>
                            <span v-if="showTest" class="ms-3">Picked: {{ picked }}</span>
                        </div>
                        <div v-if="picked == 'select'">
                            <div>
                                <argon-badge class="me-3" size="md" color="info" variant="gradient">类型</argon-badge>
                                <input type="checkbox" id="multiple" v-model="multiple">
                                <label for="multiple" class="text-lg">多选题</label>
                                <span v-if="showTest" class="ms-3">{{ multiple }}</span>
                            </div>
                            <div class="mt-2">
                                <div>
                                    <input v-model="question.stem" placeholder="问题" class="form-control">
                                </div>
                                <div>
                                    <div v-for="item of question.options" :key="item.id"
                                        class="row mt-3 align-items-center ">
                                        <div class="col-1 text-center">
                                            <input v-if="multiple" type="checkbox" :value="item.id"
                                                v-model="question.answer">
                                            <input v-else type="radio" :value="item.id" v-model="question.answer">
                                        </div>
                                        <div class="col-8">
                                            <input v-model="item.content" placeholder="选项" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-1">
                                    </div>
                                    <div class="col-8">
                                        <argon-button @click="newOption" class="col-12" color="info"
                                            variant="gradient">+</argon-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div>
                                <argon-badge class="me-3" size="md" color="info" variant="gradient">类型</argon-badge>
                                <input type="checkbox" id="long" v-model="long">
                                <label for="long" class="text-lg">长答案</label>
                                <span v-if="showTest">{{ long }}</span>
                            </div>
                            <div>
                                <div class="col">
                                    <input v-model="question.stem" placeholder="问题" class="form-control">
                                </div>
                                <div v-if="!long" class="mt-3">
                                    <div class="col">
                                        <input placeholder="请输入你的答案" disabled class="form-control">
                                    </div>
                                    <div class="row">
                                        <div class="col-3 mt-3" v-for="(item, index) in question.answer" :key="index">
                                            <input v-model="question.answer[index]" class="form-control">
                                        </div>
                                        <div class="col-3 mt-3">
                                            <argon-button @click="newAnswer" color="info" variant="gradient"
                                                class="col-12">+
                                                正确答案</argon-button>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="col-12">
                                    <textarea placeholder="请输入你的答案" disabled class="form-control mt-3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 col-12">
                            <textarea v-model="question.analysis" placeholder="解析" class="form-control"></textarea>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <argon-button @click="postQuestion" color="success" variant="gradient"
                                    class="col-12">提交</argon-button>
                            </div>
                            <div class="col-12 mt-3">
                                <argon-button @click="goBack" color="info" variant="gradient"
                                    class="col-12">返回</argon-button>
                            </div>
                        </div>
                        <div>
                            <pre v-if="showTest">{{ question }}</pre>
                        </div>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>

        </div>
        <div class="col-1"></div>
    </div>
</template>
   
<script>
// import ArgonAlert from "@/components/ArgonAlert.vue";
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
// import Modal from "@/components/Modal.vue";

const API_URL = `/api`

export default {
    data() {
        return {
            categories: [],
            diseases: [],
            picked: 'select',
            multiple: false,
            long: false,
            question: {
                stem: '',
                options: [{
                    id: 1,
                    content: ''
                }],
                answer: '',
                type: 'single',
                category: '',
                disease: '',
                analysis: ''
            },
            userId: '',
            mock: false,//模拟HTTP
            showTest: false, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,
        // ArgonAlert,
        // Modal
    },
    methods: {
        newOption() {
            let num = this.question.options.length
            this.question.options.push({ id: num + 1, content: '' })
        },
        newAnswer() {
            this.question.answer.push('')
        },
        async fetchCategories() {//GET
            /* todo:change */
            const url = `${API_URL}/category/`
            this.categories = await (await fetch(url)).json()
            console.log(this.categories)

            /* mock*/
            if (this.mock) {
                this.categories = [{ categoryName: 'A' }, { categoryName: 'B' }, { categoryName: 'C' }, { categoryName: 'D' },]
            }
        },
        async fetchDiseases(category) {//GET
            /*todo:change*/
            const url = encodeURI(`/api/disease/category?categoryName=${category}`)  
            this.diseases = await (await fetch(url)).json()
            console.log(this.diseases)

            /* mock */
            if (this.mock) {
                this.diseases = [{ diseaseName: 'A1' }, { diseaseName: 'A2' }, { diseaseName: 'A3' }, { diseaseName: 'B1' }, { diseaseName: 'B2' },
                { diseaseName: 'C1' }, { diseaseName: 'D1' }, { diseaseName: 'D2' }, { diseaseName: 'D3' }]
                this.diseases = this.diseases.filter((d) => d.charAt(0) == category)
            }
        },
        getQuestionInfo() {
            this.question.userId = this.userId
        },
        async postQuestion() {//POST
            /*todo:HTTP POST Test*/
            //是不是应该给我返回questionId
            const url = `${API_URL}/question`
            this.getQuestionInfo()
            let result = await fetch(url, {
                method: 'post',
                body: JSON.stringify(this.question),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("POST, question:", this.question)
            console.log("POST result:", result)

            /* showTest=true，默认HTTP请求都成功了 */
            // if (this.showTest || result.ok) {
            if (result.ok) {
                this.$toast.success(`提交成功，问题ID: ${this.getQuestionId(await result.json())}`, {
                    duration: 4000,
                    // position:"bottom"
                })
                this.$router.push('/my-questions')
            } else {
                this.$toast.error("提交失败", {
                    duration: 4000,
                    // position:"bottom"
                })
            }
        },
        getQuestionId(result) {
            //todo：需要修改
            if (!this.mock) {
                return result.id
            } else {
                return "Q01_test"
            }
        },
        getUserInfo() {
            if (this.showTest) {
                this.userId = "testUser"
            } else {
                this.userId = localStorage.getItem("Email")
            }
        },
        goBack() {
            this.$router.go(-1)
        }
    }
    ,
    watch: {
        picked() {
            if (this.picked == 'text') {
                this.long = false
                this.question.answer = []
                this.question.options = []
                this.question.type = 'short'
            } else {
                this.question.answer = ''
                this.multiple = false
                this.question.type = 'single'
            }
        },
        multiple() {
            // this.question.answer = this.multiple ? [this.question.answer] : this.question.answer[0] //这个radio为空的时候，会产生[[]]
            this.question.answer = this.multiple ?
                (this.question.answer ? [this.question.answer] : [])
                : this.question.answer.length ? this.question.answer[0] : ''

            if (this.multiple) {
                this.question.type = 'multiple'
            } else {
                this.question.type = 'single'
            }
        },
        long() {
            if (this.long) {
                this.question.answer = ''
                this.question.type = 'long'
            } else {
                this.question.answer = []
                this.question.type = 'short'
            }
        },
    },
    created() {
        this.getUserInfo()
        this.fetchCategories()
    }
};
</script>