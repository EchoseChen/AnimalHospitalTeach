<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="btn-group ">
            <button @click="gotocos" class="btn btn-success">返回</button>
            <button @click="gotoqiantai" class="btn btn-success">前台模式</button>
            <button @click="gotoyizhu" class="btn btn-success">医助模式</button>
            
        </div>
          <div class="row">
            <div class="col-lg-4 mb-lg">
              <!-- line chart -->
              <div class="card z-index-2">
                <h4 class="mt-2 text-center">手术无菌要求</h4>
                <dl class="mt-1 mx-auto" style="width: 300px;">
                    <dt>无菌手套</dt>
                    <dd><small>- 任何一种洗手方法，都不能完全消灭皮肤深处的细菌，这些细菌在手术过程中逐渐移行到皮肤表面并迅速繁殖生长，故洗手之后必须穿上无菌手术衣，戴上无菌手套，方可进行手术。</small></dd>
                    <dt>无菌器械</dt>
                    <dd><small>- 一次性无菌医疗器械涵盖卫生材料、一次性医用手套、一次性输液器/输血器、医用纺织品、外科手术用器械、一次性导管（如导尿管、引流管等）、心内科手术用器械、血管手术器械、产科器械、麻醉器械、吸氧面罩等上千个品种。</small></dd>
                    <dt>无菌技术</dt>
                    <dd><small>- 无菌技术是通过清洁、消毒和灭菌等综合技术与措施，使手术环境、手术区域或局部操作部位的病原微生物尽量减少，以及所用的器械达到无菌，最大限度防止发生污染及感染。</small></dd>
                    
                </dl>     
               
              </div>
            </div>
            <div class="col-lg-8">
              <ysLunbo1 />
            </div>
          </div>
        
          <div class="row mt-4">
            <div class="col-lg-8">
              <ysLunbo2 />
            </div>
            <div class="col-lg-4 mb-lg">
              <!-- line chart -->
              <div class="card z-index-2" >
                <h4 class="mt-2 text-center">手术流程</h4>
                <dl class="mt-1 mx-auto" style="width: 300px;">
                    <dt>切开组织和止血</dt>
                    <dd><small>- 切开组织后，动物体内组织暴漏出来，进行手术的部位也自然形成。虽然不同的组织采用不同的切割方法，将要进行的手术部位显露出来。而切割时要注意要在同意切口垂直进行模拟一次切割，也就是不能在一个切口上出现多个切伤。有助于术后的缝合，还可以避免切伤血管造成大出血。</small></dd>
                    <dt>手术中的关键步骤</dt>
                    <dd><small>- 止血的完善程度不仅关系着整个手术的操作过程和效率还关系.术后的恢复。手术过程中止血一般三个要点、牢。压迫止血法，最基本的止血方法;钳压止血法.前面提到使用止血钳的止血法;接扎止血法.使用止血
钳钳住血管断裂口用丝线进行缝合。</small></dd>
                    <dt>手术情况控制</dt>
                    <dd><small>- 手术出现大意外事故时，手术人员第一选择应该是尽全力保全动物的生命安全。意外事故发生时，手术人员还应及时与动物主人进行交流，不可甩自决定继续成是停止。</small></dd>
                    
                </dl>     
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>

  
  import ysLunbo1 from "./components/ysLunbo1.vue";
  import ysLunbo2 from "./components/ysLunbo2.vue";
  
  export default {
    name: "yishi",
    methods:{
        gotocos(){
            this.$router.replace('/Cosplay')
        },
        gotoyizhu(){
            this.$router.replace('/yizhu')
        },
        gotoqiantai(){
            this.$router.replace('/qiantai')
        }
    },
    components: {
      ysLunbo1,
      ysLunbo2,
     
    },
  };
  </script>
  
  