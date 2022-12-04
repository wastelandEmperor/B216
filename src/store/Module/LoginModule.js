import {LoginInterFaceFun} from "@/api";
const state = {
    //登录接口数据
    LoginInterFaceFunData:{}
};
const actions = {
    async logininterfacefun({commit},UserInputData){
        //post 携带 用户账号和密码
        let {data:result} = await LoginInterFaceFun(UserInputData);
        commit('LOGININTERFACEFUN',result)
    }
};
const mutations = {
    LOGININTERFACEFUN(state,value){
        state.LoginInterFaceFunData = value;
    }
};
const getters = {};
export default {
    namespaced: true,
    state, actions, mutations, getters
}
