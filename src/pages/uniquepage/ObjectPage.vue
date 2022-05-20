<template>
  <q-page class="container q-pa-md">
    <div class="row flex q-mb-md">
      <div class="text-h4 text-secondary text-uppercase">
        {{ truncate(object.name, 70) }}
        <q-tooltip>
          {{ object.name }}
        </q-tooltip>
      </div>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <BasicInformation :data="objectInfor" />
      </div>
      <div class="col-6">
        <ManifestInformation :data="objectInfor.manifest" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import restService from "../../services/rest.service";
import BasicInformation from "../../components/data/object/BasicInformation.vue";
import ManifestInformation from "../../components/data/object/ManifestInformation.vue";
export default defineComponent({
  name: "AnalysisPage",
  components: { BasicInformation, ManifestInformation },
  data() {
    return {
      objectInfor: [],
    };
  },
  setup() {
    const $q = useQuasar();
    const object = $q.localStorage.getItem("object");
    const collection = $q.localStorage.getItem("collection");
    const apiRoot = $q.localStorage.getItem("apiRoot");
    return { object, collection, apiRoot };
  },
  computed: {
    truncate() {
      return (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    },
  },
  methods: {
    async getObjectInformation() {
      let res = await restService.get(
        `/server/apiroots/${this.apiRoot.name}/${this.collection.id}/${this.object.id}`
      );
      this.objectInfor = res;
    },
  },
  mounted() {
    this.getObjectInformation();
  },
});
</script>
