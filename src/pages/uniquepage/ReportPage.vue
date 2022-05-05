<template>
  <q-page class="container q-pa-md">
    <div class="row flex q-mb-md">
      <div class="text-h4 text-secondary text-uppercase">
        {{ truncate(value.name, 70) }}
        <q-tooltip v-model="showing">
          {{ value.name }}
        </q-tooltip>
      </div>
      <q-btn color="white" round flat icon="more_vert" class="q-mx-md">
        <q-menu dark class="bg-quaternary">
          <q-list>
            <q-item clickable>
              <q-item-section>Update</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Delete</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-6">
        <BasicInformation :data="value" />
      </div>
      <div class="col-6">
        <EntityDetails />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent } from "vue";
import BasicInformation from "../../components/reports/BasicInformation.vue";
import EntityDetails from "../../components/reports/EntityDetails.vue";
export default defineComponent({
  name: "ReportPage",
  components: { BasicInformation, EntityDetails },

  setup() {
    const $q = useQuasar();
    const value = $q.localStorage.getItem("report");
    return { value };
  },
  computed: {
    truncate() {
      return (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    },
  },
});
</script>
<style scoped lang="scss">
.q-chip {
  margin: 0;
}
.my-card {
  .id-area {
    padding: 10px;
    font-size: 12px;
    border-radius: 5px;
  }
}
</style>
