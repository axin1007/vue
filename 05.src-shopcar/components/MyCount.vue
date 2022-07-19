<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="dataFromGoods.goods_count--" :disabled="dataFromGoods.goods_count <= 1">-</button>
    <input type="text" class="form-control inp" v-model="dataFromGoods.goods_count" >
    <button type="button" class="btn btn-light" @click="dataFromGoods.goods_count++">+</button>
  </div>
</template>

<script>
export default {
  props:{
    dataFromGoods:{
      type:Object,
      default:() => ({})
    }
  },
  /* watch:{
    dataFromGoods:{
      deep:true,
      handler(val){
        if(val.goods_count <= 0){
          val.goods_count = 1;
        }
      }
    }
  } */
  watch:{
   "dataFromGoods.goods_count":function(val){
     if(val <= 0){
       this.dataFromGoods.goods_count = 1;
     }
   } 
 }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn, .inp{
    transform: scale(0.9);
  }
}
</style>