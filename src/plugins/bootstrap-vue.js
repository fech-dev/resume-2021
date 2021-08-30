import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import {
  BIcon,
  BIconEnvelopeFill,
  BIconLinkedin,
  BIconMap,
  BIconPhoneFill,
  BIconGithub,
} from "bootstrap-vue";

Vue.use(BootstrapVue);

//icons
Object.entries({
  BIcon,
  BIconEnvelopeFill,
  BIconLinkedin,
  BIconMap,
  BIconPhoneFill,
  BIconGithub,
}).forEach(([componentName, component]) => {
  Vue.component(componentName, component);
});
