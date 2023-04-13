<template>
    <div class="card card-carousel overflow-hidden h-100 p-0">
      <div id="qtLunbo1ExampleCaptions" class="carousel slide h-100" data-bs-ride="qtLunbo1">
        <div class="carousel-inner border-radius-lg h-100">
          <div
            class="carousel-item h-100 active"
            :style="{backgroundImage: 'url(' + require('@/assets/img/daolan1.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                <i class="ni ni-camera-compact text-dark opacity-10"></i>
              </div>
              <h5 class="text-white mb-1">3D智慧导览</h5>
              <p>精通宠物医院3D导览的使用和常见问题的处理，帮助病人快速上手3D导览</p>
            </div>
            
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/daolan2.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                <i class="ni ni-bulb-61 text-dark opacity-10"></i>
              </div>
              <h5 class="text-white mb-1">咨询服务台</h5>
              <p>对病人的各项检查，能够讲解有关要求及注意事项。
<br>为病人就诊提供服务，做好宣传教育。尽量满足病人的合理要求。</p>
            </div>
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/daolan3.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                <i class="ni ni-trophy text-dark opacity-10"></i>
              </div>
              <h5 class="text-white mb-1">热线咨询</h5>
              <p>接听咨询电话，耐心解答咨询问题。</p>
            </div>
            
          </div>
        </div>
        <button
          class="carousel-control-prev w-5 me-3"
          type="button"
          data-bs-target="#qtLunbo1ExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next w-5 me-3"
          type="button"
          data-bs-target="#qtLunbo1ExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "qtLunbo1",
  };
  </script>
  

  