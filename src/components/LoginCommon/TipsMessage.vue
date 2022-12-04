<template>
  <div class="TipMesage">{{ message }}</div>
</template>

<script>
export default {
  name: "TipsMessage",
  props: ["message"]
}
</script>

<style lang="less" scoped>
.TipMesage {
  width: 100%;
  margin: 0px auto;
  margin-bottom: 30px;
  text-align: center;
  background-color: #4e5d73e5;
  height: 60px;
  line-height: 60px;
  color: white;
  font-weight: 1000;
  position: relative;
  z-index: 100;
  font-size: 25px;
}

</style>
