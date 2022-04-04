//
<template>
  <div
    class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
    v-for="(report, idx) in reportData"
    :key="idx"
  >
    <q-card dark flat class="bg-primary light-font">
      <q-card-section>
        <div class="row">
          <div class="col-10">
            <div class="text-uppercase q-pa-md title">{{ report.name }}</div>
            <div class="number q-pl-md text-bold">
              {{ report.statistics }}
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
  props: ["reports"],
  data() {
    return {
      reportData: this.reports,
    };
  },
  methods: {
    nFormatter() {
      this.reportData.forEach((item) => {
        if (item.statistics >= 1000000000) {
          item.statistics =
            (item.statistics / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
        }
        if (item.statistics >= 1000000) {
          item.statistics =
            (item.statistics / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        }
        if (item.statistics >= 1000) {
          item.statistics =
            (item.statistics / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        }
      });
    },
  },
  mounted() {
    this.nFormatter();
    console.log(this.reportData);
  },
});
</script>

<style lang="scss">
.q-card {
  border: 1px solid $card-border;
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
