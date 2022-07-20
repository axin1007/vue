<template>
  <div>
    <el-input 
      width="25%"
      placeholder="搜索-书本名称" 
      v-model="bName" 
      @keyup.enter.native="keyupFn"
    >
    </el-input>
    <el-alert
      type="success"
      :title="res"
      v-show="!bName"
    >
    </el-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bName: ' ',
      res:'',
    }
  },
  methods:{
    keyupFn(){
      if(!this.bName.trim()) return alert('请输入书名')
      this.$axios({
        url:"/api/getbooks",
        params:{  // 路径参数
          bookname: this.bName,
        }
      })
      .then(
        (res) => {
          console.log(res)
          if(res.data.data.length == 0) return this.res = "没有找到您需要的书籍！！"
          this.res = res.data
             
        }
      )
      this.bName = ''  
    },
  }  
}
</script>
