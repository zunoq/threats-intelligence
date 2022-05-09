<template>
  <q-page class="flex flex-center">
    <div class="q-gutter-md">
      <BlurBgSquareLabel data="no" str="rl" />
      <OutlineSquareLabel data="osint" str="" />
      <RoundedLabel data="osint" str="" />
      <SquareLabel data="threat-report" color="primary" />
      <q-input
        v-model="text"
        label="Name"
        dark
        color="secondary"
        
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import BlurBgSquareLabel from "components/Others/BlurBgSquareLabel.vue";
import OutlineSquareLabel from "components/Others/OutlineSquareLabel.vue";
import RoundedLabel from "../components/Others/RoundedLabel.vue";
import SquareLabel from "../components/Others/SquareLabel.vue";
export default defineComponent({
  name: "ArsenalPage",
  components: {
    BlurBgSquareLabel,
    OutlineSquareLabel,
    RoundedLabel,
    SquareLabel,
  },
});
</script>
