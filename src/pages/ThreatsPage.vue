<template>
  <q-page class="flex">
    <div class="q-gutter-sm q-ma-sm">
      <ApiRootCard />
      <q-btn
        unelevated
        round
        color="accent"
        size="lg"
        icon="add"
        class="add-btn"
        @click="addAPI('right')"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import ApiRootCard from "../components/data/ApiRootCard.vue";
import RoundedLabel from "../components/Others/RoundedLabel.vue";
import AddAPIRoot from "../components/plugins/AddAPIRoot.vue";
import { api, axios } from "boot/axios";
export default defineComponent({
  name: "ThreatsPage",
  components: { ApiRootCard },
  data() {
    return {
      apiRoots: [
        {
          name: "malware",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit",
          date: 1651990350807,
        },
      ],
    };
  },
  setup() {},
  methods: {
    addAPI() {
      this.$q
        .dialog({
          component: AddAPIRoot,
          componentProps: {
            data: "osint",
            str: "",
          },
        })
        .onOk(() => {
          console.log("OK");
        })
        .onCancel(() => {
          console.log("Cancel");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    },
    getAPIRoot() {
      axios.get(`${process.env.API}/server/apiroots/`).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
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
