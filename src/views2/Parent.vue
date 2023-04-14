<template>
    <!-- <child :msg="myMsg" :data="myData.data"></child> -->
    <!-- <child></child> -->
    <div v-for="(item,index) in students" :key="index">
        <child :stu="item"></child>
        <!-- <pre>{{ item }},{{ index }}</pre> -->
    </div>

    <div v-for="(q,idx) in questions" :key="idx">
        <question-act-card :question = "q" ></question-act-card>
    </div>
    <question-act-card :question="question"></question-act-card>

</template>

<script>
import Child from "./component/Child"
import QuestionActCard from "../views3/component/QuestionActCard.vue"

export default {
    components: {
        Child,
        QuestionActCard
    },
    data() {
        return {
            myMsg: "Hello from Parent",
            // myData: {
            //     id: 1,
            //     data: {
            //         name: 'Sam',
            //         age: 15
            //     }
            // }
            students:[
                {
                    name:'Same',
                    age:16,
                    text:''
                },
                {
                    name:'Lucy',
                    age:15,
                    text:'haha'
                }
            ],
            questions:[],
            question:{}
        }
    },
    provide(){
        return{
            pData:this.myData
        }
    },
    methods:{
        init(){
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
            this.question = this.questions[0]
        }
    }
}
</script>