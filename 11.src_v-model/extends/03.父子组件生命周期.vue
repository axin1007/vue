<template>
  <div>
    <h1>father:{{ count }}</h1>
    <button @click="count++">click me</button>
    <Demo :count="count"></Demo>
  </div>
</template>

<script>
import Demo from "./child/demo.vue";
export default {
  name: "Demo03T",
  components: {
    Demo,
  },
  data() {
    return {
      count: 0,
    };
  },
  beforeCreate() {
    console.log("beforeCreate - father");
  },
  created() {
    console.log("created - father");
  },
  beforeMount() {
    console.log("beforeMount - father");
  },
  mounted() {
    console.log("mounted - father");
  },
  beforeUpdate() {
    console.log("beforeUpdate - father");
  },
  updated() {
    console.log("updated - father");
  },
  beforeDestroy() {
    console.log("beforeDestroy - father");
  },
  destroyed() {
    console.log("destroyed - father");
  },

  // 结论1: 父组件先创建，然后子组件创建；子组件先挂载，然后父组件挂载。
  // 父beforeCreate-> 父created->父beforeMount -> 子beforeCreate-> 子created -> 子beforeMount-> 子mounted -> 父mounted

  // 在created中发起请求获取数据，依次在子组件的created或者mounted中会接收到这个数据。

  // 结论2: 父beforeUpdate -> 子beforeUpdate-> 子updated -> 父updated

  // 结论3: 父beforeDestroy -> 子beforeDestroy-> 子destroyed -> 父destroyed
};
</script>

<style scoped></style>
