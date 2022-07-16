<template>
  <!-- 需求： 计算商品总价，商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
  <div>
    购物车商品总价：
    <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
    {{getSum()}}
    {{getSum()}}
    {{getSum()}}
    {{getSum()}}
    {{getSum()}}
    <!-- 在模板中放入太多的逻辑，这样会导致 会让模板过重， 并且代码 很难以维护 -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      total: 5, // 商品数量
      price: 98, // 单价
      coupon: 400, // 优惠券
    };
  },
  methods:{
    getSum(){
      console.log('111')
      return this.total * this.price >= 500 ? this.total * this.price - this.coupon : this.total * this.price
    }
  }
};
</script>
