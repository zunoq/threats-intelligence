<template>
  <q-page class="container q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="text-subtitle3 text-white">In progress</div>
      <div class="col-12" v-for="(task, idx) in tasks" :key="idx">
        <TaskCard :data="task" v-if="task.status == 'progressing'" />
      </div>
      <div class="text-subtitle3 text-white">Complete</div>
      <div class="col-12" v-for="(task, idx) in tasks" :key="idx">
        <TaskCard :data="task" v-if="task.status == 'complete'" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TaskCard from "../components/backgroundtasks/TaskCard.vue";
export default defineComponent({
  name: "DataPage",
  components: { TaskCard },
  data() {
    return {
      tasks: [
        {
          targetedEntities: [
            {
              type: "entity",
              title: "Author",
              name: "Abuse.ch",
            },
            {
              type: "entity",
              title: "",
              name: "All rule targets",
            },
            {
              type: "action",
              title: "",
              name: "delete",
            },
          ],
          actions: [
            {
              type: "entity",
              name: "b9bb653c-4cef-4334-9992-f900d7dc4cef",
            },
            {
              type: "action",
              name: "Apply Rule",
            },
          ],
          initiator: "Samuel Hassine",
          startTime: 1649990182173,
          endTime: 1649990206663,
          progress: "100%",
          status: "complete",
          errors: [
            {
              timeStamp: 1649990182173,
              message: "Success",
              source: "b9bb653c-4cef-4334-99",
            },
            {
              timeStamp: 1649990182173,
              message: "Fail",
              source: "b9bb653c-4cef-4334-99",
            },
          ],
        },
        {
          targetedEntities: [
            {
              type: "entity",
              title: "Author",
              name: "Abuse.ch",
            },
            {
              type: "entity",
              title: "",
              name: "All rule targets",
            },
            {
              type: "action",
              title: "",
              name: "delete",
            },
          ],
          actions: [
            {
              type: "entity",
              name: "b9bb653c-4cef-4334-9992-f900d7dc4cef",
            },
            {
              type: "action",
              name: "Apply Rule",
            },
          ],
          initiator: "Samuel Hassine",
          startTime: 1649990182173,
          endTime: 1649990206663,
          progress: "50%",
          status: "progressing",
          errors: [
            {
              timeStamp: 1649990182173,
              message: "Success",
              source: "b9bb653c-4cef-4334-99",
            },
            {
              timeStamp: 1649990182173,
              message: "Success",
              source: "b9bb653c-4cef-4334-99",
            },
            {
              timeStamp: 1649990182173,
              message: "Success",
              source: "b9bb653c-4cef-4334-99",
            },
            {
              timeStamp: 1649990182173,
              message: "Fail",
              source: "b9bb653c-4cef-4334-99",
            },
          ],
        },
      ],
    };
  },
});
</script>
