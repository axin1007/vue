<template>
  <div>
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{ obj.count }}</h1>
    <!-- <h1>{{ obj.age }}</h1> -->
    <button @click="btn">点击变化</button>
    <h1>{{ arr[0] }}</h1>
    <button @click="btn1">第一次改变数组</button>
    <button @click="btn2">第二次改变数组</button>

    <!-- 
      Vue.set(target, propertyName/index, value)
      或
      vm.$set(target, propertyName/index, value)

    作用：向响应式对象中添加一个 属性，并确保这个新 属性
    同样是响应式的，且触发视图更新 
    
    target: 不能是 Vue 实例，或者 Vue 实例的根数据对象-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: 1, // 响应式的数据：数据变化，会同步到视图的上数据
      // 在data上现定义
      obj: {
        age: 18,
      },
      arr: [1, 2],
      arr2: [{ a: 1 }],
    };
  },
  mounted() {},
  methods: {
    btn() {
      // this.msg++;
      // this.obj.count = 1; // count 不是响应式的数据
      // console.log(this.obj);
      // this.obj.age++;
      // console.log(this);
      this.$set(this.obj, "count", 100);
      console.log(this);
    },
    btn1() {
      // this.arr[0] = 1000;
      this.$set(this.arr, 0, 100); // 只能使得当前的这一次有效
      console.log(this);
    },
    btn2() {
      this.arr[0] = 1000;
    },
  },
};
</script>

<style scoped></style>