<template>
  <div class="container">
    <Search 
    :style="{marginBottom: '10px', width: '25%'}"
    ></Search>
    <Content :list="list"></Content>
    <Add :style="{marginTop: '20px', width: '30%'}"></Add>
  </div>
</template>
s
<script>
  import Search from './components/Search.vue'
  import Content from './components/Content.vue'
  import Add from './components/Add.vue'
  export default {
    data(){
      return {
        list:[],
      }
    },
    created(){
      this.$axios({
        url:"/api/getbooks",
      }).then(
        (res) => {
          this.list = res.data.data
          // console.log(this.list)
        }
      )
    },
    components: {
      Search,
      Content,
      Add,
    }
  }
</script>
<style>
  .container{
    margin: 0 50px;
  }
</style>


