<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-md justify-start">
      <ReportCard :reports="reports" />
    </div>
    <div class="row q-col-gutter-md q-gutter-y-lg justify-start">
      <TopLabel :labels="labels" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ReportCard from "../components/dashboard/ReportCard.vue";
import TopLabel from "../components/dashboard/TopLabel.vue";
export default defineComponent({
  name: "DashboardPage",
  components: {
    ReportCard,
    TopLabel,
  },
  data() {
    return {
      reports: [
        {
          name: "Total Entities",
          statistics: 12800,
          trend: -28,
          icon: "equalizer",
        },
        {
          name: "Total Relationships",
          statistics: 1260000,
          trend: 32,
          icon: "account_tree",
        },
        {
          name: "Total Reports",
          statistics: 8890,
          trend: 5,
          icon: "description",
        },
        {
          name: "Total Observables",
          statistics: 552760,
          trend: 16,
          icon: "remove_red_eye",
        },
      ],
      labels: [
        {
          name: "Threat",
          number: 26170,
        },
        {
          name: "Osin",
          number: 175903,
        },
        {
          name: "Observe",
          number: 17700,
        },
        {
          name: "Arsenal",
          number: 4570000,
        },
        {
          name: "Malware",
          number: 26170,
        },
        {
          name: "Elf",
          number: 26170,
        },
        {
          name: "Mozi",
          number: 7850000,
        },
        {
          name: "Mirai",
          number: 54530,
        },
        {
          name: "qbot",
          number: 44130,
        },
      ],
    };
  },
});
</script>
