<template>
   <div class="add">
     <el-input style="margin-bottom: 30px;" v-model="bookname" placeholder="书名" :readonly="yon"></el-input>
     <el-input style="margin-bottom: 30px;" v-model="author" placeholder="作者" :readonly="yon"></el-input>
     <el-input style="margin-bottom: 30px;" v-model="publisher" placeholder="出版社" :readonly="yon"></el-input>
     <el-button type="primary" @click="addFn">新增</el-button>
   </div>
</template>

<script>
export default {
  data() {
    return {
      bookname:"",
      author: "",
      publisher: "",
      yon: false,
    }
  },
  created(){
    this.$bus.$on('send',(val) => {
      this.bookname = val.bookname
      this.author = val.author
      this.publisher = val.publisher
      this.yon = true;
    })
    
  },
  methods:{
    addFn(){
      this.yon = false;
      if(!this.bookname.trim() || !this.author.trim() || !this.publisher.trim()){
        return alert("新增图书三项都不能为空哦！！")
      }
      this.$axios({
        url:'/api/addbook',
        method: 'POST',
        data: {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        }
      })
      .then(
        (res) => {
          alert(res.data.msg)
        }
      )
    }
  }
}
</script>

<style scoped>
   .add {
     margin-left: -50px;
   }
</style>