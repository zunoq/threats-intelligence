<template>
  <div class="col-md-12 col-lg-4">
    <div class="text-caption text-uppercase text-grey-4">
      Top Nhãn dán (3 tháng gần nhất)
    </div>
    <q-card class="label-card" flat dark bordered>
      <div class="row">
        <div
          class="label-item col-4 q-pa-md"
          v-for="(label, idx) in labelsData"
          :key="idx"
          :class="'text-' + `${label.name}`"
        >
          <div class="bg" :class="'bg-' + `${label.name}`"></div>
          <div class="label-number text-bold">
            {{ label.number }}
          </div>
          <div class="label-name text-light">
            {{ label.name }}
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TopLabel",
  props: ["data"],
  data() {
    return {
      labelsData: this.data,
    };
  },
  methods: {
    nFormatter() {
      this.labelsData.forEach((item) => {
        if (item.number >= 1000000000) {
          item.number =
            (item.number / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
        }
        if (item.number >= 1000000) {
          item.number =
            (item.number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (item.number >= 1000) {
          item.number =
            (item.number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
      });
    },
  },
  mounted() {
    this.nFormatter();
  },
});
</script>

<style scoped lang="scss">
.label-card {
  // border: none;
  .label-item {
    position: relative;
    // border: none;
    .bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.3;
      width: 100%;
      height: 100%;
    }
    .label-number {
      letter-spacing: 3px;
      @media (max-width: $breakpoint-xs-max) {
        font-size: 20px;
      }
      @media (min-width: $breakpoint-sm-min) {
        font-size: 27px;
      }
    }
    .label-name {
      @media (max-width: $breakpoint-xs-max) {
        font-size: 16px;
      }
      @media (min-width: $breakpoint-sm-min) {
        font-size: 20px;
      }
    }
  }
}
</style>
