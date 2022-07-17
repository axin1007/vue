<template>
  <tr>
      <td><input type="checkbox" v-model="obj.checked"></td>
      <!-- <td><input type="checkbox" :checked="obj.checked" @change="handlerCheck(obj.name)"></td> -->
      <td>{{obj.name}}</td>
      <td>{{obj.price}}</td>
      <td>
        <input type="button" value="-" @click="obj.num--" :disabled='!obj.num'>
        <span id="num">  {{obj.num}}  </span>
        <input type="button" value="+" @click="obj.num++">
      </td>
      <td style="width: 100px">{{sum}}</td>
      <td><button @click="handlerDel(obj.name)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props:{
    obj:{
      type: Object,
      required: true,
      default:() => ({ })  //如果为空，还是返回空对象
    },
  },
  data() {
    return {
      
    };
  },
  methods:{ 
    handlerDel(val){
      this.$emit('del',val)
    },
   /*  handlerCheck(val){
      this.$emit("check",val)
    } */
  },
  computed:{
    sum(){
      return this.obj.price * this.obj.num
    }
  },
};
</script>

<style scoped>
  td{
    border: 1px solid skyblue;
    text-align: center;
  }
  #num{
    display: inline-block;
    width: 28px;
  }
</style>