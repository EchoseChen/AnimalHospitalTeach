<template>
    <div class="card card-carousel overflow-hidden h-100 p-0">
      <div id="yzLunbo2ExampleCaptions" class="carousel slide h-100" data-bs-ride="yzLunbo2">
        <div class="carousel-inner border-radius-lg h-100">
          <div
            class="carousel-item h-100 active"
            :style="{backgroundImage: 'url(' + require('@/assets/img/mazui1.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              
              <h5 class="text-white mb-1">麻醉前评估</h5>
            
            </div>
            
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/mazui2.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
             
              <h5 class="text-white mb-1">麻醉前用药</h5>
    
            </div>
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/mazui3.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
             
              <h5 class="text-white mb-1">麻醉诱导</h5>
             
            </div>
            <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/mazui4.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
             
              <h5 class="text-white mb-1">麻醉维持</h5>
              
            </div>
            <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/mazui5.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <h5 class="text-white mb-1">麻醉苏醒</h5>
              
            </div>
          </div>
        </div>
          </div>
        <button
          class="carousel-control-prev w-5 me-3"
          type="button"
          data-bs-target="#yzLunbo2ExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next w-5 me-3"
          type="button"
          data-bs-target="#yzLunbo2ExampleCaptions"
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
    name: "yzLunbo2",
  };
  </script>
  
  