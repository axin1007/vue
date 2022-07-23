<template>
  <div>
    <h1>以下是儿子的内容</h1>
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "DemoDemo",
  data() {
    return {};
  },
  props: ["count"],
  beforeCreate() {
    console.log("beforeCreate - son");
  },
  created() {
    console.log("created - son");
  },
  beforeMount() {
    console.log("beforeMount - son");
  },
  mounted() {
    console.log("mounted - son");
  },
  beforeUpdate() {
    console.log("beforeUpdate - son");
  },
  updated() {
    console.log("updated - son");
  },
  beforeDestroy() {
    console.log("beforeDestroy - son");
  },
  destroyed() {
    console.log("destroyed - son");
  },
};
</script>

<style scoped></style>
