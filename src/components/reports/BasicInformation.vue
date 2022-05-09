<template lang="">
  <div class="">
    <div class="text-caption text-uppercase text-grey-4">basic information</div>
    <q-card class="row my-card bg-primary q-my-sm" dark flat>
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
        <div class="text-subtitle2 bg-tertiary id-area q-pa-sm">
          {{ entity.standardID }}
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
        <div
          class="text-subtitle2 bg-tertiary id-area q-pa-sm"
          v-if="entity.otherIDs.length > 0"
        >
          <div v-for="(otherID, idx) in entity.otherIDs" :key="idx">
            {{ otherID }}
          </div>
        </div>
        <div class="text-subtitle2 bg-tertiary id-area q-pa-sm" v-else>-</div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Author</div>
        <div>
          <q-btn outline color="accent" :label="entity.author" />
        </div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Revoked</div>
        <div>
          <BlurBgSquareLabel :data="entity.revoked" str="rl" />
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
          <div class="text-caption q-mb-sm text-secondary row">Labels</div>
          <div v-if="entity.labels.length > 0" class="row q-mb-md q-gutter-sm">
            <RoundedLabel
              str=""
              v-for="(label, idx) in entity.labels"
              :key="idx"
              :data="label"
            />
          </div>
          <div v-else class="row q-mb-md">
            <q-chip
              dark
              outline
              label="No Labels"
              class="labels text-lowercase text-center"
            >
            </q-chip>
          </div>
        </div>
        <div>
          <div class="text-caption q-mb-sm text-secondary">
            Confidence level
          </div>
          <div v-if="entity.confidenceLevel.length > 0">
            <BlurBgSquareLabel :data="entity.confidenceLevel" str="cl" />
          </div>
          <div v-else>
            <BlurBgSquareLabel :data="'none'" str="cl" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Creation date</div>
        <div class="text-body2">{{ dateconvert(entity.credate) }}</div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">
          Creation date (in this platform)
        </div>
        <div class="text-body2">
          {{ dateconvert(entity.platformcredate) }} PM
        </div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Modification date</div>
        <div class="text-body2">{{ dateconvert(entity.moddate) }} PM</div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Creator</div>
        <div>
          <q-chip square outline color="secondary" :label="entity.creator" />
        </div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Processing status</div>
        <OutlineSquareLabel
          :data="entity.processStatus"
          str="ps"
          style="min-width: 100px"
        />
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Marking</div>
        <div>
          <MarkingLabel :data="entity.marking" style="height: 25px" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { date } from "quasar";
import { defineComponent } from "vue";
import RadarChart from "../chart/RadarChart.vue";
import BlurBgSquareLabel from "../Others/BlurBgSquareLabel.vue";
import MarkingLabel from "../Others/MarkingLabel.vue";
import OutlineSquareLabel from "../Others/OutlineSquareLabel.vue";
import RoundedLabel from "../Others/RoundedLabel.vue";
export default defineComponent({
  components: {
    RadarChart,
    MarkingLabel,
    BlurBgSquareLabel,
    RoundedLabel,
    OutlineSquareLabel,
  },
  props: ["data"],
  data() {
    return {
      entity: this.data,
      opinions: {
        dataValues: this.data.ratings,
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
  computed: {
    dateconvert() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD, YYYY, h:mm:ss A");
      };
    },
    handleMarking() {
      return (val) => {
        return val.slice(4, val.length);
      };
    },
  },
});
</script>
<style scoped lang="scss">
.id-area {
  border-radius: 5px;
}

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
