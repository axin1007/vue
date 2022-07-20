<template>
  
  <el-table
    :data="list"
    style="width: 100%;"
    border
    height="220">
    <el-table-column
      fixed
      prop="id"
      label="序号"
    >
    </el-table-column>
    <el-table-column
      prop="bookname"
      label="书名"
    >
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
    >
    </el-table-column>
    <el-table-column
      prop="publisher"
      label="出版商"
    >
    </el-table-column>
    <el-table-column
      label="操作"
    >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="delFn(scope.row.id)">删除</el-button>
        <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
      </template>
    </el-table-column>
  </el-table>  
</template>

<script>
  export default {
    props: {
      list:{
        type: Array,
        default: () =>{[]},
      }
    },
    
    methods: {
      delFn(target){
        this.$axios({
          url:"/api/delbook",
          params:{
            id: target,
          }
        })
        .then(
          (res) => {
            console.log(res)
            alert(res.data.msg)
          }
        )
      },
      handleClick(row) {
        this.$bus.$emit('send',row)
      }
    },
  }
</script>

<style scoped>
  
</style>