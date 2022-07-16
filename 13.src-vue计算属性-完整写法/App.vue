<template>
  <div>
    <div>
      <span>姓:</span>
      <input type="text" v-model="firstName" />
    </div>
    <div>
      <span>名:</span>
      <input type="text" v-model="lastName" />
    </div>
    <!-- 需求
    1. 姓名 全称(fullName) 是由 姓(firstName) 和 名(lastName) 组成的, 就是相当于在输入姓和名的是时候 fullName 也要发生变化？？
     -->
    <div>
      <span>姓名:</span>
      <input type="text" v-model="fullName" />
    </div>
  </div>
</template>

<script>
// 问题: 给计算属性赋值 - 需要setter
// 解决:
/*
    完整语法:
    computed: {
        "计算属性名" (){}, // 只可以取值
        "计算属性名": {
            set(值){ // 设置值

            },
            get(){//取值
                return 值
            }
        }
    }
*/
export default {
  name: "App",
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed:{
    fullName:{
      set(val){
        this.firstName = val.split("-")[0] || ""
        this.lastName = val.split("-")[1] || ""
      },
      get(){
        if( this.firstName || this.lastName) return this.firstName + "-" + this.lastName
        return this.firstName + this.lastName
      }
    }
  }
};
</script>
