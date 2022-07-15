<template>
  <div>
    <h2>国内网站粉丝数量：{{ num | money('万') }}</h2>
    <h2>外国网站粉丝数量：{{ num | money('千') }}</h2>
    <h2>时间：{{timer | formatTime('-')}}</h2>
    <h2>时间：{{timer | formatTime('/')}}</h2>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name:"App",
  data() {
    return {
      num: 1876986 ,
      timer: 1636450540055,
    }
  },
  filters:{
    money: (val,str) => {
    //  if(str == "万")  return  (val / 10000) + str
    //  if(str == "千")  return  (val / 1000) + str
    return str == "万" ?  (val / 10000) + str : (val / 1000) + str
    },
    // k: (val) => {
    //   return (val / 1000) + "千"
    // },
    formatTime: (val, str) => {
      return  str == "-" ? moment(val).format("YYYY-MM-DD") : moment(val).format("YYYY/MM/DD")
    }    
  }
}
</script>

<style>

</style>