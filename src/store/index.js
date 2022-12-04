import Vue from 'vue'
import Vuex from 'vuex'
//仓库实例创建之前Vuex插件必须使用!
Vue.use(Vuex);

//仓库各个模块
import LoginModule from "@/store/Module/LoginModule";
export default new Vuex.Store({
    modules:{
        LoginModule
        //注意命名前缀 xxx:LoginModule
    }
});

