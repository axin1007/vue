<template>
  <div>
    <Life v-if="isShow"></Life>
    <button @click="isShow = false">销毁</button>
  </div>
</template>

<script>
import Life from "./components/Life.vue";
export default {
  data() {
    return {
      isShow: true,
    }
  },
  components:{
    Life,
  }
}
</script>

<style>

</style>