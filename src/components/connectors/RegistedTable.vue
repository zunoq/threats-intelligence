<template lang="">
  <div class="col-12">
    <q-table dark flat bordered class="bg-primary" :rows="rows" @row-click="onRowClick" />
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
const columns = [
  {
    name: "icon",
    label: "",
    align: "center",
  },
  {
    name: "type",
    required: true,
    label: "Type",
    align: "left",
    field: (row) => row.type,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    align: "left",
    label: "Name",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "author",
    required: true,
    align: "left",
    label: "Author",
    field: (row) => row.author,
    sortable: true,
  },
  {
    name: "labels",
    required: true,
    label: "Labels",
    align: "left",
    field: (row) => row.labels,
  },
  {
    name: "credate",
    required: true,
    label: "Creation Date",
    align: "left",
    field: (row) => row.credate,
  },
  {
    name: "marking",
    required: true,
    label: "Marking",
    align: "left",
    field: (row) => row.marking,
  },
];

const rows = [
  {
    id: 1,
    type: { name: "report", icon: "report" },
    name: "Alert(TA14-353A1)",
    marking: "tlp-red",
    standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
    otherIDs: [
      "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
      "report--e5a3759f-0a92-4315-988d-70e42952a488",
    ],
    author: "RISKIQ",
    revoked: "no",
    labels: [],
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
    marking: "tlp-blue",
    standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
    otherIDs: [
      "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
      "report--e5a3759f-0a92-4315-988d-70e42952a488",
    ],
    author: "RISKIQ",
    revoked: "no",
    labels: ["elf", "zloader"],
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
    id: 3,
    type: { name: "report", icon: "report" },
    name: "Alert(TA14-353A3)",
    marking: "tlp-white",
    standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
    otherIDs: [
      "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
      "report--e5a3759f-0a92-4315-988d-70e42952a488",
    ],
    author: "RISKIQ",
    revoked: "no",
    labels: ["avast", "zloader", "ransomeware", "backdoor"],
    platformcredate: 1650340161065,
    credate: 1650340193318,
    moddate: 1650340224516,
    creator: "RISKIQ",
    processStatus: "disabled",
    description:
      "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
    reportTypes: "threat-report",
  },
];
export default defineComponent({
  setup() {
    return {
      columns,
      rows,
    };
  },
  methods: {
    onRowClick(evt, row) {
      console.log("clicked on", row);
    },
  },
});
</script>
<style lang=""></style>
