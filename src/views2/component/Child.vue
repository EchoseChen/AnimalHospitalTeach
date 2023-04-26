<template>
    <!-- <div class="card" @click="changeHidden">
        <p> name is : {{ stu.name }}, age is {{ stu.age }}</p>
        <button @click="growOld">提交</button>
    </div>
    <pre>{{ stu }}</pre>
    <div v-if="!hidden">
        <p> Hidden </p>
    </div> -->
    <pre>
            {{ now }}
        </pre>
</template>

<script>

export default {
    name: 'child',
    data() {
        return {
            now: {
                date: '',
                time: ''
            },
            msg: "Hello",
            // stu: {
            //     name: 'sam',
            //     age: 15,
            //     text: ''
            // },
            hidden: true
        }
    },
    props: {
        // msg:String,
        stu: {
            type: Object,
            required: true,
            // default: function(){
            //     return {name:'Sam', age:15, text:''}
            // }
        }
    },
    methods: {
        getNowDateTime() {
            // let date = new Date()
            this.now = this.timeFormate(new Date()).split(" ")

            // this.now.time = date.getTime()
            //  vue 页面，不需要引入，直接使用
            // this.dateTypeFormat('YYYY-mm-dd HH:MM:SS', new Date())


        },
        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
            let day = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
            let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
            let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
            let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
            return year + "-" + month + "-" + day + " "+ hh + ":" + mm + ':' + ss;
        },
        growOld() {
            // this.data.age += 1

            // this.$parent.data.age+=1
            // pData.age+=1
        },
        changeHidden() {
            // this.hidden = !this.hidden
        }
    },
    created() {
        this.getNowDateTime()
    },
    injects: ['pData']
}
</script>