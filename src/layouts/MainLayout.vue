<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="bg-layout" flat dark elevated>
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <div class="large-screen-only">
          <img height="64" src="../assets/logo_bg.png" alt="" />
        </div>
        <q-space />

        <q-input
          dark
          dense
          standout="bg-dark"
          v-model="text"
          input-class="text-left"
          class="q-mx-sm"
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
        <q-btn
          flat
          round
          color="primary"
          icon="manage_search"
          @click="advancedSearch"
        >
          <q-tooltip> Advanced Search</q-tooltip>
        </q-btn>
        <div class="large-screen-only-navbar">
          <q-separator dark vertical inset spaced />
          <q-btn flat round color="primary" icon="dashboard_customize">
            <q-tooltip> Customize Dashboard </q-tooltip>
          </q-btn>
          <q-btn flat round color="primary" icon="explore">
            <q-tooltip> Investigation </q-tooltip></q-btn
          >
          <q-btn flat round color="primary" icon="upload">
            <q-tooltip> Data Import </q-tooltip></q-btn
          >
          <q-btn flat round color="primary" icon="account_circle"> </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="764"
      class="medium-font bg-layout text-white"
      active-color="white"
      flat
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item clickable v-ripple to="/dashboard" active-class="active-page">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>
          <q-expansion-item icon="cookie" label="Activities">
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              to="/analysis"
              active-class=" active-page"
              dense
            >
              <q-item-section avatar>
                <q-icon name="assignment" />
              </q-item-section>

              <q-item-section> Analysis </q-item-section>
            </q-item>
            <q-item
              clickable
              active-class="active-page"
              v-ripple
              class="q-pl-xl"
              to="/event"
              dense
            >
              <q-item-section avatar>
                <q-icon name="event" />
              </q-item-section>

              <q-item-section> Events </q-item-section> </q-item
            ><q-item
              clickable
              active-class="active-page"
              v-ripple
              class="q-pl-xl"
              to="/observations"
              dense
            >
              <q-item-section avatar>
                <q-icon name="remove_red_eye" />
              </q-item-section>

              <q-item-section> Observations </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item icon="psychology" label="Knowledge">
            <q-item
              clickable
              active-class="active-page"
              v-ripple
              class="q-pl-xl"
              to="/threats"
              dense
            >
              <q-item-section avatar>
                <q-icon name="science" />
              </q-item-section>

              <q-item-section> Threats </q-item-section>
            </q-item>
            <q-item
              clickable
              active-class="active-page"
              v-ripple
              class="q-pl-xl"
              to="/arsenal"
              dense
            >
              <q-item-section avatar>
                <q-icon name="leaderboard" />
              </q-item-section>

              <q-item-section> Arsenal </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
        <q-separator dark dense />
        <q-list>
          <q-expansion-item icon="storage" label="Data">
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              to="/entities"
              active-class=" active-page"
              dense
            >
              <q-item-section avatar>
                <q-icon name="bug_report" />
              </q-item-section>

              <q-item-section> Entities </q-item-section>
            </q-item>
            <q-item
              clickable
              active-class="active-page"
              v-ripple
              class="q-pl-xl"
              to="/backgroundtasks"
              dense
            >
              <q-item-section avatar>
                <q-icon name="splitscreen" />
              </q-item-section>

              <q-item-section> Background Tasks </q-item-section> </q-item
            ><q-item
              clickable
              active-class="active-page"
              v-ripple
              class="q-pl-xl"
              to="/connectors"
              dense
            >
              <q-item-section avatar>
                <q-icon name="sensors" />
              </q-item-section>

              <q-item-section> Connectors </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-item clickable active-class="active-page" v-ripple to="/settings">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section> Settings </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-dark">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useQuasar, useDialogPluginComponent } from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    return {
      text: ref(""),
      drawer: ref(false),
      dialogRef,
      onDialogHide,
      onOKClick() {
        console.log("object");
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

<style lang="scss">
.my-tooltip-content {
  font-size: 50px;
}
.q-header {
  height: 64px;
  border-bottom: 1px solid #001;
  .q-toolbar {
    height: 64px;
    .q-icon {
      color: #fff;
    }
    .q-btn {
      margin: 2px;
    }
  }
}
.q-drawer {
  border-right: 1px solid $separator-dark-color;
  .q-item__section--side {
    color: #fff;
  }
  .active-page {
    background-color: $active;
  }
  .q-item__section--icon {
  }
  .q-item__section--avatar {
    min-width: 30px;
  }
  .q-item__section--side {
    color: $secondary;
  }
  .q-expansion-item__toggle-icon {
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
