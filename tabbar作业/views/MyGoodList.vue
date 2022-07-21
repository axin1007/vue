<template>
  <MyTable :arr="arr">
    <template #header>
      <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
    </template>
     <template #body="scope">
        <td style="width: 10%">{{scope.row.id}}</td>
        <td style="width: 40%">{{scope.row.goods_name}}</td>
        <td style="width: 10%">{{scope.row.goods_price}}</td>
        <td style="width: 30%">
          <el-tag
            type="danger"
            style="margin-left: 10px;"
            size="medium"
            :key="tag"
            v-for="tag in scope.row.tags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag,scope.row.tags)">
            {{tag}}
          </el-tag>
          <input
            style="width: 25%; margin-left: 20px; outline: none; border: 1px solid skyblue;"
            class="input-new-tag"
            v-if="scope.row.inputVisible"
            v-model="scope.row.inputValue"
            v-focus
            @keyup.enter="enterFn(scope.row)"
            @blur="scope.row.inputVisible = false"
          >
          </input>
          <el-button 
           type="success"
           v-else 
           style="display:inline-block; margin-top:5px" 
           class="button-new-tag" 
           size="small" 
           @click="scope.row.inputVisible = true"
          >
          + New Tag
          </el-button>
        </td>
        <td style="width: 10%">
          <button  
          :style="{
            backgroundColor: 'red', 
            color: 'white', 
            fontWeight: 'bold', 
            border: 'none'
          }"
          @click="delFn(scope.index)"
          >删除</button>
        </td>

     </template>
  </MyTable>
</template>

<script>
// 目标: 循环商品列表表格
// 1. 封装MyTable.vue 整体表格组件-一套标签和样式
// 2. axios请求数据
// 3. 传入MyTable组件里循环tr显示数据

// 目标: 展示tags标签
// 1. tags数组 - 某个td循环span使用文字
// 2. span设置bs的样式

// 目标: 删除数据
// 1. 删除按钮 - 点击事件
// 2. 作用域插槽把索引值关联出来了
// scope身上就有row和index
// 3. 删除中使用scope.index的索引值
// 4. 删除事件里删除数组里对应索引值的数据
import MyTable from "../components/MyTable.vue"
export default {
  name:"MyGoodsList",
  data() {
    return {
      arr:[],
    }
  },
  methods:{
    delFn(index){
      this.arr.splice(index, 1);
    },
    enterFn(obj){
      console.log(obj.inputValue)
      if(obj.inputValue.trim().length == 0){
        return alert('请输入数据')
      }
      obj.tags.push(obj.inputValue)
      obj.inputValue = ""
    },
    handleClose(tag,arr) {
      arr.splice(arr.indexOf(tag), 1);
    },
  },
  components: {MyTable},
  created(){
    this.$axios({
      url:"/api/goods",
    })
    .then(
      (res) => {
        this.arr = res.data.data
    })
  }
}
</script>

<style lang="less" scoped>
  .yellow {
    margin-right: 5px;
    background-color:yellow;
  }
 .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>