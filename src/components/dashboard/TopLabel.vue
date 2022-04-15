<template>
  <div class="col-md-12 col-lg-4">
    <div class="text-subtitle3 text-secondary q-py-xs text-uppercase">
      Top Label (last 3 months)
    </div>
    <q-card class="label-card">
      <div class="row">
        <div
          class="label-item col-4 q-pa-md"
          v-for="(label, idx) in labelsData"
          :key="idx"
          :style="'background-color:' + `${colorList[idx].bgColor}`"
        >
          <div
            class="label-number text-bold"
            :style="'color:' + `${colorList[idx].text}`"
          >
            {{ label.number }}
          </div>
          <div class="label-name" :style="'color:' + `${colorList[idx].text}`">
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
  props: ["topLabels"],
  data() {
    return {
      labelsData: this.topLabels,
      colorList: [
        {
          text: "#e21483",
          bgColor: "#441b52",
        },
        {
          text: "#f38428",
          bgColor: "#493d36",
        },
        {
          text: "#9f8801",
          bgColor: "#303e2a",
        },
        {
          text: "#513c33",
          bgColor: "#182739",
        },
        {
          text: "#fe7431",
          bgColor: "#4d3839",
        },
        {
          text: "#ebff76",
          bgColor: "#47624e",
        },
        {
          text: "#9531eb",
          bgColor: "#2d2471",
        },
        {
          text: "#b6db34",
          bgColor: "#37573a",
        },
        {
          text: "#81dfb3",
          bgColor: "#275860",
        },
      ],
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

<style lang="scss">
.label-card {
  // border: none;
  .label-item {
    // border: none;
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
