<template>
  <div>
    <h2>体育-改变人生</h2>
    <div>
      <router-link to="/order/sindex">体育的主页</router-link>
      <router-link to="/order/sinternal">国内体育</router-link>
      <router-link to="/order/sabroad">国外体育</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  display: inline-block;
  margin-left: 5px;
}
.router-link-active {
  background-color: green !important;
}
.router-link-exact-active {
  color: red !important;
}
</style>
