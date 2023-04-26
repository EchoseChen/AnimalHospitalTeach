<template>
  <router-link :to="url" class="nav-link" v-bind="$attrs">
    <div
      class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center"
    >
      <slot name="icon"></slot>
    </div>
    <span
      class="nav-link-text"
      >{{ navText }}</span
    >
  </router-link>
</template>
<script>
export default {
  name: "sidenav-item",
  props: {
    url: {
      type: String,
      required: true
    },
    navText: {
      type: String,
      required: true
    }
  }
};
</script>
