<template>
  <q-card class="" flat dark>
    <div class="row bg-primary q-pa-md">
      <div class="col-5">
        <div class="label row-12 q-py-xs text-secondary">Targeted entities</div>
        <div
          v-for="(entity, idx) in task.targetedEntities"
          :key="idx"
          class="tag q-mr-xs q-mb-xs"
          :class="
            entity.type == 'entity' ? 'bg-grey-9' : 'bg-blue-10 text-uppercase'
          "
        >
          <span class="medium-font name"
            >{{ entitiesHandle(entity.title) }}
          </span>
          <span class="desc light-font">{{ entity.name }}</span>
        </div>
        <div class="label row-12 q-py-xs q-mt-md text-secondary">Action</div>
        <div
          v-for="(action, idx) in task.actions"
          :key="idx"
          class="tag q-mr-xs q-mb-xs"
          :class="
            action.type == 'entity' ? 'bg-grey-9' : 'bg-blue-10 text-uppercase'
          "
        >
          <span class="light-font name">{{ action.name }} </span>
        </div>
      </div>
      <div class="col-5">
        <div class="row q-col-gutter-xs">
          <div class="col-3">
            <div class="label row-12 q-py-xs text-secondary">Initiator</div>
            <p>{{ task.initiator }}</p>
          </div>
          <div class="col-3">
            <div class="label row-12 q-py-xs text-secondary">
              Task start time
            </div>
            <p>{{ dateconvert(task.startTime) }}</p>
          </div>
          <div class="col-3">
            <div class="label row-12 q-py-xs text-secondary">Task end time</div>
            <p>{{ dateconvert(task.endTime) }}</p>
          </div>
          <div class="col-3">
            <div class="label row-12 q-py-xs text-secondary">Status</div>
            <span
              class="status text-uppercase"
              :class="task.status == 'complete' ? 'complete' : 'progressing'"
              >{{ task.status }}
            </span>
          </div>
          <div class="label q-py-xs q-mt-md text-secondary">Progress</div>
          <q-linear-progress
            :value="task.progress"
            class="progress-bar"
            dark
            color="secondary"
            track-color="secondary"
            size="10px"
          />
        </div>
      </div>
      <div class="col-2 action large-screen-only-filter">
        <q-btn outline label="Delete" icon="delete" class="delete-btn" />
        <q-btn
          :label="`${task.errors.length} Errors`"
          class="errors-btn"
          @click="dialog = true"
        />
      </div>
    </div>
    <q-dialog
      v-model="dialog"
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white q-pa-lg" dark>
        <q-table
          :rows="task.errors"
          :columns="columns"
          row-key="name"
          dark
          class="bg-primary"
          hide-bottom
          text-left
        >
          <template v-slot:body="props">
            <q-tr :props="props" no-hover>
              <q-td key="timeStamp" :props="props">
                {{ dateconvert(props.row.timeStamp) }}
              </q-td>
              <q-td key="message" :props="props">
                {{ props.row.message }}
              </q-td>
              <q-td key="source" :props="props">
                {{ props.row.source }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
        <q-btn
          flat
          dark
          color="secondary"
          label="Close"
          v-close-popup
          size="lg"
        />
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
const columns = [
  {
    name: "timeStamp",
    align: "left",
    sortable: false,
    field: "timeStamp",
    label: "Time Stamp",
  },
  {
    name: "message",
    align: "left",
    sortable: false,
    field: "message",
    label: "Message",
  },
  {
    name: "source",
    align: "left",
    sortable: false,
    field: "source",
    label: "Source",
  },
];
export default defineComponent({
  props: ["data"],
  setup() {
    return {
      dialog: ref(false),
      columns,
    };
  },
  data() {
    return {
      task: this.data,
    };
  },
  computed: {
    dateconvert() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD, YYYY, h:m:s A");
      };
    },
    entitiesHandle() {
      return (title) => {
        if (title.length > 0) {
          return (title = `${title}: `);
        }
      };
    },
  },
});
</script>

<style lang="scss">
.q-card {
  .label {
    font-size: 13px;
  }

  .tag {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 16px;
    font-size: 13px;
  }

  p {
    font-size: 15px;
  }
  .status {
    font-size: 13px;
    padding: 4px 16px;
  }
  .complete {
    background-color: rgba(76, 175, 80, 0.1);
    color: $positive;
  }
  .progressing {
    background-color: rgba(217, 134, 9, 0.1);
    color: $warning;
  }
  .action {
    position: relative;
    .q-btn {
      position: absolute;
      right: 0px;
      min-width: 124px;
    }
    .delete-btn {
      bottom: 0px;
      color: $secondary;
    }
    .errors-btn {
      top: 0px;
      background-color: $accent;
    }
  }
  .progress-bar {
    border-radius: 16px;
  }
}
.q-dialog {
  position: relative;
  .q-btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
}
</style>
