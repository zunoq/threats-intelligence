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
                <div class="label-container text-center text-uppercase">
                  <div
                    class="label-bg"
                    :class="`bg-` + `${props.row.can_read}`"
                  ></div>
                  <div
                    class="label-text"
                    :class="`text-` + `${props.row.can_read}`"
                  >
                    {{ props.row.can_read }}
                  </div>
                </div>
              </q-td>
              <q-td key="can_write" :props="props" auto-width>
                <div class="label-container text-center text-uppercase">
                  <div
                    class="label-bg"
                    :class="`bg-` + `${props.row.can_write}`"
                  ></div>
                  <div
                    class="label-text"
                    :class="`text-` + `${props.row.can_write}`"
                  >
                    {{ props.row.can_write }}
                  </div>
                </div>
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
                  <q-tooltip> Chỉnh sửa Collection này </q-tooltip>
                </q-btn>
                <q-btn
                  flat
                  round
                  icon="delete"
                  color="secondary"
                  @click.stop="deleteCollection(props.row)"
                >
                  <q-tooltip> Xoá Collection này </q-tooltip>
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
import { useQuasar, Notify } from "quasar";
import { defineComponent } from "vue";
import AddCollection from "../../components/dialogs/AddCollection.vue";
import restService from "../../services/rest.service";
import formService from "../../services/form.service";
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
    label: "Tiêu đề",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "can_read",
    required: true,
    label: "Đọc",
    align: "center",
    field: (row) => row.can_read,
    sortable: true,
  },
  {
    name: "can_write",
    required: true,
    label: "Ghi",
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
  components: {},
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
            cl: collection,
          },
        })
        .onOk((e) => {
          formService
            .put(`/server/apiroots/${this.apiRoot.name}/`, e)
            .then((res) => {
              console.log(res);
              Notify.create({
                message: "Sửa Collection thành công",
                color: "green",
                position: "top",
              });
            })
            .then(() => this.getCollection())
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
    addAPI() {
      this.$q
        .dialog({
          component: AddCollection,
          position: "right",
          componentProps: {
            data: this.apiRoot,
          },
        })
        .onOk((e) => {
          formService
            .post(`/server/apiroots/${this.apiRoot.name}/`, e)
            .then((res) => {
              console.log(res);
              Notify.create({
                message: "Tạo Collection thành công",
                color: "green",
                position: "top",
              });
            })
            .then(() => this.getCollection())
            .catch((err) => {
              console.log(err);
            });
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
.label-container {
  display: inline-block;
  position: relative;
  font-size: 12px;
  padding: 4px 9px;
  min-width: 85px;
  // border: none;
  .label-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    width: 100%;
    height: 100%;
  }
}
</style>
