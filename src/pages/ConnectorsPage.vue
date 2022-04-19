<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-md">
      <StatisticsBar />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import StatisticsBar from "../components/connectors/StatisticsBar.vue";
export default defineComponent({
  name: "ConnectorsPage",
  components: { StatisticsBar },
});
</script>
