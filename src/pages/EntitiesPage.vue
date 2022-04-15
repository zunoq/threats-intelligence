<template>
  <q-page class="container">
    <div class="row">
      <div class="col-sm-12 col-md-10">
        <div class="row q-py-md">
          <q-input
            dark
            dense
            standout="bg-dark"
            v-model="text"
            input-class="text-left"
            class="q-ml-md"
            bg-color="active"
            :input-style="{ color: 'rgba(255,255,255,0.7)' }"
          >
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon
                v-else
                name="clear"
                class="cursor-pointer"
                @click="text = ''"
              />
            </template>
          </q-input>
        </div>
        <div class="row-12">
          <EntitiesTable />
        </div>
      </div>
      <div class="col-md-2 large-screen-only-filter bg-primary">
        <EntitiesFilter />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import EntitiesTable from "../components/entities/EntitiesTable.vue";
import EntitiesFilter from "../components/entities/EntitiesFilter.vue";

export default defineComponent({
  name: "EntitiesPage",
  components: {
    EntitiesTable,
    EntitiesFilter,
  },
  setup() {
    return {
      text: ref(""),
    };
  },
});
</script>
<style lang="scss">
.q-input {
  .q-icon {
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
