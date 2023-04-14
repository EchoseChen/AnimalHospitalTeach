<!--
可定制插槽和 CSS 过渡效果的模态框组件。
-->

<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h6>提示</h6>
      </template>
      <template #body>
        <p>你真的要这么做吗</p>
      </template>
      <template #footer>
        <button @click="showModal=false">yes</button>
        <button @click="showModal=false">no</button>
      </template>
    </modal>
  </Teleport>
</template>