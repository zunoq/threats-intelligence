<template>
  <div class="col-12">
    <div class="text-subtitle3 text-secondary q-py-xs text-uppercase">
      LAST INGESTED ANALYSIS (CREATION DATE IN THE PLATFORM)
    </div>
    <q-card dark flat bordered>
      <div class="">
        <q-table
          :rows="rows"
          row-key="name"
          dark
          class="bg-primary"
          hide-header
          hide-bottom
        >
          <template #body="props">
            <q-tr :props="props">
              <q-td key="icon" :props="props" dense>
                <q-icon :name="props.row.icon" size="24px" color="secondary" />
              </q-td>
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="description" :props="props">
                <q-badge>
                  {{ props.row.description }}
                </q-badge>
              </q-td>
              <q-td key="reportTypes" :props="props">
                <q-badge>
                  {{ props.row.reportTypes }}
                </q-badge>
              </q-td>
              <q-td key="author" :props="props">
                <q-badge>
                  {{ props.row.author }}
                </q-badge>
              </q-td>
              <q-td key="date" :props="props">
                <q-badge color="primary">
                  {{ dateconvert(props.row.date) }}
                </q-badge>
              </q-td>
              <q-td key="marking" :props="props">
                <q-badge color="white" text-color="black" transparent>
                  {{ props.row.marking }}
                </q-badge>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { date } from "quasar";
export default defineComponent({
  props: ["data"],
  data() {
    return {
      rows: this.data,
    };
  },
  computed: {
    dateconvert() {
      return (timeStamp) => {
        return date.formatDate(timeStamp, "MMM DD, YYYY");
      };
    },
  },
  mounted() {},
});
</script>

<style lang="scss"></style>
