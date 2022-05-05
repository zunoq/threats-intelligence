<template>
  <div
    :class="`bg-` + `${colors}`"
    class="label-container text-uppercase text-white"
  >
    {{ label }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SquareLabel",
  props: ["data", "color"],
  data() {
    return {
      label: this.data,
      colors: this.color,
    };
  },
});
</script>

<style scoped>
.label-container {
  display: inline-block;
  font-size: 12px;
  padding: 7px 23px;
}
</style>
