<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li 
      v-for="(item,index) in arr" 
      :key="index">{{item.name}} 
      <button @click="buy(index)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item,index) in arr" :key="index">
        <th>{{index + 1}}</th>
        <th>{{item.name}}</th>
        <th>{{item.price}}</th>
        <th>{{item.count}}</th>
        <th>{{sum(index)}}</th>
      </tr>
    </table>
    <p>总价格为:{{all}} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods:{
    buy(index){
      this.arr[index].count++;
    },
     sum(index){
       return this.arr[index].count * this.arr[index].price
    }
  },
  computed:{
    all(){
      return this.arr.reduce((reValue, item) => {
        reValue = reValue + +(item.count *  item.price)
        return reValue
      }, 0)
    } 
  }
}
</script>
<style scoped>
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