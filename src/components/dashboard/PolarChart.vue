<template>
  <div class="col-xs-12 col-md-12 col-lg-6">
    <div class="text-subtitle3 text-secondary q-py-xs text-uppercase">
      OBSERVABLES DISTRIBUTION
    </div>
    <q-card flat class="bg-primary light-font">
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
        "rgba(255, 99, 132,1)",
        "rgba(75, 192, 192,1)",
        "rgba(255, 205, 86,1)",
        "rgba(201, 203, 207,1)",
        "rgba(54, 162, 235,1)",
      ],
      backgroundColor: [
        "rgba(255, 99, 132,0.3)",
        "rgba(75, 192, 192,0.3)",
        "rgba(255, 205, 86,0.3)",
        "rgba(201, 203, 207,0.3)",
        "rgba(54, 162, 235,0.3)",
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
