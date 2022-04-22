<template lang="">
  <div class="text-caption text-uppercase text-grey-4">basic information</div>
  <q-card class="row my-card bg-primary q-my-md" dark>
    <q-card-section class="col-12">
      <div class="text-caption q-mb-sm text-secondary">
        Standard STIX ID
        <q-icon name="info" color="secondary" size="20px">
          <q-tooltip v-model="showing">
            In CTI,a predictable STIX ID is generated based on one or multiple
            attributes of entities
          </q-tooltip>
        </q-icon>
      </div>
      <div class="text-subtitle2 bg-tertiary id-area">
        report--427b103c-526b-5f31-b201-91abab70e3e0
      </div>
    </q-card-section>
    <q-card-section class="col-12">
      <div class="text-caption q-mb-sm text-secondary">
        Other STIX IDs
        <q-icon name="info" color="secondary" size="20px">
          <q-tooltip v-model="showing">
            Other known STIX IDs for this entity
          </q-tooltip>
        </q-icon>
      </div>
      <div class="text-subtitle2 bg-tertiary id-area">-</div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">Author</div>
      <div>
        <q-btn outline color="accent" label="ALIENTVAULT" />
      </div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">Revoked</div>
      <div>
        <q-chip
          dark
          square
          label="No"
          class="marking bg-positive text-uppercase text-center"
        />
      </div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">
        Distribution of options
      </div>
      <div><RadarChart :data="opinions" /></div>
    </q-card-section>
    <q-card-section class="col-6">
      <div>
        <div class="text-caption q-mb-sm text-secondary">Labels</div>
        <q-chip
          v-for="(n, idx) in 4"
          :key="idx"
          dark
          outline
          label="osint"
          class="labels text-osint text-lowercase text-center"
        >
          <q-btn
            flat
            round
            dense
            color="osint"
            icon="close"
            size="xs"
            class="q-ml-xs"
          />
        </q-chip>
      </div>
      <div>
        <div class="text-caption q-mb-sm text-secondary">Confidence level</div>
        <div>
          <q-chip
            dark
            square
            label="Low"
            class="marking bg-negative text-uppercase text-center"
          />
        </div>
      </div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">Creation date</div>
      <div class="text-body2">April 20, 2022, 6:09:59 PM</div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">
        Creation date (in this platform)
      </div>
      <div class="text-body2">April 20, 2022, 6:09:59 PM</div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">Modification date</div>
      <div class="text-body2">April 20, 2022, 6:09:59 PM</div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">Creator</div>
      <div>
        <q-chip
          square
          outline
          color="secondary"
          label="[CONNECTOR] ALIENTVAULT"
        />
      </div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">Processing status</div>
      <div>
        <q-chip
          dark
          outline
          square
          label="Disable"
          class="marking text-uppercase text-center"
        />
      </div>
    </q-card-section>
    <q-card-section class="col-6">
      <div class="text-caption q-mb-sm text-secondary">Marking</div>
      <div>
        <q-chip
          square
          label="TLP:white"
          class="marking bg-white text-uppercase text-center"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";
import RadarChart from "../reports/RadarChart.vue";
export default defineComponent({
  components: { RadarChart },
  data() {
    return {
      opinions: {
        dataValues: [90, 14, 21, 75, 30],
        labels: [
          "strongly-disagree",
          "disagree",
          "neutral",
          "agree",
          "strongly-agree",
        ],
      },
    };
  },
});
</script>
<style lang="scss">
.marking {
  border-radius: 0px;
  font-size: 12px;
  height: 20px;
  width: 90px;
  .q-chip__content {
    display: block;
  }
}
</style>
