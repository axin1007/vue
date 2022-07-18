<template>
  <div>
   <Header @add="addFn"></Header>
   <Main :list="showList" @del="delFn"></Main>
   <Footer :remain="remain" @changeData="changeDataFn"></Footer>
  </div>
</template>

<script>
import "./assets/style/base.css"
import "./assets/style/index.css"

import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list2')) || [],
      getVal:""
    }
  },
  methods:{
    addFn(val){
      console.log("111")
      this.list.push({
        name:val,
        isDone:false,
        id:(this.list.length > 0 && this.list[this.list.length - 1].id + 1) || 100,
      })
    },
    delFn(id){
      const index = this.list.findIndex((item) => {item.id == id})
      this.list.splice(index, 1)
    },
    changeDataFn(val){
      this.getVal = val
    }
  },
  computed:{
    remain(){
      return this.list.filter((item) => !item.isDone).length
    },
    showList(){
      if(this.getVal == 'yes'){
        return this.list.filter((item) => item.isDone)
      } else if (this.getVal == 'no'){
        return this.list.filter((item) => !item.isDone)
      } else {
        return this.list
      }
    }
  },
  watch:{
    list:{
      deep:true,
      handler(val){
        localStorage.setItem('list2', JSON.stringify(val) || []);
      }
    }
  },
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>

</style>
