import axios from 'axios'
//二次封装axios
const request = axios.create({
    //后端CORS解决跨域了，没用代理，为何加上/api? -> 备用选择？
    baseURL:"http://127.0.0.1:5050/Api"
})
export default request;

