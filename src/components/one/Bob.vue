<template>
  <div>
    <h2>Bob</h2>
    <ul>
      <li><router-link to="/contacts/bob/blog">blog</router-link></li>
      <li><router-link to="/contacts/bob/fax">fax</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
