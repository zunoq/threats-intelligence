<template>
  <!-- notice dialogRef here -->
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    transition-show="slide-left"
    transition-hide="slide-right"
    transition-duration="500"
    v-close-popup
  >
    <q-card
      class="q-dialog-plugin q-pa-lg text-tertinary card q-mb-lg"
      dark
      flat
    >
      <q-form @submit.prevent="sendAPIRoot" class="q-gutter-md">
        <q-input
          v-model="apr.name"
          label="Name"
          type="text"
          dark
          color="accent"
        />
        <q-input
          v-model="apr.title"
          autogrow
          type="text"
          dark
          color="accent"
          label="Title"
        />
        <q-input
          v-model="apr.description"
          autogrow
          type="text"
          dark
          color="accent"
          label="Description"
        />
        <q-input
          v-model.number="apr.max_content_length"
          type="number"
          dark
          color="accent"
          label="Max Content Length"
        />
      </q-form>
      <q-card-actions align="right" class="card-action">
        <q-btn flat color="secondary" label="Cancel" @click="onCancelClick" />
        <q-btn
          flat
          color="accent"
          type="submit"
          label="Create"
          @click="sendAPIRoot"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from "quasar";
import formService from "../../services/form.service";
import { ref } from "vue";
export default {
  props: {
    // ...your custom props
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],
  data() {
    return {
      apr: {
        name: "",
        title: "",
        description: "",
        max_content_length: null,
      },
    };
  },
  methods: {
    sendAPIRoot() {
      console.log(this.apr);
      formService.post("/server/apiroots/", this.apr).then((res) => {
        console.log(res).catch((err) => {
          console.log(err);
        });
      });
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
}
</style>
