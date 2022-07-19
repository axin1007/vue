<template>
   <div>
      <input ref="myInp" type="text" placeholder="这是一个输入框" v-if="isShow">
      <button v-else @click="btn">点击我进行搜索</button>
  </div>
</template>

<script>
// 目标: 点按钮(消失) - 输入框出现并聚焦
// 1. 获取到输入框
// 2. 输入框调用事件方法focus()达到聚焦行为
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods:{
    btn(){
      this.isShow = true;
      // 因为这里是用 v-if来判断 input标签的，v-if为false时是不存在input标签结构的
      // 而这里 this.isShow = true; 和 this.$refs.myInp.focus();是在一个函数里面同步执行。
      // Vue执行机制，将函数内的代码都执行完毕后在去渲染页面，所以这里 会出现 未定义focus方法的报错
      // 因为 input标签结构还没有出来 
      // this.$refs.myInp.focus();  

      // 所以这里用到了 $nextTick的方法 可以将一段同步执行的代码放到同步任务执行完后 再执行
      this.$nextTick(() => {
        this.$refs.myInp.focus();
      })
    }
  }
}
</script>

<style>

</style>