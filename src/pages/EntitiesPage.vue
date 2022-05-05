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
      <EntitiesTable :data="entitiesList" />
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
  data() {
    return {
      entitiesList: [
        {
          id: 1,
          type: { name: "report", icon: "report" },
          name: "Alert(TA14-353A1)",
          marking: "tlp:red",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: ["osint", "malware"],
          ratings: [10, 14, 51, 75, 30],
          confidenceLevel: "low",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "RISKIQ",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
        {
          id: 2,
          type: { name: "report", icon: "report" },
          name: "Alert(TA14-353A2)",
          marking: "tlp:blue",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: [],
          ratings: [0, 0, 4, 7, 3],
          confidenceLevel: "",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "[CONNECTOR] ALIENTVAULT",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
        {
          id: 3,
          type: { name: "report", icon: "report" },
          name: "CVE-2022-22965 ANALYZING THE EXPLOITATION OF SPRING4SHELL VULNERABILITY",
          marking: "tlp:white",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: ["avast", "zloader", "ransomeware", "backdoor"],
          ratings: [0, 1, 11, 0, 6],
          confidenceLevel: "strong",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "LoqMissQ",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
        {
          id: 4,
          type: { name: "report", icon: "report" },
          name: "[MITRE ATT&CK] QUIETSIEVE (S0686)",
          marking: "tlp:amber",
          standardID: "report--c3dab810-3b4a-5c6b-b848-f935e13ea6c8",
          otherIDs: [
            "report--86199b49-10c5-4f21-b27a-d1dcd4eb65d5",
            "report--e5a3759f-0a92-4315-988d-70e42952a488",
          ],
          author: "RISKIQ",
          revoked: "no",
          labels: ["avast", "zloader", "ransomeware", "backdoor"],
          ratings: [0, 1, 11, 0, 6],
          confidenceLevel: "strong",
          platformcredate: 1650340161065,
          credate: 1650340193318,
          moddate: 1650340224516,
          creator: "LoqMissQ",
          processStatus: "disabled",
          description:
            "Microsoft recently announced a joint investigation of multiple security companies and information sharing and analysis centers (ISACs) with the aim to take down the Zloader botnet and took the whole case to court. In this study Avast looks into Zloader 2, showing how it works and its code peculiarities. Included in this blog posts are results of their deep dive into the botnets and campaigns and show some interesting connections between Zloader and other malware families.",
          reportTypes: "threat-report",
        },
      ],
    };
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
<style scoped lang="scss">
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
