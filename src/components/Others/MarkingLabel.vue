<template lang="">
  <div>
    <div class="label-container" :class="`bg-` + `${handleMarking(label)}`">
      <div
        class="text text-uppercase text-center"
        :class="label == 'tlp:white' ? 'text-grey-10' : ' '"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: ["data"],
  data() {
    return {
      label: this.data,
    };
  },
  computed: {
    handleMarking() {
      return (val) => {
        return val.slice(4, val.length);
      };
    },
  },
});
</script>
<style scoped lang="scss">
.label-container {
  position: relative;
  padding: 1px 14px;
  font-size: 12px;
  max-width: 90px;
  max-height: 20px;
}
</style>
