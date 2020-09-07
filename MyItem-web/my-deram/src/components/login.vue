<template>
  <div  class="parent">
    <div class="block">
      <h3>用户登录</h3>
      <el-form :model="pageForm"  ref="pageForm">  
        <el-form-item label="账号" prop="account">  
          <el-input placeholder="请输入账号" v-model="pageForm.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">  
          <el-input placeholder="请输入密码" v-model="pageForm.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">   
        <el-button type="primary" @click="login" plain>登录</el-button>
        <el-button type="warning" @click="register" plain>注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import $ from 'jquery';

  export default {
    data() {
      return {
        pageForm: {
          username: '',
          password: ''
        }

      }
    },
    methods: {

      login : function () {
        var formData = qs.stringify({
          username:this.pageForm.username,
          password : this.pageForm.password
        });
        axios.post('api/login',formData
        ).then(response => {
          if(response.data.code == 203){
            this.$cookies.set('token',response.data.jwtToken);
            this.$message({
              message:'登录成功！',
              type:'info'
            })
            this.$router.push('/page/index')
          } else if (response.data.code == 202){
            this.$message.error('用户账号或密码错误!!');
          }else if (response.data.code == 204){
            this.$message.error('用户无权访问!!');
          }
        }).catch(error => {
          this.$message({
            message:'登录异常请稍后重试！',
            type:'error'
          })
        })
      },
      register : function () {
        this.$router.push('/pages/register')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  .el-input {
    width: 260px;
  }

  .el-form-item {
    text-align: center;
  }
  .block {
    width: 300px;
    height: 300px;
    position: absolute;
    left: 47%;
    top: 40%;
    margin: -100px 0 0 -100px;
  }
  .parent {
    backgroundSize:100% 100%;
  }
</style>
