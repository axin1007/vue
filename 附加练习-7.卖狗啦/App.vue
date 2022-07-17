<template>
  <div>
    <Dog v-for="(item, index) in arr"
    :key="index"
    :imgurl="item.dogImgUrl"
    :dogname="item.dogName"
    ></Dog>
  </div>
</template>

<script>
import Dog from './components/Dog.vue'
export default {
  data() {
    return {
      // 1. 准备数据
      arr: [
        {
          dogImgUrl:
            "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://ts1.cn.mm.bing.net/th/id/R-C.566dddcba77c19b98f7d76cdd9c235fa?rik=xcN9G3K%2fRDwZOg&riu=http%3a%2f%2fpic4.58cdn.com.cn%2fzhuanzh%2fn_v2a8ec12233209407db9cb9567ebc5f8dd.jpg%3fw%3d750%26h%3d0&ehk=BRHOTgJnfHIoDtti6iMN5F5gOl%2bVTJldsrq97UM6ezc%3d&risl=&pid=ImgRaw&r=0",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.lKZcfEkffe2IU12C7fPEZwD6D6?pid=ImgDet&rs=1",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1393402212,1442295662&fm=199&app=68&f=JPEG?w=750&h=750&s=5A819041465737D41C1DE8BC0300E091",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://ts1.cn.mm.bing.net/th/id/R-C.378f099679e71d44e3730743306f7995?rik=AECkpKARbmRCxw&riu=http%3a%2f%2fscpic.chinaz.net%2ffiles%2fpic%2fpic9%2f201304%2fxpic10779.jpg&ehk=eC3MxHhZKHGIcSF%2b739WhvVBBMRU2pMIoNZjJMObNyQ%3d&risl=&pid=ImgRaw&r=0",
          dogName: "萨摩耶",
        },
      ],
    };
  },
  components: {
    Dog
  }
};
</script>