<template>
  <q-layout view="hhh lpr fFf">
    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      class="bg-primary"
      width="250"
      :breakpoint="1400"
    >
      <q-scroll-area class="fit">
        <div class="">
          <q-list dark dense>
            <q-item-label class="text-bold" header
              >Entities types
              <q-icon name="filter_alt_off" size="xs" />
            </q-item-label>
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check1" dark size="xs" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Attack Pattern</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check2" dark size="xs" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Campaign</q-item-label>
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check3" dark size="xs" />
              </q-item-section>

              <q-item-section>
                <q-item-label>City</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
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
      <EntitiesTable />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EntitiesTable from "../components/entities/EntitiesTable.vue";

export default defineComponent({
  name: "EntitiesPage",
  components: {
    EntitiesTable,
  },
  setup() {
    return {
      text: ref(""),
      check1: ref(false),
      check2: ref(false),
      check3: ref(false),
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
.q-layout {
  .q-drawer {
    border-left: 1px solid;
  }
}
</style>
