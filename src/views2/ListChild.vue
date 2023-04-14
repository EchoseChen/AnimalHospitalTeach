<template>
    <div v-for="(s, index) in students" :key="index">
        <div class="card" @click="changeHidden(index)">
            <p> name is : {{ s.name }}, age is {{ s.age }}</p>
            <button @click="growOld(index)">提交</button>
            <input v-model="s.text">
        </div>
        <pre>{{ s }},{{ ops[index] }}</pre>
        <!-- <div v-if="!students[index].hidden">
            <p> Hidden </p>
        </div> -->
        <div v-if="ops[index].hidden">
            <p> Hidden </p>
        </div>
    </div>
    <pre>{{ ops }}</pre>
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
            // hidden:true,
            students: [
                {
                    name: 'Same',
                    age: 16,
                    text: '',
                },
                {
                    name: 'Lucy',
                    age: 15,
                    text: 'haha',
                }
            ],
            ops:[{
                hidden:true
            }],
            op:{
                hidden:true
            }

        }
    },
    methods: {
        growOld(index) {
            this.students[index].age += 1
            // this.data.age += 1


            // this.$parent.data.age+=1
            // pData.age+=1
        },
        changeHidden(index) {
            // this.students[index].hidden = !this.students[index].hidden
            // this.hiddens[index] = !this.hiddens[index]
            this.ops[index].hidden = !this.ops[index].hidden
        },
        init() {
            for (var i = 0; i < this.students.length; i++) {
                // this.hiddens.push(true)
                this.ops.push(this.ops[0])//为啥就跑不了呢
            }
        }
    }, mounted() {
        this.init()
    }
}
</script>