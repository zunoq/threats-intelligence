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
      :table-header-style="{ textTransform: 'uppercase' }"
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
            {{ truncate(props.row.name, 50) }}
          </q-td>
          <q-td key="author" :props="props" class="text-capitalize">
            {{ props.row.author }}
          </q-td>
          <q-td key="labels" :props="props" auto-width>
            <div v-if="props.row.labels.length != 0">
              <RoundedLabel
                v-for="(label, idx) in props.row.labels"
                :key="idx"
                :data="label"
                str=""
                class="q-ma-xs"
              />
            </div>
            <div v-else>
              <RoundedLabel data=" no label" str="" class="text-disabled" />
            </div>
          </q-td>
          <q-td key="credate" :props="props">
            {{ dateconvert(props.row.credate) }}
          </q-td>
          <q-td key="marking" :props="props">
            <div>
              <MarkingLabel :data="props.row.marking" />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import MarkingLabel from "../Others/MarkingLabel.vue";
import RoundedLabel from "../Others/RoundedLabel.vue";
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

export default defineComponent({
  props: ["data"],
  components: {
    MarkingLabel,
    RoundedLabel,
  },
  data() {
    return {
      rows: this.data,
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

    truncate() {
      return (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    },
  },
  updated() {
    console.log(this.selected.length);
  },
});
</script>
<style scoped lang="scss"></style>
