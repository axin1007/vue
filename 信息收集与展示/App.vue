<template>
  <div>
    <div>
      <span>选择所在地区：</span>
      <input type="radio" value="中国大陆" name="area" v-model="area">中国大陆
      <input type="radio" value="中国香港" name="area" v-model="area">中国香港
    </div>
    <div>
      <span>手机号码：</span>
      <input type="text" name="phone" v-model="phone">
    </div>
    <div>
      <span>年龄: </span>
      <input type="text" name="age" v-model="age">
    </div>
    <div>
      <span>密码：</span>
      <input type="password" name="password" v-model="password">
    </div>
    <div>
      <span>爱好：</span>
      <input type="checkbox" v-model="hobby" value="看书">看书
      <input type="checkbox" v-model="hobby" value="学习">学习
      <input type="checkbox" v-model="hobby" value="写代码">写代码
      <input type="checkbox" v-model="hobby" value="游戏">游戏
    </div>
    <div>
      <input type="checkbox" v-model="isgrow"> 记住密码
    </div>
    ===========================================================================
    <p>我来自：{{area}}</p>
    <p>手机号码是：{{phone}}</p>
    <p>年龄是：{{age}}</p>
    <p>密码：{{password}}</p>
    <p>爱好是：{{hobby.join(" ")}}</p>
    <p>密码：{{isgrow? "是" : "否"}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: "中国大陆",
      phone: "12345678900",
      age: 123,
      password: 123456,
      hobby: ['看书',"学习","写代码"],
      isgrow: true,
    }
  },
}
</script>

<style>

</style>