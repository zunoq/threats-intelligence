<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-sm" v-if="apiRoots.length != 0">
      <ApiRootCard
        v-for="apiRoot in apiRoots"
        :data="apiRoot"
        :key="apiRoot.name"
      />
    </div>
    <div v-else flex flex-center>
      <h3 class="text-secondary">API Root không có sẵn. Hãy tạo mới</h3>
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
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import ApiRootCard from "../components/data/APIRootCard.vue";
import AddAPIRoot from "../components/plugins/AddAPIRoot.vue";
import restService from "../services/rest.service.js";
export default defineComponent({
  name: "ThreatsPage",
  components: { ApiRootCard },
  data() {
    return {
      apiRoots: [],
      update: false,
    };
  },
  setup() {},
  methods: {
    addAPI() {
      this.$q
        .dialog({
          component: AddAPIRoot,
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
    async getAPIRoot() {
      let res = await restService.get("/server/apiroots/");
      this.apiRoots = res;
    },
  },
  mounted() {
    this.getAPIRoot();
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
