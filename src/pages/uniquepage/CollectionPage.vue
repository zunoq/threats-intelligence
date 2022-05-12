<template>
  <q-page class="q-pa-xl">
    <ObjectTable :data="objects" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import restService from "../../services/rest.service";
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
