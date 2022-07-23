<template>
  <div>
    <div>
      <router-link to="/uiRouter">UI-Router</router-link>
      <router-link to="/contacts">Contacts</router-link>
      <router-link to="/about">About</router-link>
      <hr />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  display: inline-block;
  margin-left: 10px;
}
/* 模糊匹配   底下包含的路径都会有的样式 */
.router-link-active {
  background-color: green;
}
/* 精确匹配   当前路径下才会有的样式*/
.router-link-exact-active {
  color: red;
}
</style>
