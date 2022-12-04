//为何会有这个文件？
    // 应用很多地方会向发送同一个路由请求，若路由地址发生变化了咋办，服务器更换了咋办
import request from "@/api/request";

export const LoginInterFaceFun = function (UserLoginObj){
    return request.post('/UserLogin',UserLoginObj)
}



