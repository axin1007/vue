<template>
  <div class="my_div">
    <img :src="imgurl" alt="" />
    <p :style="{ backgroundColor: colorStr }" @click="btn(dogname)">{{ dogname }}</p>
  </div>
</template>

<script>
export default {
  props: ["imgurl", "dogname"],
  data() {
    return {
      colorStr: "",
    };
  },
  methods: {
    btn(dogname) {
      this.colorStr = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      this.$emit("getName", dogname);
    },
  },
};
</script>

<style scoped>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
.my_div p {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0 ;
}
</style>