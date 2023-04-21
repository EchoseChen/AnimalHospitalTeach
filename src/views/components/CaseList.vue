<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>病例搜索结果</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table mb-0">
            <thead>
              <tr>
                <th class="text-uppercase  text-s font-weight-bolder opacity-7">病例ID</th>
                <th
                  class="text-uppercase text-s font-weight-bolder opacity-7 "
                >病例名</th>
                <th
                  class=" text-uppercase text-s font-weight-bolder opacity-7"
                >病名</th>
                <th
                  class="text-uppercase text-s font-weight-bolder opacity-7"
                >病种名</th>
                <th class="text-uppercase text-s font-weight-bolder opacity-7">病例详情</th>
        
              </tr>
              
            </thead>
              <tbody>
              <tr v-for = "item in cases" :key="item.caseId">
                <td>
                    <p class="text-s font-weight-bold mb-0 "> {{ item.caseId }}</p>
                </td>
                <td>
                    <p class="text-s font-weight-bold mb-0">{{ item.caseName }}</p>
                </td>
                <td>
                    <p class="text-s font-weight-bold mb-0">{{ item.diseaseName }}</p>
                </td>
                <td>
                    <p class="text-s font-weight-bold mb-0">{{ item.categoryName }}</p>
                </td>
                <td>
                    <button class="btn btn-success">
                        <router-link :to="`/case?caseName=${item.caseName}`">详情页面</router-link></button>
                </td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
export default{
    name:"CaseList",
    data(){
        return{
            cases:[],
            diseaseName:this.$route.query.diseaseName,
        };
        },
    methods:{
            getCaseList(){
                this.$axios.get('api/case/disease', {
                params: {
                    diseaseName: this.diseaseName,
                }
            }).
            then((res)=>{
                if(res.status==200)
                {
                    this.cases=res.data;
                    console.log(this.cases.caseId);
                    console.log(this.diseaseName);
                }
            }).catch(err=>{
                console.log(err);
            });
    },
   
   
            
    },
    mounted(){
                this.getCaseList();
            }
}


</script>