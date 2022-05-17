<template>
  <q-page class="q-pa-lg">
    <div>
      <CollectionTable :data="collections" />
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
import CollectionTable from "../../components/data/CollectionTable.vue";
import AddCollection from "../../components/plugins/AddCollection.vue";
import restService from "../../services/rest.service";
export default defineComponent({
  name: "APIRootPage",
  components: { CollectionTable },
  data() {
    return {
      collections: [],
    };
  },
  setup() {
    const $q = useQuasar();
    const apiRoot = $q.localStorage.getItem("apiRoot");
    return { apiRoot };
  },
  methods: {
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
          this.update = true;
        })
        .onCancel(() => {
          console.log("Cancel");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    },
    async getCollection() {
      let res = await restService.get(`/server/apiroots/${this.apiRoot.name}/`);
      this.collections = res;
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
