<template>
<div class="py-4 container-fluid">
    <div class="row">
     <BingliTable />
    </div>
</div>
</template>
<script>
//import BingliShow from './BingliShow.vue';
import BingliTable from './components/BingliTable.vue';
//import BingliTable from './components/BingliTable.vue';

//import Navbar from "@/examples/PageLayout/Navbar.vue";
export default{
    name: "ZhinengStudy",
    components: {  BingliTable }
}
</script>
