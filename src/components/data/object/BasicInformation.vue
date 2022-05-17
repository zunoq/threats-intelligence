<template lang="">
  <div>
    <div class="text-caption text-uppercase text-grey-4">basic information</div>
    <q-card class="row my-card bg-primary q-my-sm" dark flat>
      <q-card-section class="col-12">
        <div class="text-caption q-mb-sm text-secondary">
          ID
          <q-icon name="info" color="secondary" size="20px">
            <q-tooltip>
              In Threats Intelligence,a predictable ID is generated based on one
              or multiple attributes of entities
            </q-tooltip>
          </q-icon>
        </div>
        <div class="text-subtitle2 bg-tertiary id-area q-pa-sm">
          {{ infor.id }}
        </div>
      </q-card-section>
      <q-card-section class="col-12">
        <div class="text-caption q-mb-sm text-secondary">
          Name
          <q-icon name="info" color="secondary" size="20px">
            <q-tooltip>
              In Threats Intelligence,a predictable ID is generated based on one
              or multiple attributes of entities
            </q-tooltip>
          </q-icon>
        </div>
        <div class="text-subtitle2 bg-tertiary id-area q-pa-sm">
          {{ infor.name }}
        </div>
      </q-card-section>
      <q-card-section class="col-12">
        <div class="text-caption q-mb-sm text-secondary">Pattern</div>
        <div class="text-subtitle2 bg-tertiary id-area q-pa-sm">
          {{ infor.pattern }}
        </div>
      </q-card-section>
      <q-card-section class="col-6 pattern_type">
        <div class="text-caption q-mb-sm text-secondary">Pattern type</div>
        <div class="label-container text-center text-uppercase">
          <div class="label-text text-light">
            {{ infor.pattern_type }}
          </div>
        </div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Type</div>
        <div class="text-uppercase">
          <q-chip square outline color="secondary" :label="infor.type" />
        </div>
      </q-card-section>

      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Creation date</div>
        <div class="text-body2">{{ dateconvert(infor.created) }}</div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Valid from</div>
        <div class="text-body2">{{ dateconvert(infor.valid_from) }}</div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Modified date</div>
        <div class="text-body2">{{ dateconvert(infor.modified) }}</div>
      </q-card-section>
      <q-card-section class="col-6">
        <div class="text-caption q-mb-sm text-secondary">Labels</div>
        <div
          class="labels q-ma-xs"
          v-for="(label, idx) in infor.labels"
          :key="idx"
        >
          <div
            class="label-container text-center"
            :class="`text-` + `${handleLabel('', label)}`"
          >
            <div
              class="label-bg"
              :class="`bg-` + `${handleLabel('', label)}`"
            ></div>
            <div
              class="label-text"
              :class="`text-` + `${handleLabel('', label)}`"
            >
              {{ label }}
            </div>
          </div>
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
  components: {},
  data() {
    return {
      infor: {},
    };
  },
  watch: {
    data: {
      handler(data) {
        this.infor = Object.assign({}, data);
      },
      deep: true,
    },
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
    handleLabel() {
      return (str, val) => {
        if (str.length > 0) {
          return `${str}` + `-` + `${val}`;
        } else {
          return val;
        }
      };
    },
  },
});
</script>
<style lang="scss" scoped>
.id-area {
  border-radius: 5px;
}
.pattern_type {
  .label-container {
    display: inline-block;
    font-size: 12px;
    padding: 7px 9px;
    border: 1px solid;
    width: 100px;
  }
}
.labels {
  display: inline-block;
  .label-container {
    display: inline-block;
    position: relative;
    font-size: 12px;
    padding: 1px 8px;
    border: 1px solid;
    border-radius: 16px;
    .label-bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.15;
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
  }
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
