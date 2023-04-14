<template>
    <!-- <child :msg="myMsg" :data="myData.data"></child> -->
    <!-- <child></child> -->
    <div v-for="(item,index) in students" :key="index">
        <child :stu="item"></child>
        <!-- <pre>{{ item }},{{ index }}</pre> -->
    </div>
</template>

<script>
import Child from "./component/Child"

export default {
    components: {
        Child
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
            ]
        }
    },
    provide(){
        return{
            pData:this.myData
        }
    }
}
</script>