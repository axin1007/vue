<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select> <br>
      <p v-show="!two">正在编辑的数据id为{{target + 1}}</p>
      <p v-show="!two">点击完成编辑，进入倒计时{{n}}s</p>
    </div>
    <div>
      <button @click="add(target)" >{{two ? "添加" : "点击完成修改"}}</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: JSON.parse(localStorage.getItem('arr1')) ,
      name:" ",
      age:0,
      sex:"男",
      two:true,
      target: "",
      n: "",
    }
  },  
  methods:{
    add(index){
      if(!this.name.trim()) {
        this.name ='';
        return alert("Please enter a name");
      } 
      if (this.two) {
         const obj = {name:this.name,  age:this.age, sex:this.sex }
         this.arr.push(obj)
         this.name = ""
      }else{
        this.arr[index].name = this.name
        this.arr[index].age = this.age
        this.arr[index].sex = this.sex
        let timer = setInterval(() => {
          this.n--
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          this.two = true
        }, 3000)
        this.name = ""
        this.age = 0
      }
     
    },
    del(index){
      this.arr.splice(index,1)
    },
    edit(index){
      this.two = false;
      this.name = this.arr[index].name;
      this.age = this.arr[index].age;
      this.sex = this.arr[index].sex;
      this.target = index
      this.n = 3
    }
  },
  watch:{
    arr:{
      deep:true,
      handler(val){
        localStorage.setItem("arr1",JSON.stringify(val || []) )
      }
    }
  }
  
}
</script>

<style scoped>
#app{
  margin-left: 20px;
}
 table,
        td,
        th {
            border: 1px solid skyblue;

            /* 合并相邻的边框 */
            /* border-collapse: collapse; */
            /* font-size: 14px; */
            text-align: center;
        }
</style>
