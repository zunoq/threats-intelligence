<template lang="">
  <div class="col-12">
    <q-table
      dark
      flat
      :rows="rows"
      :columns="columns"
      v-model:pagination="pagination"
      row-key="name"
      hide-bottom
      :table-header-style="{ textTransform: 'uppercase' }"
    >
      <template #body="props">
        <q-tr :props="props">
          <q-td key="icon" class="text-center">
            <q-icon
              name="extension"
              size="sm"
              :color="props.row.status == 'active' ? `green` : 'red'"
            />
          </q-td>
          <q-td key="name" :props="props" class="text-capitalize">
            {{ truncate(props.row.name, 50) }}
          </q-td>
          <q-td key="type" :props="props" class="text-capitalize">
            {{ props.row.type }}
          </q-td>
          <q-td key="automaticTrigger" :props="props" class="text-capitalize">
            {{ props.row.automaticTrigger }}
          </q-td>
          <q-td key="message" :props="props" class="text-capitalize">
            {{ props.row.message.length }}
          </q-td>
          <q-td key="modifiedDate" :props="props">
            {{ dateconvert(props.row.modifiedDate) }}
          </q-td>
          <q-td key="action" :props="props">
            <q-btn flat round icon="layers_clear" color="secondary">
              <q-tooltip v-model="showing"> Clear this Connector </q-tooltip>
            </q-btn>
            <q-btn flat round icon="delete" color="secondary">
              <q-tooltip v-model="showing"> Clear this Connector </q-tooltip>
            </q-btn>
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
    label: "#",
    align: "center",
  },
  {
    name: "name",
    required: true,
    align: "left",
    label: "name",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "type",
    required: true,
    align: "left",
    label: "Type",
    field: (row) => row.type,
    sortable: true,
  },
  {
    name: "automaticTrigger",
    required: true,
    align: "left",
    label: "Automatic Trigger",
    field: (row) => row.automaticTrigger,
    sortable: true,
  },
  {
    name: "message",
    required: true,
    label: "Message",
    align: "left",
    field: (row) => row.message,
  },
  {
    name: "modifiedDate",
    required: true,
    label: "Modified",
    align: "left",
    field: (row) => row.modifiedDate,
  },
  {
    name: "action",
    required: true,
    label: "",
    align: "left",
    style: "width: 100px",
  },
];
const rows = [
  {
    id: 0,
    name: "LoqMissQ",
    status: "active",
    type: "Data Import",
    automaticTrigger: "not applicable",
    message: [],
    modifiedDate: 1650340161065,
    scope: "urhaus",
    state: '{"last_run": 1651401843}',
    listenQueue: "listen_949696ed-efa3-460f-be95-6538400b882c",
    pushQueue: "push_949696ed-efa3-460f-be95-6538400b882c",
    works: [
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 47621,
        totalOperations: 47621,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 50195,
        totalOperations: 50195,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 48340,
        totalOperations: 48340,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus 3",
        status: "complete",
        operationsCompleted: 49835,
        totalOperations: 49835,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
    ],
  },
  {
    id: 1,
    name: "LoqMissQ",
    status: "inactive",
    type: "Data Import",
    automaticTrigger: "automatic",
    message: [],
    modifiedDate: 1650340161065,
    scope: "urhaus",
    state: '{"last_run": 1651401843}',
    listenQueue: "listen_949696ed-efa3-460f-be95-6538400b882c",
    pushQueue: "push_949696ed-efa3-460f-be95-6538400b882c",
    works: [
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 47621,
        totalOperations: 47621,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 50195,
        totalOperations: 50195,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 48340,
        totalOperations: 48340,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus 3",
        status: "complete",
        operationsCompleted: 49835,
        totalOperations: 49835,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
    ],
  },
  {
    id: 2,
    name: "LoqMissQ",
    status: "inactive",
    type: "Data Import",
    automaticTrigger: "not applicable",
    message: [],
    modifiedDate: 1650340161065,
    scope: "urhaus",
    state: '{"last_run": 1651401843}',
    listenQueue: "listen_949696ed-efa3-460f-be95-6538400b882c",
    pushQueue: "push_949696ed-efa3-460f-be95-6538400b882c",
    works: [
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 47621,
        totalOperations: 47621,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 50195,
        totalOperations: 50195,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 48340,
        totalOperations: 48340,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus 3",
        status: "complete",
        operationsCompleted: 49835,
        totalOperations: 49835,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
    ],
  },
  {
    id: 3,
    name: "LoqMissQ",
    status: "inactive",
    type: "Data Import",
    automaticTrigger: "not applicable",
    message: [],
    modifiedDate: 1650340161065,
    scope: "urhaus",
    state: '{"last_run": 1651401843}',
    listenQueue: "listen_949696ed-efa3-460f-be95-6538400b882c",
    pushQueue: "push_949696ed-efa3-460f-be95-6538400b882c",
    works: [
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 47621,
        totalOperations: 47621,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 50195,
        totalOperations: 50195,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus run @ 2022-05-01 10:44:03",
        status: "complete",
        operationsCompleted: 48340,
        totalOperations: 48340,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
      {
        name: "URLhaus 3",
        status: "complete",
        operationsCompleted: 49835,
        totalOperations: 49835,
        startTime: 1650340161065,
        endTime: 16503401610,
        progress: 50,
        error: [],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    return {
      columns,
      rows,
    };
  },
  computed: {
    dateconvert() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD, YYYY, HH:mm:ss A");
      };
    },

    truncate() {
      return (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    },
  },
});
</script>
<style scoped lang=""></style>
