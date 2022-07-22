<template>
  <div class="box">
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part">朋友</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(targetPath, targetName){
      // 方式1: path跳转
      this.$router.push({
        // path: targetPath,
        name: targetName
      })
    },
    oneBtn(){
      this.$router.push({
        name: "Part",
        params:{
          username: '小传'
        }
      })
    },
    twoBtn(){
      this.$router.push({
        name: 'Part',
        query:{
          name: '小智'
        }
      })
    }
  }
};
</script>

<style >
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



 /* router-link-exact-active  (精确匹配) url中hash值路径, 与href属性值完全相同, 设置此类名 */
 /* router-link-active        (模糊匹配) url中hash值,    包含href属性值这个路径 */
.box .footer_wrap .router-link-active{
  background-color: green !important;
}
.box .footer_wrap .router-exact-active{
  background-color: brown !important;
}
</style>