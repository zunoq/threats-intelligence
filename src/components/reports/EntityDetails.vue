<template lang="">
  <div class="text-caption text-uppercase text-grey-4">ENTITY DETAILS</div>
  <q-card class="my-card bg-primary q-my-md" dark>
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
              <q-chip
                square
                label="THREAT-REPORT"
                class="report-types bg-blue text-uppercase text-center text-white"
              />
            </div>
          </q-card-section>
        </div>
        <div class="row-12">
          <q-card-section class="row-12">
            <div class="text-caption q-mb-sm text-secondary col-12">
              Processing status
            </div>
            <q-chip
              dark
              outline
              square
              label="NEW"
              class="marking text-uppercase text-center text-warning"
            />
          </q-card-section>
        </div>
      </div>
    </div>
    <q-card-section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
export default {};
</script>
<style lang="scss">
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
