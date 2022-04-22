<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-md">
      <ReportCard
        v-for="(report, idx) in reportsData"
        :data="report"
        :key="idx"
      />
    </div>
    <div class="row q-col-gutter-md q-gutter-y-lg">
      <TopLabel :topLabels="topLabelsData" />
      <LineChart :data="lineChartData" />
    </div>
    <div class="row q-col-gutter-md q-gutter-y-lg">
      <BarChart :data="barChartData" />
      <PolarChart :data="polarAreaData" />
    </div>
    <div class="row q-col-gutter-md q-gutter-y-lg">
      <ReportTable :data="reportTableData" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ReportCard from "../components/dashboard/ReportCard.vue";
import TopLabel from "../components/dashboard/TopLabel.vue";
import LineChart from "../components/dashboard/LineChart.vue";
import BarChart from "../components/dashboard/BarChart.vue";
import ReportTable from "../components/dashboard/ReportTable.vue";
import PolarChart from "../components/chart/PolarChart.vue";
export default defineComponent({
  name: "DashboardPage",
  components: {
    ReportCard,
    TopLabel,
    LineChart,
    BarChart,
    ReportTable,
    PolarChart,
  },
  data() {
    return {
      reportsData: [
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
      topLabelsData: [
        {
          name: "malware",
          number: 26170,
        },
        {
          name: "blog-post",
          number: 175903,
        },
        {
          name: "bica",
          number: 17700,
        },
        {
          name: "elf",
          number: 4570000,
        },
        {
          name: "ransomeware",
          number: 26170,
        },
        {
          name: "osint",
          number: 26170,
        },
        {
          name: "firewall",
          number: 7850000,
        },
        {
          name: "spyware",
          number: 54530,
        },
        {
          name: "goodkit",
          number: 44130,
        },
      ],
      barChartData: {
        dataValues: [
          36000, 21414, 21414, 10375, 36540, 21511, 12558, 74665, 50000, 47750,
        ],
        labels: [
          "Cobalt Strike",
          "Qakbot",
          "Egregor",
          "Axiom",
          "TA505",
          "TrickBot",
          "Sector",
          "Lazarus",
          "APT28",
          "Locky",
        ],
      },
      lineChartData: {
        dataValues: [3, 0, 400, 0, 0, 0, 0, 0, 0, 0, 0, 6000, 0, 0],
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      polarAreaData: {
        dataValues: [36000, 21414, 21414, 10375, 3540, 50000, 57444],
        labels: [
          "Cobalt Strike",
          "Qakbot",
          "Egregor",
          "Axiom",
          "TA505",
          "Ea",
          "Trg",
        ],
      },
      reportTableData: [
        {
          icon: "description",
          name: "Report",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "bug_report",
          name: "Ice cream sandwich",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "description",
          name: "Eclair",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "description",
          name: "Cupcake",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "description",
          name: "Gingerbread",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "bug_report",
          name: "Jelly bean",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "description",
          name: "Lollipop",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "description",
          name: "Honeycomb",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "description",
          name: "Donut",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
        {
          icon: "description",
          name: "KitKat",
          description: "ThreatFox IOCs for 2021-12-17",
          reportTypes: "MISP-EVENT",
          author: "ABUSE.CH",
          date: 1649817575006,
          marking: "TLP:AMBER",
        },
      ],
    };
  },
  mounted() {
    console.log("Dashboard");
  },
});
</script>
