<template>
  <div>
      <table
      border="1"
      width="700"
      style="border-collapse: collapse"
    >
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="allCheck"/> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
        <List 
          v-for="(item, index) in goodList"
          :key="index"
          :obj="item"
          @del="delFn"
        >
        </List>
      </thead>
      <tbody>
        
      </tbody>
      <tfoot>
        <tr>
          <td>合计: {{getAllSum}}</td>
          <td colspan="5"></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  data() {
    return {
        goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
      allSum:'',
    }
  },
  components:{
    List,
  },
  computed:{
    getAllSum(){
      return this.goodList.reduce((reValue,item) => {
        reValue = reValue + item.price * item.num 
        return reValue
      }  , 0)  
    },
    allCheck:{
      // set类似于监听事件，只要input框值发生变化了就会触发
      // val参数相当于input的 checked属性值 ，可以使用set(val)方法用来控制 其它的复选框 与之同步
      // set(val){  console.log(val)  },

      // get()方法里面返回的是复选框的选中状态，其它的复选框可以在这里面对其控制是否选中状态
      // get(){ return true}

      set(val){
        this.goodList.forEach(item => item.checked = val)
      },
      get(){
        if(this.goodList.length == 0) return false
        return this.goodList.every(item => item.checked)
      }
    }
  },
  methods:{
    // 全选
    // checkAll(){
    //   if(this.allCheck){
    //     this.goodList.forEach((item) => item.checked = true)
    //   }else{
    //     this.goodList.forEach((item) => item.checked = false)
    //   }
    // },
    
    // 删除单个
    delFn(name){
      this.goodList = this.goodList.filter(item => item.name != name )
    },
    // 单选
   /* 
    checkFn(name){
      this.goodList.forEach((item) => {
        if(item.name == name){
          item.checked = true
        }
      })

      const time = this.goodList.reduce((reValue,item) => {
        reValue = reValue + Boolean(item.checked) 
        return reValue
      },0)

      if(time == this.goodList.length){
        this.allCheck = true
      } else{
        this.allCheck =false
      }   
    } 
    */
  }
}
</script>

<style>
   table {
     margin-left: 20px;
   }
   table,th{
     border: 1px solid skyblue !important;
     text-align: center;
   }
</style>