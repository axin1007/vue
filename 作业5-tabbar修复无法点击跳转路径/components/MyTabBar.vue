<template>
  <div class="my-tab-bar">
    <router-link
      :to="arr[i++]"
      style="text-decoration: none"
      class="tab-item"
      v-for="(item, index) in list"
      :key="index"
      :class="{ current: current == index }"
      @click="clickFn(index, item)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      arr: ['/myGoodList', '/mySearch', '/myInfo'],
      i: 0,
    }
  },
  // List 长度在 2 ~ 5 之间
  props: {
    list: {
      type: Array,
      default: () => {
        ;[]
      },
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          // val List传递过来的数据
          return true
        } else {
          return false
        }
      },
    },
  },
  methods: {
    clickFn(val, item) {
      this.current = val
      this.$emit('change', item.componentName)
    },
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  cursor: pointer;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
