<template>
  <nav aria-label="breadcrumb">
    <ol
      class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
    >
      <li class="text-sm breadcrumb-item">
        <a 
        :class="'text-white'"
         class="opacity-70" href="#">虚拟宠物医院学习软件</a>
      </li>
      <h6
        class="text-sm breadcrumb-item active"
        :class="'text-white'"
        aria-current="page"
      >
        {{ currentPage }}
    </h6>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "breadcrumbs",
  props: {
    currentPage: {
      required: true
    },
    textWhite: {
      type: String
    }
  }
};
</script>
