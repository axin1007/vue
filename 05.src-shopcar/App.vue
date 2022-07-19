<template>
  <div id="app">
   <MyHeader 
     title="购物车案例"
     backgroundColor="skyblue"
     color="purple"
   ></MyHeader>
   <MyGoods 
     v-for="item in list" 
     :key="item.id" 
     :obj="item"
   ></MyGoods>
   <MyFooter></MyFooter>
  </div>
</template>

<script>

import MyHeader from "./components/MyHeader.vue"
import MyGoods from "./components/MyGoods.vue"
import MyFooter from "./components/MyFooter.vue"
export default {
  name: 'App',
  data() {
    return {
      list:[],
    }
  },
  created(){
    this.$axios({
      url:"/api/cart ",
    }).then((res) => {
      console.log(res);
      this.list = res.data.list;
    })
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  
}
</script>

<style>

</style>
