<template>
  <section id="education" class="py-3">
    <h2 class="title">Formazione e Corsi</h2>

    <div class="px-4 mt-4">
      <section-content-card
        title="Corso Typescript"
        :date-from="format(new Date('2021-01-01'), 'yyyy')"
      >
      </section-content-card>

      <section-content-card
        title="Corso Algoritmi e Struture Dati"
        :date-from="format(new Date('2021-01-01'), 'yyyy')"
      >
      </section-content-card>

      <section-content-card
        title="Corso Vue"
        :date-from="format(new Date('2018-01-01'), 'yyyy')"
        :date-to="format(new Date('2019-01-01'), 'yyyy')"
      >
      </section-content-card>

      <section-content-card
        title="Corso CSS"
        :date-from="format(new Date('2018-01-01'), 'yyyy')"
        :date-to="format(new Date('2018-01-01'), 'yyyy')"
      >
      </section-content-card>

      <section-content-card
        title="Corso Javascript"
        :date-from="format(new Date('2017-01-01'), 'yyyy')"
        :date-to="format(new Date('2018-01-01'), 'yyyy')"
      >
      </section-content-card>

      <section-content-card
        title="Diploma Informatica e Telecomunicazioni"
        :date-from="format(new Date('2011-09-01'), 'MMMM yyyy')"
        :date-to="format(new Date('2017-07-01'), 'MMMM yyyy')"
      >
      </section-content-card>
    </div>
  </section>
</template>

<script>
import { format } from "date-fns";
export default {
  methods: {
    format,
  },
};
</script>

<style></style>
