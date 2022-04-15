<template lang="">
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
</template>
<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      check1: ref(false),
      check2: ref(false),
      check3: ref(false),
    };
  },
});
</script>
<style lang=""></style>
