<template>
  <div>
    <h1>v-model的基本使用</h1>
    <input type="text" v-model="name" />
    <!-- v-model 可以 解析成 value属性和 input 输入事件
         v-model 可以理解成第二种写法的语法糖-->
    <input type="text" :value="name1" @input="name1 = $event.target.value" />
  </div>
</template>

<script>
export default {
  // name: "Demo01VModel",

  data() {
    return {
      name: "",
      name1: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
