<template>
  <div class="col-xs-12 col-md-12 col-lg-6">
    <div class="text-caption text-uppercase text-grey-4">
      TOP 10 thực thể hoạt động (3 tháng gần nhất)
    </div>
    <q-card dark flat bordered class="bg-primary light-font">
      <BarChart :chart-data="data" :options="options" />
    </q-card>
  </div>
</template>

<script setup>
import { BarChart } from "vue-chart-3";
import { ref, computed, reactive, onMounted } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const props = defineProps({
  data: {
    type: Object,
  },
});
const gradient = ref("#fff");
const dataValues = ref(props.data.dataValues);
const data = computed(() => ({
  labels: props.data.labels,
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: "#f38428",
      borderRadius: "50",
      maxBarThickness: "12",
    },
  ],
}));
const options = ref({
  indexAxis: "y",

  resonsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
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
});
</script>

<style scoped></style>
