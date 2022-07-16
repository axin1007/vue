<template>
  <div>
    姓<input v-model="username" /> <br />
    名<input v-model="pwd" /> <br />
    <h1>{{ fullName }}</h1>
    <br />
    <!-- fullName 依赖于  username  pwd -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "",
      pwd: "",
      // fullName: "",
    };
  },
  computed: {
    // 不允许异步操作
    // asycn fullName() {
    //   // return this.username + this.pwd;
    //   return await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(this.username + this.pwd);
    //     }, 1000);
    //   });
    // },
  },
  watch: {
    // 监听属性 属性发生改变 做一些逻辑处理（异步请求....）
    // username(val) {
    //   this.fullName = val + this.pwd;
    // },
    // pwd(val) {
    //   this.fullName = this.username + val;
    // },
  },

  mounted() {},

  methods: {},
};
</script>