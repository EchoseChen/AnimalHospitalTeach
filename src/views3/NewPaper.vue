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
                    <div v-for="(question, index) in paper.questions" :key="index">
                        <pre>{{ question }}</pre>
                    </div>
                    <argon-button @click="addQuestion" class="col-12" color="info" variant="gradient">新增问题</argon-button>
                </div>
                <div class="mt-3">
                    <argon-button @click="postPaper" class="col-12" color="success" variant="gradient">提交</argon-button>
                </div>
            </div>
        </div>
        <div class="col-1"></div>

    </div>
    <div>
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
            hours: [],
            mins: [],
            paper: {
                name: '',
                time: {
                    hours: null,
                    mins: null,
                },
                permission: '',
                userId: '',
                questions: [{
                    id: '',
                    score: null
                }]
            },
            showTest: true,//打印测试信息
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,

    },
    methods: {
        selectQuestion() {

        },
        async postPaper() {
            /*todo:HTTP POST Test*/
            //是不是应该给我返回paperId
            const url = `${API_URL}`
            let result = await fetch(url, {
                method: 'post',
                body: JSON.stringify(this.paper),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(this.paper)
            console.log(result)

            /* showTest=true，默认HTTP请求都成功了 */
            if (this.showTest || result.ok) {
                this.$toast.success(`提交成功，试卷ID: ${this.getPaperId(result)}`, {
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
        addQuestion() {//新增试题
            //选择题目
            //设置分数
            //本地记录
        },
        init() {
            for (let i = 0; i < 24; i++) {
                this.hours.push(i)
            }
            for (let i = 0; i < 60; i++) {
                this.mins.push(i)
            }
        },
        getPaperId(result) {
            //todo：需要修改
            if (result.ok) {
                return result.json().id
            } else {
                return "Q01_test"
            }
        }
    },
    mounted() {
        this.init()
    }
}

</script>