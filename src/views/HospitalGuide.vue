<template>
    <div class="py-4 container-fluid">
      <div class=" row">
        <div class="col-12">
          <hospital-guide-card />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HospitalGuideCard from "./components/HospitalGuideCard.vue";
  
  export default {
    name: "HospitalGuide",
    components: {
      HospitalGuideCard
    },
  };
  </script>
  