<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="btn">数组翻转</button>
    <button @click="btn1">截取前3个</button>
    <button @click="btn2">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name:"App",
  data() {
    return {
      arr: [5, 3, 9, 2, 1],
    };
  },
  methods: {
    btn() {
      this.arr.reverse();
      // reverse 是会改变原组数
    },
    btn1() {
      // this.arr.slice(0, 3);
      // console.log(this.arr.slice(0, 3));
      // console.log(this.arr);
      // slice 不会改变原数组
      // 解决方案
      // 1.直接重新赋值
      // this.arr = this.arr.slice(0, 3);
      // 2. splice(开始的位置， 删除的长度，替换元素)
      this.arr.splice(0, 3); // 是会改变原组数
      // 只要 可以 改变原组数 就会触发视图更新
    },
    btn2() {
      // this.arr[0] = 1000;
      // console.log(this.arr);
      // vm.$set(target, propertyName/index, value)
      // target 目标对象
      // propertyName/index 属性/索引号
      // value
      this.$set(this.arr, 0, 1000);
    },
  },
}
</script>

<style>

</style>