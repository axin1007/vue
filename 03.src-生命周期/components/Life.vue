<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
export default {
  name: "LifeAxiosLife",

  data() {
    return {
      msg: "Hello Vue!",
      arr: [1, 2, 3, 4],
    };
  },
  // new Vue()以后，vue内部给实例对象添加了一些属性和方法，data和methods初始化"之前"
  // 创建阶段
  // beforeCreate created
  beforeCreate(){
    this.msg = "Hello Vue!";
    // 修改data 没有反应
    console.log("beforeCreate 执行")
  },
  created(){
    console.log("created 执行");
    this.msg = "haha"
    // debugger
    // 初始化数据场景放在这里，请求接口/全局事件的监听
    this.timer = setInterval(() => {
      console.log("--------")
    } , 1000)
  },
  // 二.挂载
  //真实DOM挂载之前
  beforeMount(){
    // 挂载前 无法操作dom
    console.log(document.querySelector("#myP"));  //null
    console.log("beforeMount 执行");
  },
  mounted(){
    // 挂载后 操作dom
    console.log(document.querySelector("#myP"));  // dom p
    console.log("mounted 执行");
    // 初始化操作 可以操作到对应的dom
    // this.msg = 'ads1'; // 修改data的值

    // 初始化操作 可以操作到对应的dom
  },
  // 更新阶段 数据更新会触发
  // beforeUpdate 数据变了，视图没变
  // updated 数据变了，视图也变
  beforeUpdate(){
    console.log("beforeUpdate 执行");
    console.log(document.querySelectorAll("#myUL li")[4])
  },
  updated() {
    console.log("updated 执行");
    console.log(document.querySelectorAll("#myUL li")[4])
  },
  // 销毁阶段
  // beforeDestroy 销毁前
  // destroyed 销毁后
  beforeDestroy() {
    console.log('beforeDestroy',this.msg);
    clearInterval(this.timer);
  },
  destroyed(){
    console.log('destroyed',this.msg);
  }
};
</script>
