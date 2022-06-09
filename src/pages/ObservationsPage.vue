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
        <template #override-node="{ nodeId, scale, config, ...slotProps }">
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
      obs: {
        nodes: {
          node1: {
            id: 1,
            name: "Attack Pattern",
            face: "https://oasis-open.github.io/cti-documentation/img/icons/attack_pattern.png",
          },
          node2: {
            id: 2,
            name: "Campaign",
            face: "https://oasis-open.github.io/cti-documentation/img/icons/campaign.png",
          },
          node3: {
            id: 3,
            name: "Course of Action",
            face: "https://oasis-open.github.io/cti-documentation/img/icons/course_of_action.png",
          },
          node4: {
            id: 4,
            name: "Grouping",
            face: "https://oasis-open.github.io/cti-documentation/img/icons/grouping.png",
          },
        },
        edges: {
          edge1: { source: "node1", target: "node3" },
          edge2: { source: "node2", target: "node3" },
          edge3: { source: "node3", target: "node4" },
        },
        position: {
          nodes: {
            node1: { x: 100, y: 1000 },
            node2: { x: 50, y: 50 },
            node3: { x: 0, y: 0 },
            node4: { x: 150, y: 0 },
          },
        },
      },
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
    addObs() {
      this.$q
        .dialog({
          component: AddObject,
          componentProps: {},
        })
        .onOk((e) => {
          this.$q.localStorage.set("obs", e);
          this.getObs();
        })
        .onCancel(() => {})
        .onDismiss(() => {});
    },
    getObs() {
      const t = this.$q.localStorage.getItem("obs");
      this.obs = t;
      console.log(this.obs);
    },
  },
  beforeCreate() {
    const t = this.$q.localStorage.getItem("obs");
    this.obs = t;
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
