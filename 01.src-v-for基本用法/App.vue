<template>
  <div>
    <!-- 语法1:
      v-for="(值变量名, 索引变量名) in 目标结构"
      口诀: 想要谁循环就放到谁身上

      需求：将数组 ['zhangsan', 'lisi', 'wangwu', 'dlrb'] 
      属性key: 唯一值 类型：string/number 作用是提高性能
     -->
    <p>学生姓名</p>
    <ul>
      <li></li>
    </ul>
    
    <!-- 
    需求2: 将学生的具体信息渲染到页面上
    [ { id: 1001, name: "孙悟空", sex: "男", hobby: "吃桃子", },
      { id: 1002, name: "猪八戒", sex: "男", hobby: "背媳妇", }, 
    ], -->

    <!-- 
    需求3: 将老师信息展示到页面上
    {  name: "小黑", age: 18, class: "1期", }
     -->

    <!-- 需求4: 遍历整数 10 -->
  </div>
</template>

<script>
export default {
  name: "Demo01VFor",
  data() {
    return {};
  },
};
</script>
