<template>
  <div>
    <button @click="comName = 'UserName'">个人信息填写UserName</button>
    <button @click="comName = 'UserInfo'">账号密码填写UserInfo</button>

    <p>下面显示注册组件-动态切换:</p>
    <div style="border: 1px solid red">
      <!-- 对应的内容显示在这儿 -->
      <!-- 每一次切换的时候 组件都重新渲染，频繁切换 性能不高 -->
      <!-- <component :is="comName"></component> -->
      <!-- Vue内置keep-alive组件, 把包起来的组件缓存起来 -->

      <!-- include 字符串或正则表达式。只有名称匹配的组件会被缓存。
exclude 字符串或正则表达式。任何名称匹配的组件都不会被缓存。 -->
      <keep-alive exclude="UserInfo">
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserInfo from "../components/02/UserInfo.vue";
import UserName from "../components/02/UserName.vue";
export default {
  data() {
    return {
      comName: "UserName",
    };
  },
  components: {
    UserInfo,
    UserName,
  },
};
</script>
