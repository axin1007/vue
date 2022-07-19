<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getAllFn" :disabled="disabled">Get All</button>点击-查看控制台</button>
     <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bName" />
    <button @click="findFn">查询</button>
     <p>3. 新增图书信息</p>
    <div>
        <input type="text" placeholder="书名" v-model="bookObj.bookname">
    </div>
    <div>
        <input type="text" placeholder="作者" v-model="bookObj.author">
    </div>
    <div>
        <input type="text" placeholder="出版社" v-model="bookObj.publisher">
    </div>
    <button @click="sendFn">发布</button>
  </div>
</template>

<script>
// 目标1: 获取所有图书信息
// 1. 下载axios
// 2. 引入axios
// 3. 发起axios请求

export default {
  data(){
    return{
      disabled: false,
      bName:"",
      bookObj: { // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
          bookname: "",
          author: "",
          publisher: ""
      },
    }
  },
  methods: {
    async getAllFn() {
     /* 
      axios({
        url: "http://123.57.109.30:3006/api/getbooks",
        type: "GET",
      })
      .then((res) => {
        console.log(res)
      })
      .finally(() => {
        // 不论成功失败都会进入
        this.disabled = true;
      })
      // axios() 返回一个promise 
      */

      try {
        this.disabled = true;
        const res = await this.$axios({
          url: "/api/getbooks",
        });
        this.disabled = false;
        console.log(res)
      } catch(e){
        this.disabled = false;
        console.log(e)
      }
    },
    findFn(){
      this.$axios({
        url:"/api/getbooks",
        methods:"GET",
        params:{  // 都会axios最终拼接到url?后面
           bookname: this.bName,
        },
      }).then((res) => {
        console.log(res.data)
      })
    },
    sendFn(){
      this.$axios({
        url:"/api/addbook",
        methods:"POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          ...this.bookObj,
          // 等同于下面
          // bookname: this.bookObj.bookname,
          // authour: this.bookObj.authour,
          // publisher: this.bookObj.publisher
        }, 
      }).then((res) => {
        console.log(res.data);
      })
    }
  }
};
</script>