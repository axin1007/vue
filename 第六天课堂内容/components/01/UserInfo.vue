<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea></textarea>
    </div>
  </div>
</template>
<script>
export default {
  created(){
    console.log("created => userInfo")
  },
   destroyed(){
    console.log("destroyed => userInfo")
  }
};
</script>
