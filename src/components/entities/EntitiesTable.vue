<template>
  <div class="">
    <q-table
      dark
      flat
      :rows="rows"
      :columns="columns"
      v-model:pagination="pagination"
      v-model:selected="selected"
      selection="multiple"
      row-key="name"
      hide-bottom
      :table-header-style="{ textTransform: 'uppercase'}"
    >
      <template #body="props">
        <q-tr :props="props" @click="onRowClick(props.row)">
          <q-td key="checkbox" auto-width>
            <q-checkbox
              v-model="props.selected"
              :option="(value = props.name)"
              dark
            />
          </q-td>
          <q-td label="">
            <q-icon :name="props.row.type.icon" size="md" color="secondary" />
          </q-td>
          <q-td key="name" :props="props" class="text-capitalize">
            {{ props.row.type.name }}
          </q-td>
          <q-td key="name" :props="props" class="text-capitalize">
            {{ props.row.name }}
          </q-td>
          <q-td key="author" :props="props" class="text-capitalize">
            {{ props.row.author }}
          </q-td>
          <q-td key="labels" :props="props" auto-width>
            <div v-if="props.row.labels.length != 0">
              <span
                class="q-mx-xs"
                v-for="(label, idx) in props.row.labels"
                :key="idx"
              >
                <q-badge :color="label" outline rounded> {{ label }}</q-badge>
              </span>
            </div>
            <div v-else>
              <span class="q-mx-xs">
                <q-badge color="white" outline rounded> no label</q-badge>
              </span>
            </div>
          </q-td>
          <q-td key="credate" :props="props">
            {{ dateconvert(props.row.credate) }}
          </q-td>
          <q-td key="marking" :props="props">
            <q-chip
              dark
              square
              :color="`${handleMarking(props.row.marking)}`"
              class="marking text-uppercase text-center"
              :class="props.row.marking == 'tlp:white' ? 'text-black' : ' '"
            >
              {{ props.row.marking }}
            </q-chip>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { date } from "quasar";
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
    marking: "tlp:red",
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
    marking: "tlp:blue",
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
    marking: "tlp:white",
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
  data() {
    return {
      pagination: {
        page: 1,
        rowsPerPage: 0, // 0 means all rows
      },
    };
  },
  setup() {
    const selected = ref([]);
    return {
      selected,
      columns,
      rows,
    };
  },
  methods: {
    onRowClick(row) {
      console.log("clicked on", row);
      this.$q.localStorage.set("report", row);
      this.$router.push("/entities/reports/" + row.id);
    },
  },
  computed: {
    dateconvert() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD, YYYY");
      };
    },
    handleMarking() {
      return (val) => {
        return val.slice(4, val.length);
      };
    },
  },
  updated() {
    console.log(this.selected.length);
  },
});
</script>
<style lang="scss" scoped>
.marking {
  padding: 5px 10px;
}
.q-chip {
  border-radius: 0px;
  font-size: 12px;
  height: 20px;
  width: 90px;
  .q-chip__content {
    display: block;
  }
}
</style>
