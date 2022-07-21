<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>
            <slot :row="item">
              <!-- 默认值给上，如果使用组件不自定义标签显示默认文字 -->
              {{item.headImgUrl}}
            </slot>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    arr:Array
  }
};
</script>
