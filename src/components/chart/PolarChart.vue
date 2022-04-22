<template>
  <div class="col-xs-12 col-md-12 col-lg-6">
    <div class="text-subtitle3 text-secondary q-py-xs text-uppercase">
      OBSERVABLES DISTRIBUTION
    </div>
    <q-card dark flat bordered class="bg-primary light-font">
      <PolarAreaChart :chart-data="data" :options="options" />
    </q-card>
  </div>
</template>

<script setup>
import { PolarAreaChart } from "vue-chart-3";
import { ref, computed, reactive } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const props = defineProps({
  data: {
    type: Object,
  },
});
const dataValues = ref(props.data.dataValues);
const data = computed(() => ({
  labels: props.data.labels,
  datasets: [
    {
      data: dataValues.value,
    },
  ],
}));
const options = ref({
  resonsive: true,
  elements: {
    arc: {
      borderColor: [
        "#f38428ff",
        "#2023c3ff",
        "#8fd671ff",
        "#e21483ff",
        "#9f8801ff",
        "#007d75ff",
        "#39126cff",
        "#8bb5e0ff",
        "#a6262eff",
      ],
      backgroundColor: [
        "#f3842830",
        "#2023c330",
        "#8fd67130",
        "#e2148330",
        "#9f880130",
        "#007d7530",
        "#39126c30",
        "#8bb5e030",
        "#a6262e30",
      ],
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "right",
      align: "center",
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
    r: {
      grid: {
        color: "#253647",
      },
      angleLines: {
        display: true,
        color: "#253647",
      },
      ticks: {
        showLabelBackdrop: false,
      },
    },
  },
});
</script>

<style></style>
