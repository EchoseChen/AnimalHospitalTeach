<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="btn-group ">
            <button @click="gotocos" class="btn btn-success">返回</button>
            <button @click="gotoqiantai" class="btn btn-success">前台模式</button>
            <button @click="gotoyishi" class="btn btn-success">医师模式</button>
        </div>
          <div class="row">
            <div class="col-lg-3 mb-lg">
              <!-- line chart -->
              <div class="card z-index-2">
                <h4 class="mt-2 text-center">注射工作</h4>
                <dl class="mt-1 mx-auto" style="width: 200px;">
                    <dt>静脉注射</dt>
                    <dd><small>- 静脉注射是一种把血液、药液、营养液等液体物质直接注射到静脉中的医疗方法。</small></dd>
                    <dt>肌内注射</dt>
                    <dd><small>- 肌内注射法是将药液注入肌肉组织的方法。</small></dd>
                    <dt>皮下注射</dt>
                    <dd><small>- 皮下注射指将药液注入皮下组织。常用注射部位为上臂及股外侧。</small></dd>
                    <dt>皮内注射</dt>
                    <dd><small>- 皮内注射  
指将药液注入皮肤的表皮之间与真皮之间。</small></dd>
                </dl>     
               
              </div>
            </div>
            <div class="col-lg-9">
              <yzLunbo1 />
            </div>
          </div>
        
          <div class="row mt-4">
            <div class="col-lg-7">
              <yzLunbo2 />
            </div>
            <div class="col-lg-5 mb-lg">
              <!-- line chart -->
              <div class="card z-index-2" >
                <h4 class="mt-2 text-center">宠物麻醉</h4>
                <dl class="mt-1 mx-auto" style="width: 400px;">
                    <dt>麻醉前评估</dt>
                    <dd><small>- 完善的麻醉前评估能够帮助兽医发现潜在的健康问题，了解动物的状态</small></dd>
                    <dt>麻醉前用药</dt>
                    <dd><small>- 麻醉前给药主要目的在于减轻动物的恐惧和不安，减少唾液分泌和支气管分泌物，保障动物通气通畅，减少胃肠蠕动，防止呕吐，同时能减少诱导麻醉剂与吸入麻醉剂的用量，降低潜在危险性，减少疼痛等。</small></dd>
                    <dt>麻醉诱导</dt>
                    <dd><small>- 麻醉诱导是指在药物的作用下，机体的全身或局部的感觉可逆性的抑制，以达到可进行手术状态的过程。</small></dd>
                    <dt>麻醉维持</dt>
                    <dd><small>- 对于15min-1h的中程手术，采用吸入麻醉来维持可能是最方便最可控的。对于超过1小时的长时间手术，首选吸入麻醉，动物从七氟烷和异氟烷麻醉中苏醒的速度相对更快，即便是生病和虚弱的患者。在此阶段兽医师需持续监控动物的生命体征，包括心率和心律，呼吸频率，组织氧合作用和体温。</small></dd>
                    <dt>麻醉苏醒</dt>
                    <dd><small>- 手术进程接近结束时，兽医调低麻醉给药至停止麻醉，动物逐渐恢复意识，直到唤醒。动物苏醒后应该有稳定的自主呼吸，不需要额外的呼吸支持且循环平稳，同时术后疼痛得到良好地控制。</small></dd>
                </dl>     
               
              </div>
            </div>
            
          <div class="row mt-4">
            <div class="col-lg-6 mb-lg">
              <!-- line chart -->
              <div class="card z-index-2">
                <h4 class=" mt-2 text-center">术前准备工作</h4>
                <dl class="mt-1 mx-auto" style="width: 500px;">
                    <dt>常见手术器械</dt>
                    <dd><small>- 创巾钳4把、组织钳2把、直止血钳3把、弯止血钳3把、钝头剪刀1把、尖头剪刀1把、持针钳1把、刀柄1把、有齿镊1把、无齿镊1把、子宫钩1把</small></dd>
                    <dt>术前消毒</dt>
                    <dd><small>- 手、臂经上述初步的机械性清洗后,还必须经过化学药品的消毒。手、臂的化学药品消毒用专用泡手桶浸泡,以保证化学药品均匀而有足够的时间作用于手臂的各个部位。</small></dd>
                    <dt>手术衣的穿戴</dt>
                    <dd><small>- 手术人员手臂消毒后,取出高压灭菌的手术衣自己穿好,小心手臂不可接触未经消毒的其他部位。由助手协助在其背后,将衣带或腰带系好。穿灭菌手术衣时应避免其他任何部分(主要指衣服的外表面)触及未经灭菌的物件,尤其要注意保护手术衣前面的前胸部分,严格防止受到污染,应保持无菌状态。如果有必要还可考虑加穿消毒过的橡胶或塑料围裙。</small></dd>
                        
                </dl>   
            </div>
            </div>
            <div class="col-lg-6">
              <yzLunbo3 />
            </div>
          </div>
        
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import yzLunbo1 from "./components/yzLunbo1.vue";
  import yzLunbo2 from "./components/yzLunbo2.vue";
  import yzLunbo3 from "./components/yzLunbo3.vue";
  export default {
    name: "yizhu",
    methods:{
        gotocos(){
            this.$router.replace('/Cosplay')
        },
        gotoqiantai(){
            this.$router.replace('/qiantai')
        },
        gotoyishi(){
            this.$router.replace('/yishi')
        }
    },
    components: {
      yzLunbo1,
      yzLunbo2,
      yzLunbo3,
    },
  };
  </script>
  
  