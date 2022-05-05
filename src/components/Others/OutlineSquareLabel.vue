<template lang="">
  <div
    class="label-container text-center text-uppercase"
    :class="`text-` + `${handleLabel(string, label)}`"
  >
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
  font-size: 12px;
  padding: 4px 9px;
  border: 1px solid;
}
</style>
