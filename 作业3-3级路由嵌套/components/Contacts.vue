<template>
  <div>
    <ul>
      <li><router-link to="/contacts/acontacts">All-contacts</router-link></li>
      <li><router-link to="/contacts/alice">Alice</router-link></li>
      <li><router-link to="/contacts/bob">Bob</router-link></li>
    </ul>
    <button @click="btnFn(arr[Math.floor(Math.random() * 3)])">随机显示</button>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["/contacts/acontacts", "/contacts/alice", "/contacts/bob"],
    };
  },
  methods: {
    btnFn(targetPath) {
      this.$router.push({
        path: targetPath,
      });
    },
  },
};
</script>

<style scoped></style>
