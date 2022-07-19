<template>
  <div>
      <p>1. 获取原生DOM元素</p>
      <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
      <p>2. 获取组件对象 - 可调用组件内一切</p>
      <Demo ref="de"></Demo>
  </div>
</template>

<script>
// 目标: 获取组件对象
// 1. 创建组件/引入组件/注册组件/使用组件
// 2. 组件起别名ref
// 3. 恰当时机, 获取组件对象
import Demo from './components/Demo.vue'
export default {
    mounted(){
        console.log(document.getElementById("h")); // h1
        console.log(this.$refs.myH); // h1

        let demoObj = this.$refs.de;
        demoObj.fn()
    },
    components: {
        Demo
    }
}
</script>