<template>
  <div class="my-product">
    <h3>标题: {{ obj.proname }}</h3>
    <p>价格: {{ obj.proprice }}元</p>
    <p>{{ obj.info }}</p>
  </div>
</template>

<script>
export default {
  // props: ["obj"],
  //  id: 1,
  //  proname: "超级好吃的棒棒糖",
  //  proprice: 18.8,
  //  info: "开业大酬宾, 全场8折",
  props: {
    obj: {
      type: Object,
      required: true,  // 强制校验必填
      default: () => ({}), // {} 还是返回空对象
    },
  },
};
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