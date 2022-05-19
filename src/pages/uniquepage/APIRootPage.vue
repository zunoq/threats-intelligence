<template>
  <q-page class="q-pa-lg">
    <div>
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
                <q-btn
                  flat
                  round
                  icon="brush"
                  color="secondary"
                  @click.stop="updateCollection(props.row)"
                  class="q-mr-md"
                >
                  <q-tooltip> Edit this Collection </q-tooltip>
                </q-btn>
                <q-btn
                  flat
                  round
                  icon="delete"
                  color="secondary"
                  @click.stop="deleteCollection(props.row)"
                >
                  <q-tooltip> Delete this Collection </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
    <q-btn
      unelevated
      round
      color="accent"
      size="lg"
      icon="add"
      class="add-btn"
      @click="addAPI()"
    />
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import AddCollection from "../../components/dialogs/AddCollection.vue";
import restService from "../../services/rest.service";
import formService from "../../services/form.service";
import BlurBgSquareLabel from "../../components/Others/BlurBgSquareLabel.vue";
import UpdateCollection from "../../components/dialogs/UpdateCollection.vue";
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
  name: "APIRootPage",
  components: { BlurBgSquareLabel },
  data() {
    return {
      collections: [],
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
    const apiRoot = $q.localStorage.getItem("apiRoot");
    return { apiRoot };
  },
  methods: {
    onRowClick(row) {
      this.$q.localStorage.set("collection", row);
      this.$router.push("/threats/" + this.apiRoot.name + "/" + row.id);
    },
    async deleteCollection(row) {
      console.log(row.title);
      await restService.delete(
        `/server/apiroots/${this.apiRoot.name}/${row.id}`
      );
      this.getCollection();
    },
    updateCollection(collection) {
      this.$q
        .dialog({
          component: UpdateCollection,
          componentProps: {
            data: this.apiRoot,
            cl: collection,
          },
        })
        .onOk(() => {
          let updated = formService.get(
            `/server/apiroots/${this.apiRoot.name}/`
          );
          this.collections = updated;
        })
        .onCancel(() => {
          console.log("Cancel");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    },
    addAPI() {
      this.$q
        .dialog({
          component: AddCollection,
          position: "right",
          componentProps: {
            data: this.apiRoot,
          },
        })
        .onOk(() => {
          console.log("object");
        })
        .onCancel(() => {})
        .onDismiss(() => {});
    },
    async getCollection() {
      let res = await restService.get(`/server/apiroots/${this.apiRoot.name}/`);
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
  mounted() {
    this.getCollection();
  },
});
</script>
<!--  -->
<style scoped lang="scss">
.add-btn {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
