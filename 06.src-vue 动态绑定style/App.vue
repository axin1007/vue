<template>
  <div>
    <!-- 动态绑定style 语法 v-bind:style="对象" 
         v-bind:style = '{css属性名: 值}'-->
    <p v-bind:style="{ color : 'red' }">vue 动态绑定style</p>
    <!-- 需求： 点击按钮 切换字体大小 -->
    <p 
    v-bind:style='{
      color:"green",
      backgroundColor: "yellow",
      fontSize: fSize + "px",
    }'
    >
    vue 动态绑定style111
    </p>
    <button @click="fSize = 16">16px</button>
    <button @click="fSize = 32">32px</button>
    <button @click="fSize = 48">48px</button>
  </div>
</template>
<script>
export default {
  name: "VueStyle",
  data() {
    return {
      fSize: 30,
    };
  },
  methods: {},
};
</script>
