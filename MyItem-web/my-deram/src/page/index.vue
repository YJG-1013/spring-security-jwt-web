<template>
  <div slot="footer" class="dialog-footer">   
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="user_id"
        label="用户id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="logout" plain>注销</el-button>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    mounted() {
      this.token = 'Bearer '+ this.$cookies.get('token');
      this.getUsers();
    },
    methods: {
      logout: function(){
        axios.get('/api/logout',{
          headers:{
            'Authorization':this.token
          }
        }).then(res=>{
          this.$router.push('/login');
        }).catch(error => {
          alert("请求错误");
        })
      },
      getUsers: function () {
        axios.get('/api/users/getUser',{
          headers:{
            'Authorization':this.token
          }
        }).then(response => {
          this.tableData = response.data;
        }).catch(error => {
          alert("请求错误");
        })
      }
    },
    data() {
      return {
        tableData: [],
        token:''
      }
    }
  }
</script>

<style scoped>

</style>
