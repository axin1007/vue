<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getAllFn" :disabled="disabled">Get All</button>点击-查看控制台</button>
     <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bName" />
    <button @click="findFn">查询</button>
  </div>
</template>

<script>
// 目标1: 获取所有图书信息
// 1. 下载axios
// 2. 引入axios
// 3. 发起axios请求
import axios from 'axios'
// 所有请求的url前置可以去掉, 请求时, axios会自动拼接baseURL的地址在前面
axios.defaults.baseURL = "http://123.57.109.30:3006"


// 所有请求的url前置可以去掉, 请求时, axios会自动拼接baseURL的地址在前面
export default {
  data(){
    return{
      disabled: false,
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

      /* try {
        this.disabled = true;
        const res = await axios({
          url: "http://123.57.109.30:3006/api/getbooks",
        });
        this.disabled = false;
        console.log(res)
      } catch(e){
        this.disabled = false;
        console.log(e)
      } */
    },
    findFn(){
      axios({
        url:"api/getbooks",
      })
    }
  }
};
</script>