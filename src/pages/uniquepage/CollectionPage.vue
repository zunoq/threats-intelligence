<template>
  <q-page class="q-pa-xl">
    <ObjectTable :data="objects" />
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
import { useQuasar } from "quasar";
import restService from "../../services/rest.service";
import AddObject from "../../components/plugins/AddObject.vue";
import ObjectTable from "../../components/data/ObjectTable.vue";

export default defineComponent({
  name: "CollectionPage",
  components: { ObjectTable },
  data() {
    return {
      objects: [],
    };
  },
  setup() {
    const $q = useQuasar();
    const collection = $q.localStorage.getItem("collection");
    const apiRoot = $q.localStorage.getItem("apiRoot");
    return { collection, apiRoot };
  },
  methods: {
    addObject() {
      this.$q
        .dialog({
          component: AddObject,
          componentProps: {
            apiRoot: this.apiRoot,
            collection: this.collection,
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
    async getObjects() {
      let res = await restService.get(
        `/server/apiroots/${this.apiRoot.name}/${this.collection.id}`
      );
      this.objects = res;
    },
  },
  mounted() {
    this.getObjects();
  },
});
</script>
<style scoped lang="scss">
.add-btn {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
