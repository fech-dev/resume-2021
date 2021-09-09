<template>
  <div id="app">
    <app-header :contacts="contacts" />

    <main
      class="
        main
        container container-xl
        flex flex-col
        md:flex-row md:gap-x-6 md:my-8
      "
    >
      <div class="main__left flex-shrink-0">
        <app-skills :skills="skills" />
      </div>
      <div class="main__right">
        <app-jobs />
        <app-education />
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSkills from "@/components/AppSkills";
import AppJobs from "@/components/AppJobs";
import AppEducation from "@/components/AppEducation";

export default {
  name: "App",
  components: {
    AppHeader,
    AppSkills,
    AppJobs,
    AppEducation,
  },

  data() {
    return {
      contacts: [
        {
          icon: "envelope-fill",
          text: "federico_mameli@yahoo.it",
          href: "mailto:federico_mameli@yahoo.it",
        },
        {
          icon: "phone-fill",
          text: "3488077577",
          href: "tel:3488077577",
        },
        {
          icon: "map",
          text: "Cagliari, Sardegna",
        },
        {
          icon: "linkedin",
          text: "Linkedn",
          href: "https://www.linkedin.com/in/federicomamelifech/",
        },
        {
          icon: "github",
          text: "Github",
          href: "https://github.com/fech-dev",
        },
      ],
      skills: [
        { name: "HTML", vote: 5 },
        { name: "CSS", vote: 5 },
        { name: "Javascript", vote: 4.5 },
        { name: "Vue.js", vote: 4.5 },
        { name: "Nuxt.js", vote: 4 },
        { name: "TypeScript", vote: 2.5 },
        { name: "Node.js", vote: 3 },
        { name: "MongoDB", vote: 3 },
        { name: "Webpack", vote: 4 },
      ],
    };
  },
};
</script>

<style lang="sass">
@import "~@/assets/scss/vendors/tailwind"
@import "~@/assets/scss/base/typo"
@import "~@/assets/scss/base/gradients"
@import "animate.css"

.img-cover
  width: 100
  height: 100
  object-fit: cover

html
  scroll-behavior: smooth

#app
  .main
    &__left
      flex-basis: 30%
</style>
