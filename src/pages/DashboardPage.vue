<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-md">
      <component
        :is="'ReportCard'"
        v-for="(report, idx) in reportsData"
        :data="report"
        :key="idx"
      />
      <component :is="'TopLabel'" :data="topLabelsData" />
      <component :is="'LineChart'" :data="lineChartData" />
      <component :is="'BarChart'" :data="barChartData" />
      <component :is="'PolarChart'" :data="polarAreaData" />
      <component :is="'ReportTable'" :data="entitiesList" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ReportCard from "../components/dashboard/ReportCard.vue";
import TopLabel from "../components/dashboard/TopLabel.vue";
import LineChart from "../components/chart/LineChart.vue";
import BarChart from "../components/chart/BarChart.vue";
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
      entitiesList: [
        {
          id: 1,
          type: { name: "report", icon: "report" },
          name: "Alert(TA14-353A1)",
          marking: "tlp:red",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: ["osint", "malware"],
          ratings: [10, 14, 51, 75, 30],
          confidenceLevel: "low",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "RISKIQ",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
        {
          id: 2,
          type: { name: "report", icon: "report" },
          name: "Alert(TA14-353A2)",
          marking: "tlp:blue",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: [],
          ratings: [0, 0, 4, 7, 3],
          confidenceLevel: "",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "[CONNECTOR] ALIENTVAULT",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
        {
          id: 3,
          type: { name: "report", icon: "report" },
          name: "CVE-2022-22965 ANALYZING THE EXPLOITATION OF SPRING4SHELL VULNERABILITY",
          marking: "tlp:white",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: ["avast", "zloader", "ransomeware", "backdoor"],
          ratings: [0, 1, 11, 0, 6],
          confidenceLevel: "strong",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "LoqMissQ",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
        {
          id: 4,
          type: { name: "report", icon: "report" },
          name: "[MITRE ATT&CK] QUIETSIEVE (S0686)",
          marking: "tlp:amber",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: ["avast", "zloader", "ransomeware", "backdoor"],
          ratings: [0, 1, 11, 0, 6],
          confidenceLevel: "strong",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "LoqMissQ",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
      ],
    };
  },
  mounted() {
    console.log("Dashboard");
  },
});
</script>
