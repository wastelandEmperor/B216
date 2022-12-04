<template>
  <div class="RightBox">
    <!-- 顶部提示区 -->
    <div class="TopTitleBox">
      <span>{{deeds}}</span>
      <slot name="TopTitleTips"></slot>
    </div>
    <!-- 中间表单区 -->
    <div class="MiddenFromBox">
      <input
          type="text" placeholder="请输入用户名"
          v-model="UserInputData.UserName"
          v-if="deeds==='注册'"
      >
      <input
          type="text" placeholder="请输入账号/手机号"
          v-model="UserInputData.AcCount"
      >
      <input
          type="password" placeholder="请输入密码"
          v-model="UserInputData.PassWord"
      >
    </div>
    <!--  底部按钮区  -->
    <div class="BottomButtonBox">
      <button @click="UserResponse">{{deeds}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRightBox",
  data(){
    return {
      UserInputData:{
        UserName:'',
        AcCount:'',
        PassWord:''
      }
    }
  },
  methods:{
    UserResponse(){
      //可能表单项有问题，因此皆由父组件来处理，若有问题其可调度Tips组件通知
        //表单项的检验也不再当前组件
      this.GetUserInputData({
        UserInputData:this.UserInputData,
        type:this.deeds
      });
    }
  },
  props:["deeds","GetUserInputData"]
}
</script>

<style lang="less" scoped>
.RightBox {
  width: 50%;
  height: 100%;
  display: inline-block;
  background-color: white;

  .TopTitleBox {
    width: 70%;
    margin: 0 auto;
    margin-top: 80px;

    span {
      width: 50%;
      display: inline-block;

      &:nth-child(1) {
        font-size: 34px;
        font-weight: 1000;
        color: #4e5d73;
      }

      &:nth-child(2) {
        text-align: right;
        font-size: 18px;

        a {
          color: #4e5d73;
          margin-left: 5px;
          text-decoration: none;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
  }

  .MiddenFromBox {
    width: 70%;
    margin: 0 auto;
    margin-top: 40px;

    input {
      display: block;
      width: 95%;
      height: 40px;
      border: none;
      outline: none;
      border: 1px solid rgb(216, 214, 214);
      margin-top: 20px;
      padding-left: 5%;
      font-size: 16px;
      transition: all 0.7s;
      color: black;
      font-weight: 600;

      //placeholder样式
      &::-webkit-input-placeholder {
        font-weight: 500;
        color: #bebec3;
      }

      &:focus {
        color: #40597e;
        font-size: 24px;
      }
    }
  }

  .BottomButtonBox {
    width: 70%;
    margin: 0 auto;
    margin-top: 120px;

    button {
      width: 100%;
      height: 50px;
      background-color: #4e5d73;
      border: none;
      color: white;
      font-size: 23px;
      font-weight: 1000;
      cursor: pointer;
    }
  }
}
</style>
