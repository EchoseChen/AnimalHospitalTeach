<template>
   
    <div class="card mb-1 me-3 ms-3">
        <div class="row align-items-center p-2">
            <div class="col-1 mt-1 ms-1">
                <argon-avatar img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F19%2F20210719150601_4401e.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684520357&t=e9ac7dd37b1764a81dd13553fa32dec2" alt="Avatar" size="md" circular />
            </div>
            <div class="col ps-4">
                <h6>{{ student.username }}</h6>
                <div class="col">
                    <argon-badge v-if="student.exam.status=='done'" color='success me-1' size="sm" variant='gradient'>已完成</argon-badge>
                    <argon-badge v-if="student.exam.status=='todo'" color='warning me-1' size="sm" variant='gradient'>待审核</argon-badge>
                    <argon-badge v-if="student.exam.status=='undo'" color='danger me-1' size="sm" variant='gradient'>未完成</argon-badge>
                    <argon-badge v-if="student.exam.score" color='success me-1' size="sm" variant='gradient'>{{ student.exam.score }}分</argon-badge>
                    <argon-badge v-if="student.exam.finish" color='success me-1' size="sm" variant='gradient'>{{ student.exam.finish.date }} {{ student.exam.finish.time }} FINISHED</argon-badge>
                </div>
            </div>
            <div class="col-7 text-end">
                <argon-button class="me-4" @click="watchExam" color='info' variant="gradient" size="sm">批改</argon-button>
                <argon-button class="me-4" @click="watchResult" color='primary' variant="gradient"  size="sm">查看</argon-button>
            </div>
        </div>
    </div>
</template>



<script>
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonAvatar from "@/components/ArgonAvatar.vue";

export default {
    data() {
        return {
            student:{
                userId:'s01',
                username:'Sam',
                exam:{
                    status:'done',
                    score:98,
                    finish:{
                        date:"2023-03-01",
                        time:'20:22:20'
                    }
                }
            },
            showTest: false, //用来看Test结果的，正式发布的时候设置为false
        }
    },
    components: {
        ArgonBadge,
        ArgonButton,
        ArgonAvatar,
    },
    methods:{
        watchExam(){

        },
        watchResult(){

        }
    }
};

</script>