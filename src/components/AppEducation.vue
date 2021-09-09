<template>
  <section id="education" class="py-3 overflow-hidden">
    <h2 class="title">Formazione e Corsi</h2>

    <transition-group
      tag="div"
      class="px-4 mt-4"
      appear
      enter-active-class="animate__animated animate__fast animate__fadeInRight "
    >
      <template v-for="(education, i) in educations">
        <section-content-card
          :key="education.title"
          :style="{ 'animation-delay': `${150 * i}ms` }"
          v-bind="education"
        />
      </template>
    </transition-group>
  </section>
</template>

<script>
import formatDateMixin from "@/mixins/dateFormat";
import marked from "marked";

export default {
  mixins: [formatDateMixin],

  data() {
    return {
      educations: [
        {
          title: "Corsi Attuali",
          dateFrom: this.format(new Date("2021-01-01"), "yyyy"),
          body: marked(
            "Attualmente sto seguendo un corso di [Strutture dati e Algoritmi](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass) e un corso su [TypeScript](https://www.udemy.com/course/understanding-typescript/)"
          ),
        },
        {
          title: "Corsi Seguiti",
          dateFrom: this.format(new Date("2017-01-01"), "yyyy"),
          dateTo: this.format(new Date("2020-12-01"), "yyyy"),
          body: marked(
            "Dopo il diploma ho seguito vari corsi tra cui: \n- *CSS*: (https://www.udemy.com/course/advanced-css-and-sass/) \n- *JS*: (https://www.udemy.com/course/the-complete-javascript-course)\n- *Vue*: (https://www.udemy.com/course/vuejs-2-the-complete-guide/)\n - *Node.js*: (https://www.udemy.com/course/nodejs-express-mongodb-bootcamp)"
          ),
        },
        {
          title: "Diploma Informatica e Telecomunicazioni",
          dateFrom: this.format(new Date("2011-09-01"), "MMM yyyy"),
          dateTo: this.format(new Date("2017-07-01"), "MMM yyyy"),
          body: marked(
            "Le tematiche affrontate sono: \n- Fondamenti di informatica.\n- Sistemi e Reti.\n- Programmazione a oggetti.\n- Programmazione web.\n\n I linguaggi utilizzati sono: C, Java, HTML, CSS, PHP, MySql."
          ),
        },
      ],
    };
  },
};
</script>
