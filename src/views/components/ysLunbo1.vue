<template>
    <div class="card card-carousel overflow-hidden h-100 p-0">
      <div id="ysLunbo1ExampleCaptions" class="carousel slide h-100" data-bs-ride="ysLunbo1">
        <div class="carousel-inner border-radius-lg h-100">
          <div
            class="carousel-item h-100 active"
            :style="{backgroundImage: 'url(' + require('@/assets/img/wujun1.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              <h5 class="text-white mb-1">无菌手套</h5>
            </div>
            
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/wujun2.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
              
              <h5 class="text-white mb-1">无菌器械</h5>
    
            </div>
          </div>
          <div
            class="carousel-item h-100"
            :style="{backgroundImage: 'url(' + require('@/assets/img/wujun3.jpg') + ')',
        backgroundSize: 'cover'}"
          >
            <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
             
              <h5 class="text-white mb-1">无菌技术</h5>
             
            </div>
        
          </div>
        </div>
        <button
          class="carousel-control-prev w-5 me-4"
          type="button"
          data-bs-target="#ysLunbo1ExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next w-5 me-4"
          type="button"
          data-bs-target="#ysLunbo1ExampleCaptions"
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
    name: "ysLunbo1",
  };
  </script>
  
  