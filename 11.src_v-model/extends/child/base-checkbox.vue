<template>
  <div class="radio">
    <div class="radioGroup">
      <div class="radioItem">
        <div class="radioBox"></div>
        <div class="name">选项1</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RadioT",
  data() {
    return {
      options: [
        {
          value: 0,
          name: "选项1",
        },
        {
          value: 1,
          name: "选项2",
        },
        {
          value: 2,
          name: "选项3",
        },
        {
          value: 3,
          name: "选项4",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style>
.left,
.right,
.radioItem,
.radioBox,
.name {
  display: inline-block;
}
.radioItem,
.name {
  margin-left: 10px;
}
.radioBox {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid #16cbf1;
}
.checked {
  background-color: #16cbf1;
}
</style>
