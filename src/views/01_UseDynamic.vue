<template>
  <div>
    <button @click="comName = 'userInfo'">账号密码填写UserInfo</button>
    <button @click="comName = 'userName'">个人信息填写UserName</button>

    <p>下面显示注册组件-动态切换:</p>
    <div style="border: 1px solid red">
      <!-- 对应的内容显示在这儿 -->
      <!-- <component :is="comName"></component> -->
      <component :is='comName'></component>
    </div>
  </div>
</template>

<script>
// 需求: 点击按钮切换组件
// 1. 创建要被切换的组件 - 标签+样式
// 2. 引入到要展示的vue文件内, 注册
// 3. 设置挂载点
// <component :is="变量"></component>， 变量-承载要显示的组件名
// 4. 点击按钮-切换comName的值为要显示的组件名
import userInfo from "../components/01/UserInfo.vue"
import userName from "../components/01/UserName.vue"
export default {
  data() {
    return {
      comName: "userInfo",
    };
  },
  components: {
    userInfo,
    userName
  },
};
</script>
