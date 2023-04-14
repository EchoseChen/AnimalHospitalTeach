
<template>
    <div class="container">
        <div class="row" v-for="user of users" :key="user.key">
            <p>{{ user.userId }}</p>
            <pre> {{ user }} </pre>
        </div>
    </div>
    <div>
        <pre>
                                        {{ data }}
                                    </pre>
        <argon-alert v-if="status == 2" color="danger"> <strong>Failed!</strong> Try again！</argon-alert>
        <argon-alert v-if="status == 1" color="success"> <strong>Success!</strong> This is an alert with Icon!</argon-alert>
    </div>
</template>
    
<script>
import ArgonAlert from "@/components/ArgonAlert.vue";

//const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const API_URL = `/api/user`

export default {
    components: {
        ArgonAlert
    },
    data() {
        return {
            id: 1,
            users: null,
            // user: null,
            newUser: {
                userId: 's04',
                username: 'Lucy',
                password: '1234',
                identity: 'student'
            },
            // result:'',
            data: '',
            status: 0
        }
    },
    methods: {
        async fetchUsers() {//GET
            const url = `${API_URL}/`
            this.users = await (await fetch(url)).json()
            console.log(this.users)
        },
        async fetchGetTest() {
            const url = `/baidu`

            // let result = await fetch(url)
            // console.log(result)
            // if(result.ok){
            //     this.status = 1
            //     // this.data = result.json()
            // }else{
            //     this.status = 2
            // }

            // this.json = this.result.json()
            // console.log(this.result)
            // console.log(this.result.status)


            try {
                this.json = await (await fetch(url)).json()
                // this.json = await fetch(url)
                this.status = 1
            } catch (e) {
                console.log(e)
                this.status = 2
            }
        }
        //   ,async fetchUser() {
        //     const url = `${API_URL}?id=${this.id}`
        //     console.log(url)
        //     this.user = await (await fetch(url,{method:'get'})).json()
        //   }
        , async postUser(user) {//POST
            const url = `${API_URL}`
            let result = await fetch(url, {
                method: 'post',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(user)
            console.log(result)
        },
        async putUser(user) {//PUT(没测试)
            const url = `${API_URL}?userId=${user.id}`
            let result = await fetch(url, {
                method: 'put',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(user)
            console.log(result)
        },
        async judgeUser() {//POST
            const url = `/app/user/judge`
            let result = await fetch(url, {
                // method:'get',
                method: 'post',
                body: JSON.stringify({
                    userId: 's123',
                    password: '22222'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(result)
        },
    },
    created() {
        // this.fetchUsers()
        // this.postUser(this.newUser)
        //   this.fetchUser()
        // this.fetchGetTest()


    },
    mounted() {
        // this.judgeUser()

    }

};
</script>
  
    