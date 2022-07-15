let arr = [{a:100}, {a:20} ,{a:-10}]

// reduce 简单来讲就是数组里面的一个遍历数组的方法，可以将所绑定的数组遍历一遍
// reduce方法，里面有两个参数，一个回调函数 和 一个初始值(初始值就是第一次调用回调函数的返回值；如果没有初始值则默认数组中第一个元素为第一次调用回调函数的返回值)
// 回调函数里面又包含4个参数：分别是 上一次的返回值 、 当前遍历到的元素 、当前处理元素的索引、 以及原数组
// 结论：所以reduce 经常用来求 数组间元素的和

// 案例一
const sum = arr.reduce((reValue, item,) => {
  return  reValue + item["a"]
} , 0)
console.log(sum)  // 110

// 案例二
/* let str='asdasdasdasdasdasd'
let newStr = str.split("")
function getTime(target){
  const times = newStr.reduce((reValue, item) => {
    return reValue + Boolean(item === target)
  },0)
  return console.log(target + "出现的次数为" + times)
}
getTime('d') */

let str='asdasdasdasdasdasd'
let arr1 = str.split("")
let obj = arr1.reduce((reValue, item) => {
  reValue[item] ? reValue[item]++ : reValue[item] = 1
  return reValue
},{})
console.log(obj)

// 案例三
// http://www.baidu.com?name=zhangsan&age=18&sex=nan#
// 解析出
// {name: 'zhangsan',age: 18, sex: 'nan' }
const getInfo =  (url) => {
    const start = url.indexOf('?'), 
    end = url.indexOf('#'),
    arr = url.slice(start + 1, end).split("&")
   return obj =  arr.reduce((reValue, item) => { 
      const [key, value] = item.split("=")  // 声明一个数组，用来接收转化为数组的 ["name","zhangsan"]
      reValue[key] = value  // reValue对象里面的name属性的值为"zhangsan"   name:"zhangsan"
      return reValue

    },{}) // 初始值为一个空对象，方便后面往里面添加元素
}
const url = 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#'
console.log(getInfo(url))
   
  //  案例4
/* let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}] */
// 把books 的数据统计出来
// ['Bible', 'Harry Potter','War and peace', 'Romeo and Juliet','The Lord of the Rings', 'The Shining']

 

