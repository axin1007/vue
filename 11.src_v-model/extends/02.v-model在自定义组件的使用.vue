<template>
  <div>
    <h1>v-model在自定义组件上的使用</h1>
    <!-- v-model 用在一个组件上 会默认被解析成 
    1. 名为 value 的属性 
    2. 名为 input 的事件 -->

    <!-- <BaseInput :value="test" @input="***"></BaseInput> -->
  </div>
</template>

<script>
export default {
  name: "Demo02VModel",

  data() {
    return {
      test: "",
      checked: 0,
    };
  },
  components: {},
};
</script>

<style lang="css" scoped></style>
