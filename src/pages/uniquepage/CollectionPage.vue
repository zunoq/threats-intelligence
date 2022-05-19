<template>
  <q-page class="q-pa-xl">
    <div>
      <q-table
        dark
        flat
        :title="`${collection.title}'s` + ' Object'"
        title-class=" text-accent"
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
              <div>
                <q-btn
                  flat
                  round
                  icon="delete"
                  color="secondary"
                  @click.stop="deleteObject(props.row)"
                >
                  <q-tooltip> Delete this Object </q-tooltip>
                </q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-btn
      unelevated
      round
      color="accent"
      size="lg"
      icon="add"
      class="add-btn"
      @click="addObject()"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { date, Notify, useQuasar } from "quasar";
import Service from "../../services/rest.service";
import formService from "../../services/form.service";
import AddObject from "../../components/dialogs/AddObject.vue";
import ObjectTable from "../../components/data/-ObjectTable.vue";
import RoundedLabel from "../../components/Others/RoundedLabel.vue";

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
  name: "CollectionPage",
  components: { RoundedLabel },
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
  setup() {
    const $q = useQuasar();
    const collection = $q.localStorage.getItem("collection");
    const apiRoot = $q.localStorage.getItem("apiRoot");
    return { collection, apiRoot };
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
    async deleteObject(row) {
      await Service.delete(
        `/server/apiroots/${this.apiRoot.name}/${this.collection.id}/${row.id}`
      );
      this.getObjects();
    },
    addObject() {
      this.$q
        .dialog({
          component: AddObject,
          componentProps: {},
        })
        .onOk((e) => {
          console.log(e);
          Service.post(
            `/server/apiroots/${this.apiRoot.name}/${this.collection.id}`,
            e
          )
            .then((res) => {
              console.log(res);
              Notify.create({
                message: "Tạo Object thành công",
                color: "green",
                position: "top",
              });
            })
            .then(() => this.getObjects())
            .catch((err) => {
              console.log(err);
            });
        })
        .onCancel(() => {
          console.log("Cancel");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    },
    async getObjects() {
      let res = await Service.get(
        `/server/apiroots/${this.apiRoot.name}/${this.collection.id}`
      );
      this.rows = res;
    },
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
  // watch: {
  //   data: {
  //     handler(data) {
  //       this.rows = [...data];
  //     },
  //   },
  // },
  mounted() {
    this.getObjects();
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
.add-btn {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
