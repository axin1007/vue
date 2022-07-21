<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <!-- <h4>芙蓉楼送辛渐</h4> -->
      <slot name="title"></slot>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">
      <!-- <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p> -->
      <slot name="content" :row="defaultObj" :row1="defaultObj">默认内容</slot>
    </div>
  </div>
</template>

<script>
// 目标: 组件具名插槽使用 - 有名字的插槽
// 1. 组件内 <slot name="插槽的名字"></slot> 占位
// 2. 使用组件, v-slot:插槽的名字+template  ==> 可以让特定的内容在特定的插槽内展示

// 1. slot标签, 自定义属性和内变量关联
// 2. 使用组件, template配合v-slot:插槽名称="变量名"
// 变量名会收集slot身上属性和值形成对象

export default {
  name: "NameT",
  data() {
    return {
      isShow: false,
      defaultObj: {
        defaultOne: "无名氏",
        defaultTwo: "小传同学",
      },
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>
