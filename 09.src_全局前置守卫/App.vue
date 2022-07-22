<template>
  <div>
    <h1>App组件</h1>
    <a href="#/home">首页</a>&nbsp;
    <a href="#/movie">电影</a>&nbsp;
    <a href="#/about">关于</a>&nbsp;
    <component :is="comName"></component>
  </div>
</template>

<script>
import Movie from "./views/Find.vue";
import Home from "./views/My.vue";
import About from "./views/Part.vue";
export default {
  name: "DemoApp",
  data() {
    return {
      comName: "",
    };
  },
  components: {
    Movie,
    Home,
    About,
  },
  mounted() {
    const that = this;
    window.onhashchange = function () {
      console.log("===", location.hash);
      // 有路径 找组件
      // #/movie
      // #/home
      // #/about
      switch (location.hash) {
        case "#/movie":
          that.comName = "Movie";
          break;
        case "#/home":
          that.comName = "Home";
          break;
        case "#/about":
          that.comName = "About";
          break;
      }
    };
  },

  methods: {},
};
</script>

<style scoped></style>