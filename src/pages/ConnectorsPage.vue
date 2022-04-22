<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-md">
      <StatisticsBar />
      <RegistedTable />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import StatisticsBar from "../components/connectors/StatisticsBar.vue";
import RegistedTable from "../components/connectors/RegistedTable.vue";

export default defineComponent({
  name: "ConnectorsPage",
  components: { StatisticsBar, RegistedTable },
});
</script>
