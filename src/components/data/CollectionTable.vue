<template lang="">
  <div>
    <q-table
      dark
      flat
      :title="`${apiRoot.name}` + ' collections'"
      title-class="text-uppercase text-accent"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
      hide-bottom
      :table-header-style="{ textTransform: 'uppercase' }"
    >
      <template #body="props">
        <q-tr
          :props="props"
          @click="onRowClick(props.row)"
          class="cursor-pointer"
        >
          <q-td key="id" :props="props" auto-width>
            {{ props.row.id }}
          </q-td>
          <q-td key="title" :props="props" auto-width>
            {{ props.row.title }}
          </q-td>
          <q-td key="can_read" :props="props" auto-width>
            <BlurBgSquareLabel :data="props.row.can_read" str="" />
          </q-td>
          <q-td key="can_write" :props="props" auto-width>
            <BlurBgSquareLabel :data="props.row.can_write" str="" />
          </q-td>
          <q-td key="action" :props="props" auto-width>
            <q-btn flat round icon="brush" color="secondary" class="q-mr-md">
              <q-tooltip> Edit this Root </q-tooltip>
            </q-btn>
            <q-btn flat round icon="delete" color="secondary">
              <q-tooltip> Delete this Root </q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { date, Notify, useQuasar } from "quasar";
import BlurBgSquareLabel from "../Others/BlurBgSquareLabel.vue";
const columns = [
  {
    name: "id",
    required: true,
    label: "id",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: "title",
    required: true,
    label: "title",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "can_read",
    required: true,
    label: "Can Read",
    align: "center",
    field: (row) => row.can_read,
    sortable: true,
  },
  {
    name: "can_write",
    required: true,
    label: "can write",
    align: "center",
    field: (row) => row.can_write,
    sortable: true,
  },
  {
    name: "action",
    required: true,
    label: "",
    align: "right",
    sortable: true,
  },
];
export default defineComponent({
  name: "ApiRootTable",
  components: { BlurBgSquareLabel },
  props: ["data"],
  data() {
    return {
      rows: this.data,
      columns,
      pagination: {
        page: 1,
        rowsPerPage: 0, // 0 means all rows
      },
    };
  },
  methods: {
    onRowClick(row) {
      console.log("clicked on", row);
      this.$q.localStorage.set("collection", row);
      this.$router.push("/threats/" + this.apiRoot.name + "/" + row.id);
    },
  },
  setup() {
    const $q = useQuasar();
    const apiRoot = $q.localStorage.getItem("apiRoot");
    return { apiRoot };
  },
  computed: {
    truncate() {
      return (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    },
    dateconvert() {
      return (timeStamp) => {
        if (typeof timeStamp == "integer")
          return date.formatDate(timeStamp, "MMM DD, YYYY");
        else {
          return date.formatDate(
            new Date(timeStamp),
            "MMM DD, YYYY, HH:mm:ss A"
          );
        }
      };
    },
  },
  watch: {
    data: {
      handler(data) {
        this.rows = [...data];
      },
    },
  },
  updated() {
    console.log(this.data);
  },
});
</script>
<style scoped lang="scss">
.my-card {
  max-width: 400px;
  .card-title {
    padding: 12px 16px 8px 16px;
  }
}
</style>
