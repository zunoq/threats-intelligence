<template lang="">
  <div>
    <q-table
      dark
      flat
      :title="`${apiRoot.name}` + `${collection.title}` + ' Object'"
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
          <q-td key="type" :props="props" auto-width>
            {{ props.row.type }}
          </q-td>
          <q-td key="id" :props="props" auto-width>
            {{ props.row.id }}
          </q-td>
          <q-td key="name" :props="props" auto-width>
            {{ props.row.name }}
          </q-td>
          <q-td key="labels" :props="props" auto-width>
            <RoundedLabel
              v-for="(label, idx) in props.row.labels"
              :key="idx"
              :data="label"
              str=""
            />
          </q-td>
          <q-td key="created" :props="props" auto-width>
            {{ dateconvert(props.row.created) }}
          </q-td>
          <q-td key="action" :props="props" auto-width>
            <q-btn
              flat
              round
              icon="delete"
              color="secondary"
              @click.stop="deleteObject(props.row)"
            >
              <q-tooltip> Delete this Object </q-tooltip>
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
import Service from "../../services/rest.service";
import RoundedLabel from "../Others/RoundedLabel.vue";
const columns = [
  {
    name: "type",
    required: true,
    label: "type",
    align: "left",
    field: (row) => row.type,
    sortable: true,
  },
  {
    name: "id",
    required: true,
    label: "id",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "labels",
    required: true,
    label: "Labels",
    align: "left",
    field: (row) => row.labels,
    sortable: true,
  },
  {
    name: "created",
    required: true,
    label: "Created",
    align: "left",
    field: (row) => row.created,
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
  components: { RoundedLabel },
  props: ["data"],
  data() {
    return {
      rows: [],
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
      this.$q.localStorage.set("object", row);
      this.$router.push(
        "/threats/" +
          this.apiRoot.name +
          "/" +
          this.collection.id +
          "/" +
          row.id
      );
    },
    deleteObject(row) {
      Service.delete(`/server/apiroots/${this.apiRoot.name}/${this.collection.id}/${row.id}`);
    },
  },
  setup() {
    const $q = useQuasar();
    const apiRoot = $q.localStorage.getItem("apiRoot");
    const collection = $q.localStorage.getItem("collection");
    return { apiRoot, collection };
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
