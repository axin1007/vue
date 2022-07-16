<!--product的静态页面，可直接复制-->
<template>
  <div class="my-product">
    <h3>标题: {{title}}</h3>
    <p>价格: {{price}}</p>
    <p>{{info}}</p>
    <button @click = "bargain">点我砍价</button>
  </div>
</template>

<script>
export default {
  props:['title','price','info','index'],
  methods:{
    bargain(){
      // props 属性现在是只读的，不允许你做修改
      // this.price--
      this.$emit('del',this.index)
    }
  }
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
