<template>
  <q-page class="q-pa-lg">
    <div>
      <CollectionTable :data="collections" />
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import CollectionTable from "../../components/data/CollectionTable.vue";
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
