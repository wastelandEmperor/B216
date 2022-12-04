<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    console.log(this.$store)
  }
}
</script>

<style>
</style>
