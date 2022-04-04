<template>
  <div class="col-md-12 col-lg-8">
    <q-card class="line-chart">
      <q-card-section>
        <LineChart />
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import LineChart from "vue-chart-3";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

</script>
<style lang=""></style>
