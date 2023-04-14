<template>
    <div class="card m-3">
        <div class="row align-items-center pe-3 ps-3">
            <div class="col-6 text-lg">
                <argon-badge class="me-3" size="md" color="info" variant="gradient">我的试卷</argon-badge>
            </div>
            <div class="col-6 p-3 text-end">
                <argon-button v-if="forCheck" @click="checkPaper" color="info" variant="gradient" size="sm"
                    class="me-4">确认</argon-button>
                <argon-button @click="newPaper" color="primary" variant="gradient" size="sm" class="">新增</argon-button>
            </div>
        </div>
    </div>
    <div v-for="(paper, index) in papers" :key="index" class="d-flex flex-column">
        <div class="card mb-2 me-3 ms-3">
            <div class="row align-items-center p-2">
                <div v-if="forCheck" class="col-1 text-center">
                    <input type="checkbox" id="check" v-model="paper.checked">
                    <label v-if="showTest" for="check">选择 {{ paper.checked }}</label>
                </div>
                <div class="col-1 text-center">
                    <img class="icon icon-md " src="https://img.icons8.com/ios/512/signing-a-document.png">
                </div>
                <div class="col ps-4">
                    <h6>{{ paper.name }}</h6>
                    <div class="col">
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ paper.id }}</argon-badge>
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ paper.num }}道题</argon-badge>
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ paper.time.hours }} 小时 {{ paper.time.mins }} 分钟</argon-badge>
                        <argon-badge color='success me-1' size="sm" variant='gradient'>{{ paper.permission }}</argon-badge>
                    </div>
                </div>
                <div class="col-7 text-end">
                    <argon-button class="me-4" @click="myWatch(index)" color='success' variant="gradient"
                        size="sm">查看</argon-button>
                    <argon-button class="me-4" @click="myEdit(index)" color='warning' variant="gradient"
                        size="sm">修改</argon-button>
                    <argon-button class="me-4" @click="checkDelete(index)" color='danger' variant="gradient"
                        size="sm">删除</argon-button>
                </div>
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
                        <div class="col-6 text-center">
                            <argon-badge variant="gradient">试卷ID:  {{ this.papers[toDeleteIndex].id }}</argon-badge>
                        </div>
                    </div>
                </template>
                <template #body>
                    <span class="font-weight-bold">你确定要删除吗</span>
                </template>
                <template #footer>
                    <div class="row">
                        <div class="col-6 text-center">
                            <argon-button @click="myDelete" color="danger"
                                variant="gradient">确定</argon-button>
                        </div>
                        <div class="col-6 text-center">
                            <argon-button @click="cancelDelete" color="info" variant="gradient">取消</argon-button>
                        </div>
                    </div>
                </template>
            </modal>
        </Teleport>
    </div>
    <!-- <div class="mt-1">
        <argon-alert @click="closeAlert" v-if="showAlert == 1" color="success" icon="ni ni-like-2 ni-lg">
            <strong>成功!</strong>
        </argon-alert>
        <argon-alert @click="closeAlert" v-if="showAlert == -1" color="danger">
            <strong>失败!</strong> 重新试一下！
        </argon-alert>
    </div> -->
</template>
    
<script>
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
// import ArgonAlert from "@/components/ArgonAlert.vue";
import Modal from "@/components/Modal.vue";

const API_URL = `/api/paper`

export default {
    data() {
        return {
            toDeleteIndex: -1,
            showModal: false,//模态框
            // showAlert: 0,
            paper: {
                id: 'e1',
                name: '数学试卷',
                num: 4,
                permission: 'public',
                checked: false
            },
            papers: [
                {
                    id: 'p1',
                    name: '数学试卷',
                    num: 3,//可能要改
                    permission: 'public',
                    time: {
                        hours:2,
                        mins:30
                    },
                    checked: false,
                },
                {
                    id: 'p2',
                    name: '语文试卷',
                    num: 5,//可能要改
                    permission: 'public',
                    time:{
                        hours:1,
                        mins:30,
                    },
                    checked: false,
                },
                {
                    id: 'p3',
                    name: '英语试卷',
                    num: 7,//可能要改
                    permission: 'public',
                    time: {
                        hours:3,
                        mins:2,
                    },
                    checked: false,
                }
            ],
            forCheck: false,//选试卷用的
            showTest: false, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonButton,
        ArgonBadge,
        // ArgonAlert,
        Modal
    },
    methods: {
        newPaper() {
            //to check
            this.$router.push('/new-paper')
        },
        myWatch(index) {
            //todo: 跳转到试卷详细信息页
            this.$router.push({name:'Paper',params:{id:this.papers[index].id}})
        },
        async myDelete() {
            //todo:HTTP Delete Test
            this.showModal = false
            let p = this.papers[this.toDeleteIndex]
            const url = `${API_URL}?paperId=${p.id}`
            console.log(p)
            let result = await fetch(url, {
                method: 'delete',
            })
            console.log(result)
            if (this.showTest || result.ok) { //showTest状态默认都是成功的
                // this.showAlert = 1
                this.$toast.success(`${p.id}删除成功`,{
                    duration:4000,
                    // position:"top",
                })
            } else {
                // this.showAlert = -1
                this.$toast.warning("删除失败，请重试",{
                    duration:4000,
                    // position:"top",
                })
            }
            this.toDeleteIndex = null
        },
        myEdit(index) {
            //todo：跳转到试卷信息修改页
            this.$router.push({name:'EditPaper',params:{id:this.papers[index].id}})
        },
        checkPaper() {
            //todo: 选择paper

        },
        checkDelete(index) {
            this.showModal = true
            this.toDeleteIndex = index
        },
        cancelDelete() {
            this.showModal = false
            this.toDeleteIndex = null
        },
        // closeAlert() {
        //     this.showAlert = 0
        // },
    }
}
</script>