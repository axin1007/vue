<template>
  <div>
    <!-- watch侦听器: 作用可以侦听data/computed属性值改变, 当侦听的属性发生变化的时候，会触发对应的处理函数 
    语法：
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
      }
    }-->
    <input type="text" v-model="name" />
  </div>
</template>

<script>
export default {
//   name: "App",
  data() {
    return {
      name: "",
    };
  },
  watch:{
    name(val, oldVal){
      console.log("val",val)
      console.log("oldVal",oldVal)
    }
  }
};
</script>
