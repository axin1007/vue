<template>
  <div>
    <Panel></Panel>
    <Panel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </Panel>
    <Panel><img src="../assets/mm.gif" alt=""></Panel>
  </div>
</template>

<script>
import Panel from "../components/03/Panel.vue"
export default {
  name: "Demo03UseSlot",

  data() {
    return {};
  },
  components: {
    Panel
  },
};
</script>

<style scoped></style>
