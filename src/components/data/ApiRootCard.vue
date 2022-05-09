<template lang="">
  <div>
    <q-card class="my-card bg-primary" dark flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar class="bg-malware text-uppercase">
            {{ getFirstLetter("malware") }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Malware</q-item-label>
          <q-item-label class="text-grey-6" caption>Subhead</q-item-label>
        </q-item-section>
        <div>
          <q-btn round flat icon="more_vert">
            <q-menu fit auto-close square flat>
              <q-list class="bg-primary">
                <q-item clickable dark>
                  <q-item-section>Remove</q-item-section>
                </q-item>
                <q-item clickable dark>
                  <q-item-section>Add To Favourite</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-item>

      <q-card-section>
        {{ truncate(string, 125) }}
      </q-card-section>
      <q-card-section>
        <RoundedLabel data="osint" str="" />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import RoundedLabel from "../Others/RoundedLabel.vue";
export default defineComponent({
  name: "ApiRootCard",
  components: { RoundedLabel },
  data() {
    return {
      string:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  },
  computed: {
    getFirstLetter() {
      return (str) => {
        return str.substr(0, 1);
      };
    },
    truncate() {
      return (str, n) => {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
      };
    },
  },
});
</script>
<style scoped lang="scss">
.my-card {
  width: 435px;
  height: 195px;
}
</style>
