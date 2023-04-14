<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>用户管理</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">邮箱</th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >用户名</th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >身份</th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >密码</th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for = "user in users" :key="user.userId">
                <td>
                  <div class="d-flex px-2 py-1">
                    <div>
                      <img v-if="user.identity == 'student'"
                        src="../../assets/img/student.png"
                        class="avatar avatar-sm me-3"
                        alt="user2"
                      />
                      <img v-else-if="user.identity == 'teacher'"
                        src="../../assets/img/teacher.png"
                        class="avatar avatar-sm me-3"
                        alt="user2"
                      />
                      <img v-else
                        src="../../assets/img/instructor.png"
                        class="avatar avatar-sm me-3"
                        alt="user2"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{{ user.userId }}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">{{ user.username }}</p>
                  <!-- <p class="text-xs text-secondary mb-0">Organization</p> -->
                </td>
                <td class="align-middle text-center text-sm">
                  <span v-if="user.identity == 'student'" class="badge badge-sm bg-gradient-warning">{{ user.identity }}</span>
                  <span v-else-if="user.identity == 'teacher'" class="badge badge-sm bg-gradient-info">{{ user.identity }}</span>
                  <span v-else class="badge badge-sm bg-gradient-primary">{{ user.identity }}</span>
                </td>
                <td class="align-middle text-center">
                  <span class="text-secondary text-xs font-weight-bold">{{ user.password }}</span>
                </td>
                <td class="align-middle" >
                  <p v-on:click="deleted(user.userId)"
                  class="text-xs font-weight-bold mb-0"
                  >删除</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "users-table",
    data() {
      return {
        users: [],
      };
    },
    methods: {
      deleted(id){
        this.$axios.delete('/api/user', {
        params: {
          userId: id,
        }
      }).then(res => {
          if(res.status == 200){
              // 删除成功后更新表格数据
          this.getTableData();
          }
        })
        .catch(error => {
          console.error('删除失败:', error);
        });
      },
      getTableData(){
        this.$axios.get('api/user/')
        .then((res) => {
            if(res.status == 200){
            this.users = res.data;
            // console.log(this.users);
            }
          }).catch(err =>{
              console.log(err);
          });
        }

    },

    mounted() {
      this.getTableData();
  },
  };
  </script>
  
