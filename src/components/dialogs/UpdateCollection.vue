<template>
  <!-- notice dialogRef here -->
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    full-height
    transition-show="slide-left"
    transition-hide="slide-right"
    transition-duration="500"
    v-close-popup
  >
    <q-card class="q-dialog-plugin q-pa-lg text-tertinary card" dark flat>
      <div class="text-h6 text-accent">Update Collection</div>
      <q-form @submit.prevent="updateCollection" class="q-gutter-md">
        <div class="q-my-lg">
          <q-input
            v-model="collection.title"
            autogrow
            type="text"
            dark
            color="accent"
            label="Title"
          />
        </div>
        <div class="q-mt-md">
          <div class="text">Can read</div>
          <q-toggle v-model="collection.can_read" color="accent" size="xl" />
        </div>
        <div class="q-mt-md">
          <div class="text">Can write</div>
          <q-toggle v-model="collection.can_write" color="accent" size="xl" />
        </div>
      </q-form>
      <q-card-actions align="right" class="card-action">
        <q-btn flat color="secondary" label="Cancel" @click="onCancelClick" />
        <q-btn
          flat
          color="accent"
          type="submit"
          label="Update"
          @click="updateCollection"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent, Notify } from "quasar";
import formService from "../../services/form.service";
import restService from "../../services/rest.service";
import { ref } from "vue";
export default {
  props: ["data", "cl"],

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
    "updatedCollection",
  ],
  data() {
    return {
      apiRoot: this.data,
      collection: {
        collection_id: this.cl.id,
        title: this.cl.title,
        can_read: this.cl.can_read,
        can_write: this.cl.can_write,
      },
    };
  },
  methods: {
    updateCollection() {
      let body = `collection_id=${this.collection.collection_id}&title=${this.collection.title}&can_read=${this.collection.can_read}&can_write=${this.collection.can_write}`;
      console.log(body);
      formService
        .put(`/server/apiroots/${this.apiRoot.name}/`, body)
        .then((res) => {
          console.log(res);
          Notify.create({
            message: "Tạo Collection thành công",
            color: "green",
            position: "top",
          });
        })
        .catch((err) => {
          console.log(err);
        });
      let update = formService.get(`/server/apiroots/${this.apiRoot.name}/`);
      this.$emit("updateCollection", update);
    },
  },

  setup() {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },
};
</script>
<style scoped lang="scss">
.card {
  position: fixed;
  right: 0px;
  height: 100%;
  width: 30%;
  .card-action {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .text {
    font-size: 16px;
    color: rgba(#fff, $alpha: 0.7);
  }
}
</style>
