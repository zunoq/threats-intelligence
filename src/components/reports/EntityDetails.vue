<template>
  <div class="text-caption text-uppercase text-grey-4">ENTITY DETAILS</div>
  <q-card class="my-card bg-primary q-my-sm" dark flat>
    <div class="row">
      <div class="col-6">
        <q-card-section class="row-12">
          <div class="text-caption q-mb-sm text-secondary">Description</div>
          <div class="text-body2">
            The government's team for responding to computer emergencies in
            Ukraine CERT-UA revealed the fact of distribution of e-mails on the
            topic "Urgent! . If you open a document and activate a macro, the
            macro will download, create on disk and run the file "pe.dll". This
            will damage your computer with Cobalt Strike Beacon malware.
          </div>
        </q-card-section>
      </div>
      <div class="col-6">
        <div class="row-12">
          <q-card-section class="row-12">
            <div class="text-caption q-mb-sm text-secondary col-12">
              Report types
            </div>
            <div class="col-12">
              <SquareLabel data="Threat-Report" color="blue-10" />
            </div>
          </q-card-section>
        </div>
        <div class="row-12">
          <q-card-section class="row-12">
            <div class="text-caption q-mb-sm text-secondary col-12">
              Processing status
            </div>
            <OutlineSquareLabel data="new" str="ps" style="min-width: 100px" />
          </q-card-section>
        </div>
      </div>
    </div>
    <q-card-section> </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import PolarChart from "../chart/PolarChart.vue";
import BlurBgSquareLabel from "../Others/BlurBgSquareLabel.vue";
import MarkingLabel from "../Others/MarkingLabel.vue";
import OutlineSquareLabel from "../Others/OutlineSquareLabel.vue";
import RoundedLabel from "../Others/RoundedLabel.vue";
import SquareLabel from "../Others/SquareLabel.vue";

export default {
  components: { OutlineSquareLabel, SquareLabel },
};
</script>
<style scoped lang="scss">
.report-types {
  padding: 16px 27px;
  margin: 0 5px 5px 0;
  font-size: 12px;
  line-height: 12px;
  border-radius: 0;
  text-transform: uppercase;
  .q-chip__content {
    display: block;
  }
}
</style>
