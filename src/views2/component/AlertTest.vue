<template>
    <div>
        <h5>Alert</h5>
        <argon-alert color="dark" icon="ni ni-like-2 ni-lg">
            <strong>Success!</strong> This is an alert with Icon!
        </argon-alert>
    </div>

    <div>
        <h5>Avatar</h5>
        <!--图片相对路径用不了-->
        <argon-avatar
            img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F008c8ca0-a09a-4a73-a9e1-c8ea683d4e31%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683222349&t=8ff0c614f9000898281e3790245c06bd"
            size="sm" alt="Avatar" border-radius="sm" />
        <argon-avatar img="https://img.icons8.com/material-outlined/512/test-passed.png" size="sm" alt="Avatar"
            border-radius="sm" />
        <argon-avatar img="@/assets/img/icons/exam/exam.png" size="sm" alt="Avatar" border-radius="sm" />

        <img src="../exam.png" />
    </div>

    <div>
        <h5>Badge</h5>
        <argon-badge color='danger' size="lg" variant='gradient'>Badge</argon-badge>
    </div>

    <div>
        <h5>Button</h5>
        <argon-button @click="count" color='success' variant="gradient" size="sm">count is: {{ num }}</argon-button>
        <argon-button @click="jump" color='warning' variant="gradient" size="sm">jump</argon-button>
        <argon-button @click="alert" color='info' variant="gradient" size="sm">alert</argon-button>
        <div class="alert" v-if="show" @click="alert">
            <argon-alert color="success" icon="ni ni-like-2 ni-lg">
                <strong>Success!</strong> This is an alert with Icon!
            </argon-alert>
        </div>
    </div>

    <div>
        <h5>Input</h5>
        <!--argon系列用不了-->
        <argon-input placeholder="Type here..." icon="ni ni-check-bold" iconDir="right" />
        <p>{{ }}</p>
        <div>
            <h6>Text</h6>
            <input v-model="text" placeholder="Type here"> {{ text }}
            <input value="123" readonly>
            <input value="123" disabled>
        </div>
        <div>
            <h6>Search</h6>
            <input type="search" v-model="search" placeholder="Type here"> {{ search }}
        </div>
        <div>
            <h6>date</h6>
            <input type="date" v-model="date" placeholder="Type here">{{ date }}
        </div>
        <div>
            <h6>time</h6>
            <input type="time" v-model="time" placeholder="Type here"> {{ time }}
        </div>

        <div>
            <h6>Checkbox</h6>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">Checked: {{ checked }}</label>
        </div>
        <div>
            <h6>Multi Checkbox</h6>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <p>Checked names:
            <pre>{{ checkedNames }}</pre>
            </p>
        </div>
        <div>
            <h6>Radio</h6>
            <input type="radio" id="1" value="One" v-model="picked">
            <label for="1">One</label>
            <br>
            <input type="radio" id="2" value="Two" v-model="picked">
            <label for="2">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>
        <div>
            <h6>Select</h6>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        <div>
            <h6>Multi Select</h6>
            <select v-model="multiSelected" multiple style="width:100px">
                <option>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <span>Selected: {{ multiSelected }}</span>
        </div>
        <div>
            <h6>Demo</h6>
            <input type="checkbox" id="multiple" v-model="multiple">
            <label for="multiple">多选题： {{ multiple }}</label>
            <br>
            <!-- <div v-if="multiple">
                <input type="checkbox" :value="cb1" v-model="result">
                <input v-model="cb1">
                <br>
                <input type="checkbox" :value="cb2" v-model="result">
                <input v-model="cb2">

            </div>
            <div v-else>
                <input type="radio" :value="cb1" v-model="result">
                <input v-model="cb1">
                <br>
                <input type="radio" :value="cb2" v-model="result">
                <input v-model="cb2">
            </div> -->

            <div>
                <input v-if="multiple" type="checkbox" :value="cb1" v-model="result">
                <input v-else type="radio" :value="cb1" v-model="result">
                <input v-model="cb1">
                <br>
                <input v-if="multiple" type="checkbox" :value="cb2" v-model="result">
                <input v-else type="radio" :value="cb2" v-model="result">
                <input v-model="cb2">
                <br>
            </div>
            <pre>{{ result }}</pre>
        </div>
        <div>
            <h5>Demo2</h5>
            <input type="checkbox" id="multiple" v-model="multiple">
            <label for="multiple">多选题： {{ multiple }}</label>
            <br>
            <div>
                <div>
                    <input v-if="multiple" type="checkbox" :value="cb1" v-model="result">
                    <input v-else type="radio" :value="cb1" v-model="result">
                    <input v-model="cb1">
                    <br>
                </div>
            </div>
            <button @click="increment">+</button>

        </div>
    </div>
</template>
   
<script>
import ArgonAlert from "@/components/ArgonAlert.vue";
import ArgonAvatar from "@/components/ArgonAvatar.vue";
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonInput from "@/components/ArgonInput.vue";

export default {
    data() {
        return {
            num: 0,
            times: 0,
            show: false,
            input: '',
            search: '',
            date: '',
            time: '',
            text: '',
            checked: true,
            checkedNames: ['Jack'],
            box: [],
            cb1: '',
            cb2: '',
            picked: [],
            selected: '',
            multiSelected: [],
            multiple: false,
            result: [],
            item: 1,
            question:{
                stem:'',
                options:[{
                    id:'',
                    content:''
                }],
                answer:[],
                type:'',
                category:'',
                disease:'',
                analysis:''
            }
        }
    },
    components: {
        ArgonAlert,
        ArgonAvatar,
        ArgonBadge,
        ArgonButton,
        ArgonInput,
    },
    methods: {
        count() {
            this.num++
        },
        jump() {
            //跳转到上一次浏览的页面
            // this.$router.go(-1)
            // //指定跳转的地址；替换当前页面（新页面无法返回当前页面）
            // this.$router.replace('/tables')
            //通过push进行跳转;进入下一个页面（新页面可以返回当前页面）
            this.$router.push('/tables')
        },
        alert() {
            this.show = !this.show
        },
        increment(){
            this.item++
        }
    },
    watch: {
        input() {
            console.log(this.input)
        },
        cb1() {
            this.result = []
        },
        cb2() {
            this.result = []
        },
        multiple() {
            this.result = this.multiple ? [this.result] : this.result[0]
        }
    }
};
</script>

<style>
.icon {
    height: 10%;
    width: 10%;
}
</style>