import axios from 'axios';
import router from '../src/router'
import ElementUI from 'element-ui'
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.code == 206||response.data.code == 201||response.data.code == 207){
      router.push('/login');
      ElementUI.Message({
        message:'请登录!!',
        type: 'error'
      })
      return response;
    }
    return response;
  },
  error => {
    return Promise.reject(error.response.data)  // 返回接口返回的错误信息
  });
export default axios;
