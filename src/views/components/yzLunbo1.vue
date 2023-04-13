<template>
    <div class="card card-carousel overflow-hidden h-100 p-0">
      <div id="yzLunbo1ExampleCaptions" class="carousel slide h-100" data-bs-ride="yzLunbo1">
        <div class="carousel-inner border-radius-lg h-100">
          <div
            class="carousel-item h-100 active"
            :style="{backgroundImage: 'url(' + require('@/assets/img/zhushe1.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
             
              <h5 class="text-white mb-1">静脉注射</h5>
              <small>- 排气，左手拇指绷紧静脉下端皮肤，使其固定，右手持注射器，针头斜面向上，示指固定针栓，针头与皮肤呈20°角，由静脉上方或侧方刺入皮下
                        ，再沿静脉方向潜行刺入，见回血证明针头已经进入静脉，再顺静脉进针少许。松压脉带，嘱病人松拳，缓慢推药液。</small>
            </div>
            
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/zhushe2.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              
              <h5 class="text-white mb-1">肌肉注射</h5>
              <small>- 排气，左手拇、示二指分开并绷紧皮肤，右手持针如握笔姿势，以中指固定针栓，针头和注射部位呈90°角。用手臂带动腕部力量，将针头快速刺入肌肉内2.5～3cm(针头2/3，消瘦者及病儿酌减)，
                        松开左手抽动活塞，如无回血，右手固定针头，左手缓慢注入药液。注意观察病人反应。</small>
            </div>
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/zhushe3.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
             
              <h5 class="text-white mb-1">皮下注射</h5>
              <small>- 排尽空气，左手绷紧局部皮肤。右手持注射器，示指固定针栓，针头斜面向上，
                        和皮肤呈30°～40°角(过瘦者可捏起注射部位皮肤，角度可减小)，迅速刺入针头的1/2～2/3，松开左手，抽动活塞，如无回血即可推注药液。</small>
            </div>
            <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/zhushe4.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              
              <h5 class="text-white mb-1">皮内注射</h5>
              <small>- 排尽注射器内空气，左手绷紧前臂内侧皮肤，右手持注射器，使针尖斜面向上，与皮肤呈5°角刺入皮内。待针头斜面完全进入皮内后，
                        放平注射器，左手拇指固定针栓，右手推注药液0.1ml，注入的药量要准确，使局部隆起成半球状的皮丘，皮丘皮肤变白，并显露毛孔。</small>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev w-5 me-4"
          type="button"
          data-bs-target="#yzLunbo1ExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next w-5 me-4"
          type="button"
          data-bs-target="#yzLunbo1ExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "yzLunbo1",
  };
  </script>
  
  