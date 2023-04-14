
<template>
  <div class="container card">
    <div class="p-3 card-header">
      <h6 class="mb-0">{{ cardTitle }}</h6>
    </div>
    <div class="p-3 card-body">
      <div class="row">
        <div class="col red">
          <span>1 of 3</span>
        </div>
        <div class="col">
          <span>2 of 3</span>
        </div>
        <div class="col">
          <span>3 of 3</span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <span>{{ item1 }}</span>
        </div>
        <div class="col">
          <span>{{ item2 }}</span>
        </div>
      </div>

      <div class="row">
        <div v-for="item of list" class="col" :key="item.key">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>



  <div class="d-flex flex-column p-3 mb-6 bg-gray-100 border-radius-lg ">
    <div class="d-flex">
      <div class="mb-3">
        <button @click="showToast('success')" class="btn bg-success">Btn1</button>
      </div>
      <div class="d-flex flex-column">
        <button class="btn text-primary bg-warning">Btn1.1</button>
        <button class="btn ">Btn1.2</button>
        <button class="btn">Btn1.3</button>
      </div>
      <span class="text-md ">
        Email Address:
        <span class="text-dark font-weight-bold">oliver@burrito.com</span>
      </span>
      <button class="btn ">Btn 1.</button>
    </div>
    <div class="d-flex">
      <button @click="showToast('error')" class="btn bg-danger">Btn2</button>
    </div>
  </div>

  <div>
    <ul>
      <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-3 text-sm">Oliver Liam</h6>
          <span class="mb-2 text-xs">
            Company Name:
            <span class="text-dark font-weight-bold ms-sm-2">Viking Burrito</span>
          </span>
          <span class="mb-2 text-xs">
            Email Address:
            <span class="text-dark ms-sm-2 font-weight-bold">oliver@burrito.com</span>
          </span>
          <span class="text-xs">
            VAT Number:
            <span class="text-dark ms-sm-2 font-weight-bold">FRB1235476</span>
          </span>
        </div>
        <div class="ms-auto text-end">
          <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
            <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
          </a>
          <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
            <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
          </a>
        </div>
      </li>
    </ul>
  </div>

  <div>
    <div v-for="(item, index) in l2" :key="index">
      <input v-model="item.name">
      <p>{{ item.name }}, {{ item.age }} ,{{ index }}</p>
    </div>
    <div v-for="(item, index) in l2" :key="index">
      <!-- <input v-model="item.name"> -->
      <p>{{ item.name }}, {{ item.age }} ,{{ index }}</p>
    </div>
  </div>

  <div v-if="op == 'single' || 'multiple'">
    <p>hahaha</p>

  </div>
</template>
  
<script>
export default {
  name: "rocket-card",
  data() {
    return {
      item1: 'hello',
      item2: 'second',
      list: ['1', '2', '3'],
      cardTitle: 'Title',
      l2: [
        {
          name: 'Tom',
          age: 12
        }, {
          name: 'Same',
          age: 1,
        }, {
          name: 'Lucy',
          age: 12
        }
      ],
      op: 'multiple'
    }
  },
  methods: {
    showToast(type) {
      // this.$toast.success("hhhhh",{position:"top"})
      // this.$toast.info("hhhhh",{position:"top"})
      this.$toast.show("提交成功",{
        type:type,
        position:"top",
        duration:4000,
      });
      // setTimeout(this.$toast.clear, 3000);
    }
  }
};
</script>

<style>
.red {
  color: red
}
</style>
  