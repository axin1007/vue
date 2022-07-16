<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去
     -->
    <MyProduct title="好吃的口水鸡" price="50" info="开业大酬宾, 全场8折"></MyProduct>
    <MyProduct title="好可爱的可爱多" price="20" info="老板不在家, 全场1折"></MyProduct>
    <MyProduct title="好贵的北京烤鸭" price="290" :info="str"></MyProduct>
  </div>
</template>

<script>
// 引入
import MyProduct from './components/MyProduct.vue'
export default {
  data() {
    return {
      msg: "超级好吃的口水鸡",
      str:"好贵啊, 快来啊, 好吃",
    };
  },
  components: {
    MyProduct,
  },
};
</script>

