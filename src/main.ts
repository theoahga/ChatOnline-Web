import { createApp } from "vue";
import { createPinia } from "pinia";
import Colada, { PiniaColadaPlugin } from 'colada-plugin';
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "../src/assets/bootstrap.min.css";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

// Stores
const pinia = createPinia();
app.use(pinia);
pinia.use(PiniaColadaPlugin);
app.use(Colada);

// Router
app.use(router);

// Vue Components
app.use(vuetify);

app.mount("#app");
