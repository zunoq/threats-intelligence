<template lang="">
  <div>
    <q-table
      dark
      flat
      title="API ROOTS"
      :rows="apiRoot"
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
          <q-td key="name" :props="props" auto-width>
            {{ props.row.name }}
          </q-td>
          <q-td key="title" :props="props" auto-width>
            {{ props.row.title }}
          </q-td>
          <q-td key="description" :props="props" auto-width>
            {{ props.row.description }}
          </q-td>
          <q-td key="max_content_length" :props="props" auto-width>
            {{ props.row.max_content_length }}
          </q-td>
          <q-td key="action" :props="props" auto-width>
            <q-btn flat round icon="brush" color="secondary" class="q-mr-md">
              <q-tooltip v-model="showing"> Edit this Root </q-tooltip>
            </q-btn>
            <q-btn flat round icon="delete" color="secondary">
              <q-tooltip v-model="showing"> Delete this Root </q-tooltip>
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { date, Notify } from "quasar";
import restService from "../../services/rest.service";
const columns = [
  {
    name: "name",
    required: true,
    label: "NAME",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "title",
    required: true,
    label: "TITLE",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "description",
    required: true,
    label: "DESCRIPTION",
    align: "left",
    field: (row) => row.description,
    sortable: true,
  },
  {
    name: "max_content_length",
    required: true,
    label: "MAX CONTENT LENGTH",
    align: "left",
    field: (row) => row.max_content_length,
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
  components: {},
  props: ["data"],
  data() {
    return {
      apiRoot: [],
      columns,
      pagination: {
        page: 1,
        rowsPerPage: 0, // 0 means all rows
      },
    };
  },
  methods: {
    onRowClick(row) {
      this.$router.push("/threats/" + row.name);
    },
  },
  computed: {
    getFirstLetter() {
      return (str) => {
        return str.substr(0, 1);
      };
    },
    truncate() {
      return (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    },
    dateconvert() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD, YYYY");
      };
    },
  },
  watch: {
    data: {
      handler(data) {
        this.apiRoot = [...data];
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
