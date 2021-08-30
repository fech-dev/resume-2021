<template>
  <div id="app">
    <app-header :contacts="contacts" />

    <main class="main container-xl">
      <app-skills :skills="skills" />
      <app-jobs />
      <app-education />
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
        { name: "Node.js", vote: 3 },
        { name: "MongoDB", vote: 3 },
        { name: "Webpack", vote: 4 },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-gradient-primary {
  background-image: linear-gradient(
    175deg,
    theme-color("primary") 35%,
    color("teal") 82.5%
  );
}

html {
  scroll-behavior: smooth;
}

#app {
  .main {
    /*  display: grid;
    grid-template-columns: 0.3fr 0.7fr;
    gap: 1.5rem 0; */

    #skills {
      /*  grid-row: 1 / -1;
      grid-column: 1 / span 1; */
    }

    #jobs,
    #education {
      /* grid-column: 2 / span 1; */
    }
  }
}
</style>
