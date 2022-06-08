<template>
  <q-page padding>
    <div class="row">
      <v-network-graph
        :nodes="obs.nodes"
        :edges="obs.edges"
        :layouts="obs.position"
        :configs="configs"
        :layers="layers"
      >
        <defs>
          <clipPath id="faceCircle" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.5" />
          </clipPath>
        </defs>

        <!-- Replace the node component -->
        <template #override-node="{ nodeId, scale, config, ...slotProps }">
          <!-- circle for filling background -->
          <circle
            class="face-circle"
            :r="config.radius * scale"
            fill="#ffffff"
            v-bind="slotProps"
          />
          <image
            class="face-picture"
            :x="-config.radius * scale"
            :y="-config.radius * scale"
            :width="config.radius * scale * 2"
            :height="config.radius * scale * 2"
            :xlink:href="obs.nodes[nodeId].face"
            clip-path="url(#faceCircle)"
          />
          <div
            class="face-circle"
            :r="config.radius * scale"
            fill="none"
            stroke="#00b1ff"
            :stroke-width="1 * scale"
            v-bind="slotProps"
          />
        </template>
      </v-network-graph>
      <q-btn
        unelevated
        round
        color="accent"
        size="lg"
        icon="add"
        class="add-btn"
        @click="addObs()"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import { getCssVar, date, Notify, useQuasar, LocalStorage } from "quasar";
import AddObject from "../components/dialogs/AddObject.vue";

import * as vNG from "v-network-graph";
import { ForceLayout } from "v-network-graph/lib/force-layout";

export default defineComponent({
  name: "ObservationsPage",
  data() {
    return {
      obs: ref({}),
      configs: vNG.defineConfigs({
        view: {
          panEnabled: true,
          scalingObjects: true,
          layoutHandler: new ForceLayout(),
        },
        node: {
          selectable: true,
          normal: {
            type: "circle",
            radius: 24,
            width: 40,
            height: 40,
            borderRadius: 4,
            color: getCssVar("secondary"),
            strokeWidth: 0,
            strokeColor: "#000000",
            strokeDasharray: "0",
          },
          hover: {
            type: "circle",
            radius: 24,
            // for type is "rect" -->
            width: 44,
            height: 44,
            borderRadius: 4,
            // <-- for type is "rect"
            strokeWidth: 0,
            strokeColor: "#000000",
            strokeDasharray: "0",
            color: "#dd2288",
          },
          selected: {
            type: "circle",
            radius: 24,
            // for type is "rect" -->
            width: 32,
            height: 32,
            borderRadius: 4,
            // <-- for type is "rect"
            strokeWidth: 0,
            strokeColor: "#000000",
            strokeDasharray: "0",
            color: getCssVar("accent"),
          },
          label: {
            visible: true,
            fontFamily: undefined,
            fontSize: 11,
            lineHeight: 1.1,
            color: getCssVar("accent"),
            margin: 4,
            direction: "south",
            background: {
              visible: false,
              color: "#ffffff",
              padding: {
                vertical: 1,
                horizontal: 4,
              },
              borderRadius: 2,
            },
          },
          focusring: {
            visible: true,
            width: 4,
            padding: 3,
            color: "#eebb00",
            dasharray: "0",
          },
        },
        edge: {
          selectable: true,
          normal: {
            width: 1,
            color: "#999",
            dasharray: "0",
            linecap: "butt",
            animate: true,
            animationSpeed: 50,
          },
          hover: {
            width: 2,
            color: getCssVar("accent"),
            dasharray: "0",
            linecap: "butt",
            animate: true,
            animationSpeed: 50,
          },
          selected: {
            width: 3,
            color: "#dd8800",
            dasharray: "6",
            linecap: "round",
            animate: true,
            animationSpeed: 50,
          },
          gap: 3,
          type: "straight",
          summarize: true,
          summarized: {
            label: {
              fontSize: 10,
              color: "#4466cc",
            },
            shape: {
              type: "rect",
              radius: 6, // for type is "circle"
              width: 12,
              height: 12,
              borderRadius: 3,
              color: "#ffffff",
              strokeWidth: 1,
              strokeColor: "#4466cc",
              strokeDasharray: "0",
            },
            stroke: {
              width: 5,
              color: "#4466cc",
              dasharray: "0",
              linecap: "butt",
              animate: false,
              animationSpeed: 50,
            },
          },
        },
      }),
      layers: {
        "font-defs": "root",
        badge: "nodes",
      },
    };
  },
  emits: ["e"],
  methods: {
    async addObs() {
      this.$q
        .dialog({
          component: AddObject,
          componentProps: {},
        })
        .onOk((e) => {
          this.$q.localStorage.set("obs", e).then(this.getObs());
        })
        .onCancel(() => {})
        .onDismiss(() => {});
    },
    getObs() {
      const t = this.$q.localStorage.getItem("obs");
      this.obs = t;
    },
  },
  created() {
    this.getObs();
    console.log(this.obs);
  },
});
</script>
<style lang="scss" scoped>
.add-btn {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>
