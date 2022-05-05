<template lang="">
  <div class="label-container text-center text-uppercase">
    <div
      class="label-bg"
      :class="`bg-` + `${handleLabel(string, label)}`"
    ></div>
    <div class="label-text" :class="`text-` + `${handleLabel(string, label)}`">
      {{ label }}
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: ["data", "str"],
  data() {
    return {
      label: this.data,
      string: this.str,
    };
  },
  computed: {
    handleLabel() {
      return (str, val) => {
        if (str.length > 0) {
          return `${str}` + `-` + `${val}`;
        } else {
          return val;
        }
      };
    },
  },
});
</script>
<style scoped lang="scss">
.label-container {
  display: inline-block;
  position: relative;
  font-size: 12px;
  padding: 4px 9px;
  min-width: 85px;
  // border: none;
  .label-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    width: 100%;
    height: 100%;
  }
}
</style>
