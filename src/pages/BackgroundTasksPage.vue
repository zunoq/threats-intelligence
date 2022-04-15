<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-md">
      <TaskCard />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TaskCard from "../components/backgroundtasks/TaskCard.vue";
export default defineComponent({
  name: "DataPage",
  components: { TaskCard },
});
</script>
