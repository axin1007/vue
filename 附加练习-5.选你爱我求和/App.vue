<template>
  <div>
    <span v-for="(item, index) in arr" :key="index">
      <input type="checkbox" v-model="checkedArr" :value="item" />
      <span>{{item}}</span>
    </span>
    <p>你选中的元素，累加的值和为：{{getSum}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkedArr: [],
    }
  },
  computed:{
    getSum(){
      return this.checkedArr.reduce((reValue, item) => {
        reValue = reValue + item; 
        return reValue; 
      }, 0);
    }
  }
}
</script>

<style scoped>
  input {
    margin: 0 3px 0 8px;
  }
</style>