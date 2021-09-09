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

export default {
  mixins: [formatDateMixin],

  data() {
    return {
      educations: [
        {
          title: "Corso Algoritmi e Strutture Dati",
          dateFrom: this.format(new Date("2021-01-01"), "yyyy"),
        },
        {
          title: "Corso Typescript",
          dateFrom: this.format(new Date("2021-01-01"), "yyyy"),
          dateTo: this.format(new Date("2021-01-01"), "yyyy"),
        },
        {
          title: "Corso Vue",
          dateFrom: this.format(new Date("2018-01-01"), "yyyy"),
          dateTo: this.format(new Date("2019-01-01"), "yyyy"),
        },
        {
          title: "Corso CSS",
          dateFrom: this.format(new Date("2018-01-01"), "yyyy"),
          dateTo: this.format(new Date("2018-01-01"), "yyyy"),
        },
        {
          title: "Corso Javascript",
          dateFrom: this.format(new Date("2017-01-01"), "yyyy"),
          dateTo: this.format(new Date("2018-01-01"), "yyyy"),
        },
        {
          title: "Diploma Informatica e Telecomunicazioni",
          dateFrom: this.format(new Date("2011-09-01"), "MMM yyyy"),
          dateTo: this.format(new Date("2017-07-01"), "MMM yyyy"),
        },
      ],
    };
  },
};
</script>
