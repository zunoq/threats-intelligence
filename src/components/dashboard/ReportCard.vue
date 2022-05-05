<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <q-card dark flat bordered class="bg-primary light-font">
      <q-card-section>
        <div class="row">
          <div class="col-10">
            <div class="text-uppercase q-pa-md title">{{ report.name }}</div>
            <div class="number q-pl-md text-bold">
              {{ nFormatter(report.statistics) }}
              <span
                class="trend"
                :class="report.trend > 0 ? 'text-green' : 'text-red'"
              >
                <q-icon
                  class="trend_icon"
                  :name="report.trend > 0 ? 'arrow_upward' : 'arrow_downward'"
                />
                {{ report.trend }}%
              </span>
            </div>
          </div>
          <div class="col-2 icon">
            <q-icon dense :name="report.icon" size="40px" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ReportCard",
  props: ["data"],
  data() {
    return {
      report: this.data,
    };
  },
  computed: {
    nFormatter() {
      return (item) => {
        if (item >= 1000000000) {
          return (item =
            (item / 1000000000).toFixed(1).replace(/\.0$/, "") + "G");
        }
        if (item >= 1000000) {
          return (item = (item / 1000000).toFixed(1).replace(/\.0$/, "") + "M");
        }
        if (item >= 1000) {
          return (item = (item / 1000).toFixed(1).replace(/\.0$/, "") + "K");
        }
      };
    },
  },
});
</script>

<style scoped lang="scss">
.q-card {
  border-radius: 5px;
  box-sizing: border-box;
  .row {
    height: 100%;
    .title {
      font-size: 12px;
    }
    .number {
      font-size: 30px;
      letter-spacing: 3px;
      position: relative;
    }
    .icon {
      align-self: center;
      color: $secondary;
    }
    .trend {
      letter-spacing: 1px;
      font-size: 14px;
      display: block;
      top: 13px;
      position: absolute;
      left: 140px;
      color: $positive;
      .trend_icon {
        top: -1px;
      }
    }
  }
}
</style>
