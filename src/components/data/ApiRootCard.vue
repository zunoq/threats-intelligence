<template lang="">
  <div class="col-auto">
    <q-card class="my-card bg-primary" dark flat bordered>
      <div>
        <div
          v-ripple
          @click.stop="onCardClick()"
          class="cursor-pointer relative-position layout"
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar class="bg-secondary text-uppercase">
                {{ getFirstLetter(apiRoot.title) }}
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase">{{
                apiRoot.title
              }}</q-item-label>
              <q-item-label class="text-grey-5" caption>{{
                apiRoot.name
              }}</q-item-label>
            </q-item-section>
            <div class="action">
              <q-btn round flat @click.stop="show = true" icon="more_vert">
                <q-menu fit auto-close square flat>
                  <q-list class="bg-primary">
                    <q-item clickable dark @click.stop="updateAPIRoot">
                      <q-item-section>Update</q-item-section>
                    </q-item>
                    <q-item clickable dark @click.stop="deleteAPIRoot">
                      <q-item-section>Remove</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-item>
          <q-card-section>
            {{ truncate(apiRoot.description, 150) }}
          </q-card-section>
          <q-card-section>
            Max content length: {{ apiRoot.max_content_length }}
          </q-card-section>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { date, Notify, LocalStorage } from "quasar";
import UpdateAPIRoot from "../dialogs/UpdateAPIRoot.vue";
import Service from "../../services/rest.service";

export default defineComponent({
  name: "ApiRootCard",
  components: {},
  props: ["data"],
  data() {
    return {
      apiRoot: this.data,
      del: {
        name: this.data.name,
      },
    };
  },
  methods: {
    onCardClick() {
      this.$q.localStorage.set("apiRoot", this.apiRoot);
      this.$router.push("/threats/" + this.apiRoot.name);
    },
    deleteAPIRoot() {
      // Service.delete(`/server/apiroots/${this.apiRoot.name}`);
      let url = `/server/apiroots/${this.apiRoot.name}`;
      this.$emit("deleteAPR", url);
    },
    updateAPIRoot() {
      this.$q
        .dialog({
          component: UpdateAPIRoot,
          componentProps: {
            data: this.apiRoot,
          },
        })
        .onOk(() => {})
        .onCancel(() => {
          console.log("Cancel");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    },
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
    dateconvert() {
      return (timeStamp) => {
        if (typeof timeStamp == "integer")
          return date.formatDate(timeStamp, "MMM DD, YYYY");
        else {
          return date.formatDate(new Date(timeStamp), "MMM DD, YYYY");
        }
      };
    },
  },
});
</script>
<style scoped lang="scss">
.my-card {
  min-width: 400px;
  .card-title {
    padding: 12px 16px 8px 16px;
  }
}
</style>
