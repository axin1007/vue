<template>
  <div>
    <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
import Com from './components/Com'
export default {
  data(){
    return {
      show: true
    }
  },
  components: {
    [Com.name]: Com // 对象里的key是变量的话[]属性名表达式
    // "ComNameHaHa": Com
  }
}
</script>