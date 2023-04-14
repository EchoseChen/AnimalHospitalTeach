<template>
    <div>
        <h5>新增题目</h5>
        <div>
            <select @change="fetchDiseases(question.category)" v-model="question.category">
                <option disabled value="">选择病种</option>
                <option v-for="c of categories" :key="c.key">{{ c }}</option>
            </select>
            <select v-model="question.disease">
                <option disabled value="">选择病名</option>
                <option v-for="d of diseases" :key="d.key">{{ d }}</option>
            </select>
            <span v-if="showTest">{{ question.category }},{{ question.disease }}</span>
        </div>
        <div>
            <input type="radio" id="1" value="select" v-model="picked">
            <label for="1">选择</label>
            <input type="radio" id="2" value="text" v-model="picked">
            <label for="2">填空</label>
            <span v-if="showTest">Picked: {{ picked }}</span>
        </div>
        <div v-if="picked == 'select'">
            <div>
                <input type="checkbox" id="multiple" v-model="multiple">
                <label for="multiple">多选题</label>
                <span v-if="showTest">{{ multiple }}</span>
            </div>
            <div>
                <input v-model="question.stem" placeholder="问题">
                <div>
                    <div v-for="item of question.options" :key="item.id">
                        <input v-if="multiple" type="checkbox" :value="item.id" v-model="question.answer">
                        <input v-else type="radio" :value="item.id" v-model="question.answer">
                        <input v-model="item.content" placeholder="选项">
                        <br>
                    </div>
                </div>
                <button @click="newOption">+</button>
            </div>
        </div>
        <div v-else>
            <div>
                <input type="checkbox" id="long" v-model="long">
                <label for="long">长答案</label>
                <span v-if="showTest">{{ long }}</span>
            </div>
            <div>
                <input v-model="question.stem" placeholder="问题">
                <div v-if="!long">
                    <input placeholder="请输入你的答案" disabled><br>
                    <!-- <input v-for="num of answerNum" :key="num.key" v-model="question.answer[num]"> -->
                    <input v-for="(item,index) in question.answer" :key="index" v-model="question.answer[index]">
                    <button @click="newAnswer">+ 正确答案</button>
                   
                </div>
                <div v-else>
                    <textarea placeholder="请输入你的答案" disabled></textarea>
                </div>
            </div>
        </div>
        <div>
            <textarea v-model="question.analysis" placeholder="解析"></textarea>
            <pre v-if="showTest">{{ question }}</pre>
        </div>
        <div>
            <button @click="postQuestion">提交</button>
        </div>
    </div>
    <div>
        <argon-alert v-if="showAlert" color="success" icon="ni ni-like-2 ni-lg">
            <strong>成功!</strong> 您的信息已提交！
        </argon-alert>
    </div>
</template>
   
<script>
import ArgonAlert from "@/components/ArgonAlert.vue";

// const API_URL = `/api/`

export default {
    data() {
        return {
            categories: [],
            diseases: [],
            picked: 'select',
            multiple: false,
            long: false,
            // answerNum:[],//填空题修改答案用的
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
            showAlert: false,
            showTest: true, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonAlert,
    },
    methods: {
        newOption() {
            let num = this.question.options.length
            this.question.options.push({ id: num + 1, content: '' })
        },
        newAnswer() {
            // this.answerNum.push(this.answerNum.length)
            this.question.answer.push('')
        },
        /*changeInput() {//结合@input使用
            this.question.answer = []
            //最开始需要这个函数的原因是因为，正确答案存的是选项的值，因此需要不断修改
            //但实际上答案只存选项id，因此就不需要监听input是否修改了
        },*/
        async fetchCategories() {//GET
            /* todo:change */
            // const url = `${API_URL}/`
            // this.categories = await (await fetch(url)).json()
            // console.log(this.categories)

            /* moc k*/
            this.categories = ['A', 'B', 'C', 'D']
        },
        async fetchDiseases(category) {//GET
            /*todo:change*/
            // const url = `${API_URL}/${category}`
            // this.diseases = await (await fetch(url)).json()
            // console.log(this.diseases)

            /* mock */
            this.diseases = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'D1', 'D2', 'D3']
            this.diseases = this.diseases.filter((d) => d.charAt(0) == category)
        },
        async postQuestion() {//POST
             /*todo:change*/
            // const url = `${API_URL}question`
            // let result = await fetch(url, {
            //     method: 'post',
            //     body: JSON.stringify(this.question),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // console.log(this.question)
            // console.log(result)

            /* mock */
            this.showAlert = true
        }
    },
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
            
                if(this.multiple){
                    this.question.type = 'multiple'
                }else{
                    this.question.type = 'single'
                }
        },
        long(){
            if(this.long){
                this.question.answer = ''
                this.question.type = 'long'
            }else{
                this.question.answer = []
                this.question.type = 'short'
            }
        }
    },
    created() {
        this.fetchCategories()
    }
};
</script>