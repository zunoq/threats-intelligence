<template lang="">
  <div>
    <div class="text-caption text-uppercase text-grey-4">
      Manifest information
    </div>
    <q-card class="row my-card bg-primary q-my-sm" dark flat>
      <q-card-section class="col-12">
        <div class="text-caption q-mb-sm text-secondary">Collection ID</div>
        <div class="text-subtitle2 bg-tertiary id-area q-pa-sm">
          {{ manifest.collection_id }}
        </div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Date added</div>
        <div class="text-body2">{{ dateconvert(manifest.date_added) }}</div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Version</div>
        <div class="text-body2">{{ manifest.version }}</div>
      </q-card-section>
      <q-card-section class="col-12">
        <div class="text-caption q-mb-sm text-secondary">Media Type</div>
        <div class="text-subtitle2 bg-tertiary id-area q-pa-sm">
          {{ manifest.media_type }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { date } from "quasar";
export default defineComponent({
  props: ["data"],
  data() {
    return {
      manifest: {},
    };
  },
  computed: {
    dateconvert() {
      return (timeStamp) => {
        if (typeof timeStamp == "integer")
          return date.formatDate(timeStamp, "MMM DD, YYYY, h:mm:ss A");
        else {
          return date.formatDate(
            new Date(timeStamp),
            "MMM DD, YYYY, h:mm:ss A"
          );
        }
      };
    },
  },
  watch: {
    data: {
      handler(data) {
        this.manifest = Object.assign({}, data);
        console.log(data);
      },
      deep: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.id-area {
  border-radius: 5px;
}
</style>
