import { boot } from 'quasar/wrappers'
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default ({ app, router, store }) => {
  // something to do
  app.use(VNetworkGraph)
}
