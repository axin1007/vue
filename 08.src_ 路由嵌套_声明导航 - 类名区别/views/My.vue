<template>
  <div>
    <p>我的收藏</p>
    <p>我的历史记录</p>
    <p>{{$route.query.username}}</p>
  </div>
</template>

<script>
export default {
  name: "AA",
  created(){
    // console.log(this.$route)
  }
};
</script>

<style></style>
