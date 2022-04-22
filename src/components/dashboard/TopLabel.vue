<template>
  <div class="col-md-12 col-lg-4">
    <div class="text-subtitle3 text-secondary q-py-xs text-uppercase">
      Top Label (last 3 months)
    </div>
    <q-card class="label-card" flat dark bordered>
      <div class="row">
        <div
          class="label-item col-4 q-pa-md"
          v-for="(label, idx) in labelsData"
          :key="idx"
          :class="'bg-' + `${label.name}`"
        >
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
  props: ["topLabels"],
  data() {
    return {
      labelsData: this.topLabels,
      colorList: [
        {
          name: "avast",
          text: "#e21483",
          bgColor: "#441b52",
        },
        {
          name: "zloader",
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
    hexToRGB(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

      if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
      } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
      }
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
    position: relative;
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
