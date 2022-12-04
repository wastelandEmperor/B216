<template>
  <div class="Login-Container">
    //消息提示 -> 登录区提交时，表单项不对以此提示用户
    <Tips ref="tips"></Tips>
    <div class="LoginBox">
      <div class="LeftBox">左侧</div>
      <LoginRightBox deeds="登录" :GetUserInputData="GetUserInputData">
        <template v-slot:TopTitleTips>
          <span>没有账号?
            <a @click="$router.push('/Register')">去注册</a>
          </span>
        </template>
      </LoginRightBox>
    </div>
  </div>
</template>

<script>
import LoginRightBox from "@/components/LoginCommon/LoginRightBox";
import Tips from "@/components/LoginCommon/Tips";
export default {
  name: "Login",
  methods:{
    //登录/注册 提交后台验证(不合法，Tips组件提示)
    GetUserInputData(newValue){
      //登录状态，在前端判断用户名是否合法，不合法请求都不发
      //注册状态，用户名是否注册过，得看后台自己
      if(newValue.type === '登录'){
        let UserInputData = newValue.UserInputData;
        //登录不需要用户名，因此也不必带过去。需要的只是账号与密码
        delete UserInputData.UserName;
        if(UserInputData.AcCount === '' || UserInputData.PassWord === ""){
          //Tips组件提示
          this.$refs.tips.TipsShow('输入信息不能为空!');
        }else{
          //派发行为 -> 该行为会将用户信息交给后端处理登录的接口
          this.$store.dispatch('LoginModule/logininterfacefun',UserInputData)
        }
      }
      return;
    }
  },
  components:{
    LoginRightBox,Tips
  },
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style lang="less" scoped>
.Login-Container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #f0eeee;

  .LoginBox {
    width: 70%;
    margin: 0 auto;
    height: 600px;
    position: absolute;
    left: 50%;
    bottom: 55%;
    transform: translateX(-50%) translateY(50%);
    box-shadow: 10px 10px 30px rgba(61, 61, 61, 0.355);

    .LeftBox {
      width: 50%;
      height: 100%;
      display: inline-block;
      vertical-align: top;
      background-color: #4e5d73;
      transition: all 1s;

      .TopTitleBox {
        width: 60%;
        margin: 0 auto;
        margin-top: 80px;

        .Title {
          width: 100%;
          margin: 0 auto;
          color: white;
          font-weight: 1000;
          font-size: 35px;
          position: relative;

          &::after {
            content: "";
            display: inline-block;
            width: 60px;
            height: 100%;
            position: absolute;
            left: -5px;
            transform: translateX(-100%) translateY(-15%);
            //background-image: url("../../public/akj1aj.ico");
          }
        }

        .Role {
          width: 100%;
          margin-top: 30px;

          span {
            font-size: 25px;
            color: rgb(255, 255, 255);
            display: block;

            &:nth-child(2) {
              font-size: 17px;
              margin-top: 5px;
              color: #ceced0;
              font-weight: 100;
            }
          }
        }
      }

      .MiddenContentBox {
        width: 60%;
        margin: 0 auto;
        margin-top: 150px;

        .Created {
          width: 100%;
          color: #868688;
          font-size: 18px;
        }
      }

      .BottomContentBox {
        width: 60%;
        margin: 0 auto;
        margin-top: 20px;
        color: white;
        font-weight: 1000;
        font-size: 23px;

        &::after {
          content: "";
          width: 300px;
          display: inline-block;
          height: 0px;
          position: absolute;
          bottom: 40px;
          left: 0;
          border-bottom: 5px solid rgba(228, 228, 228, 0.145);
        }
      }
    }
  }
}

.v-enter-active {
  animation: move 0.8s;
}

.v-leave-active {
  animation: move 0.8s reverse;
}

@keyframes move {
  from {
    opacity: .5;
  }
  to {
    opacity: 1;
  }
}
</style>
