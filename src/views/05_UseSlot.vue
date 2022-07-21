<template>
  <Panel>
    <template v-slot:content="scope">
      <p>{{scope}}</p>
      <p>{{scope.row}}</p>
      <p>{{scope.row1}}</p>

    </template>
  </Panel>
</template>

<script>
import Panel from "../components/05/Panel.vue"
export default {
  name: "Demo05UseSlot",

  data() {
    return {};
  },
  components: {Panel},
};
</script>

<style scoped></style>
