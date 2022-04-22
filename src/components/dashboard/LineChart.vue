<template>
  <div class="col-xs-12 col-md-12 col-lg-8">
    <div class="text-subtitle3 text-secondary q-py-xs text-uppercase">
      INGESTED ENTITIES
    </div>
    <q-card dark flat bordered class="bg-primary light-font">
      <LineChart
        :chart-data="data"
        :options="options"
        style="max-height: 309.5px"
      />
    </q-card>
  </div>
</template>

<script setup>
import { LineChart } from "vue-chart-3";
import { ref, computed, onMounted } from "vue";
import { Chart, registerables } from "chart.js";
import gradient from "chartjs-plugin-gradient";
Chart.register(...registerables, gradient);
const props = defineProps({
  data: {
    type: Object,
  },
});
const dataValues = ref(props.data.dataValues);
const labelSet = ref(props.data.labels);
const data = computed(() => ({
  labels: labelSet.value,
  datasets: [
    {
      label: "Revenue",

      data: dataValues.value,
      borderWidth: 2,
      borderColor: "#00b1ff",
      radius: 3,
      tension: 0.3,
      fill: true,
      gradient: {
        backgroundColor: {
          axis: "y",
          colors: {
            0: "rgba(0, 177, 255,0.01)",
            6000: "rgba(0, 177, 255,0.5)",
          },
        },
      },
    },
  ],
}));
const options = ref({
  plugins: {
    responsive: true,
    title: {
      text: "Line Chart",
    },

    legend: {
      display: false,
    },
    scales: {
      x: {
        grid: {
          borderDash: [4, 4],
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [4, 4],
          display: true,
          color: "#253647",
        },
      },
    },
  },
});
</script>

<style></style>
