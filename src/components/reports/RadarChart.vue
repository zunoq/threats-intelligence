<template>
  <div class="">
    <RadarChart :chart-data="data" :options="options" :height="200" />
  </div>
</template>

<script setup>
import { RadarChart } from "vue-chart-3";
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
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgb(54, 162, 235)",
      borderWidth: 1,
    },
  ],
}));
const options = ref({
  resonsive: true,
  elements: {},
  plugins: {
    legend: {
      display: false,
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
      pointLabels: {
        color: ["#ff5722", "#ffc107", "#cddc39", "#8bc34a", "#4caf50"],
      },
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
