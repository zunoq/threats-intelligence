<template>
  <!-- notice dialogRef here -->
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    transition-show="slide-left"
    transition-hide="slide-right"
  >
    <q-card class="q-dialog-plugin q-pa-lg text-tertinary card" dark flat>
      <q-input v-model="text" label="Name" dark color="secondary" />
      <q-input
        v-model="text"
        autogrow
        type="textarea"
        dark
        color="secondary"
        label="Description"
      />
      <q-card-actions align="right" class="card-action">
        <q-btn flat color="secondary" label="Cancel" @click="onCancelClick" />
        <q-btn flat color="accent" label="Create" @click="sendAPIRoot" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from "quasar";
import { uid } from "quasar";
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
      apiRoot: {
        id: uid(),
        name: "",
        description: "",
        date: Date.now(),
      },
    methods: {
      sendAPIRoot() {
        let formData = new FormData();
        formData.append("id", this.apiRoot.id)
      }
    }
    };
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
