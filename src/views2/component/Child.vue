<template>
    <div class="card" @click="changeHidden">
        <!-- <h6>{{ msg }}</h6> -->
        <p> name is : {{ stu.name }}, age is {{ stu.age }}</p>
        <button @click="growOld">提交</button>
        <!-- <input v-model="stu.text"> -->
    </div>
    <pre>{{ stu }}</pre>
    <div v-if="!hidden">
        <p> Hidden </p>
    </div>
</template>

<script>

export default {
    name: 'child',
    data() {
        return {
            msg: "Hello",
            // stu: {
            //     name: 'sam',
            //     age: 15,
            //     text: ''
            // },
            hidden:true
        }
    },
    props:{
        // msg:String,
        stu:{
            type: Object,
            required:true,
            // default: function(){
            //     return {name:'Sam', age:15, text:''}
            // }
        }
    },
    methods: {
        growOld() {
            // this.data.age += 1

            // this.$parent.data.age+=1
            // pData.age+=1
        },
        changeHidden(){
            // this.hidden = !this.hidden
        }
    },
    injects: ['pData']
}
</script>