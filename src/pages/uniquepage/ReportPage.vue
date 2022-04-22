<template>
  <q-page class="container q-pa-md">
    <div class="row flex q-mb-md">
      <div class="text-h4 text-secondary text-uppercase">Alert AfDDASDA</div>
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
        <BasicInformation />
      </div>
      <div class="col-6">
        <EntityDetails />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import BasicInformation from "../../components/reports/BasicInformation.vue";
import EntityDetails from "../../components/reports/EntityDetails.vue";

export default defineComponent({
  name: "ReportPage",
  components: { BasicInformation, EntityDetails },
});
</script>
<style lang="scss">
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
