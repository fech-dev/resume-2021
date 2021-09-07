import Vue from "vue";
import {
  BIcon,
  BIconEnvelopeFill,
  BIconLinkedin,
  BIconMap,
  BIconPhoneFill,
  BIconGithub,
} from "bootstrap-vue";

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
