<template>
  <div class="Tips-Container" ref="TipsContainer">
    <transition-group>
      //组员都必须有key
      <TipsMessage
          :message="TipMessage"
          v-for="(TipMessage,index) in TipMessageArr"
          :key="index"
      ></TipsMessage>
    </transition-group>

  </div>
</template>

<script>
import TipsMessage from "@/components/LoginCommon/TipsMessage";
export default {
  name: "Tips",
  data(){
    return {
      TipMessageArr:[]
    }
  },
  methods:{
    TipsShow(TipMessage){
      this.TipMessageArr.push(TipMessage);
      setTimeout(() => {
        this.TipMessageArr.splice(0,1)
      },1500)
    }
  },
  components:{
    TipsMessage
  }
}
</script>

<style lang="less" scoped>
.Tips-Container {
  width: 40%;
  margin: 0 auto;
  position: relative;
}
//过渡一共有两个状态，一个是进入（enter），一个是离开（leave）。
//进入和离开细分为三个阶段，插入（from -> .v-enter?），激活（active），离开（to）。
//模式分为三种，官方描述只有两种，一种是in-out，一种是out-in，还有一种是默认效果，就是进入和离开的过渡效果同时进行。

.v-enter-active {
  animation: move .8s ;
}

.v-leave-active {
  animation: move .8s reverse;
}

@keyframes move {
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
