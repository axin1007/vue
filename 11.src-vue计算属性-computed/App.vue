<template>
  <div>
    {{getSum}}
    {{getSum}}
    {{getSum}}
    {{getSum}}
    {{getSum}}
    {{getSum}}
  </div>
</template>

<script>
export default {
  name: "App",
  // 计算属性:
  // 场景: 一个变量的值, 需要用另外变量计算而得来
  /*
    语法:
    computed: {
      计算属性名 () {
        return 值
      }
    }
  */
  // 注意: 计算属性和data属性都是变量-不能重名
  // 注意2: 函数内变量变化, 会自动重新计算结果返回
  data() {
    return {
      total: 5, // 商品数量
      price: 98, // 单价
      coupon: 400, // 优惠券
    };
  },
  computed:{
    getSum(){
        console.log("11111")
       return this.total * this.price >= 500 ? this.total * this.price - this.coupon : this.total * this.price
    }
  }
};
</script>
