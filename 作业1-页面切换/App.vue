<template>
  <div>
    <div class="footer_wrap">
      <!-- <a href="#/index">首页</a>
      <a href="#/class">分类页</a>
      <a href="#/order">订单页</a>
      <a href="#/my">个人中心</a> -->
      <router-link to="/index">首页</router-link>
      <router-link to="/class">分类页</router-link>
      <router-link to="/order">订单页</router-link>
      <router-link to="/my">个人中心</router-link>
    </div>
    <h1 class="title">组件页面显示在下面↓</h1>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.title {
  margin-top: 65px;
}
.footer_wrap .router-link-active{
  background: green;
}
</style>