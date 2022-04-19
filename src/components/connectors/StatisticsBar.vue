<template>
  <div class="col">
    <q-card class="my-card q-pa-lg bg-primary" dark flat>
      <div class="row q-pb-xs">
        <div class="title text-subtitle1">
          <q-icon name="multiline_chart" color="secondary" size="sm" />
          Worker Statistics
        </div>
      </div>
      <div class="row">
        <div class="col-2">
          <div class="text-h4 text-secondary q-pb-sm text-center">6</div>
          <div class="text-subtitle2 text-center">CONNECTED WORKERS</div>
        </div>
        <div class="col-2">
          <div class="text-h4 text-secondary q-pb-sm text-center">1</div>
          <div class="text-subtitle2 text-center">QUEUED BUNDLES</div>
        </div>
        <div class="col-2">
          <div class="text-h4 text-secondary q-pb-sm text-center">0/s</div>
          <div class="text-subtitle2 text-center">BUNDLES PROCESSED</div>
        </div>
        <div class="col-2">
          <div class="text-h4 text-secondary q-pb-sm text-center">449.8/s</div>
          <div class="text-subtitle2 text-center">READ OPERATIONS</div>
        </div>
        <div class="col-2">
          <div class="text-h4 text-secondary q-pb-sm text-center">20/s</div>
          <div class="text-subtitle2 text-center">WRITE OPERATIONS</div>
        </div>
        <div class="col-2">
          <div class="text-h4 text-secondary q-pb-sm text-center">61.59M</div>
          <div class="text-subtitle2 text-center">
            TOTAL NUMBER OF DOCUMENTS
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({

});
</script>
