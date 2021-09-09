<template>
  <section id="jobs" class="py-3">
    <h2 class="title">Esperienza Lavorativa</h2>

    <div class="px-4 mt-4">
      <transition-group
        appear
        enter-active-class="animate__animated animate__fadeIn"
      >
        <section-content-card
          v-for="(job, i) in jobs"
          :key="job.title"
          :style="{ 'animation-delay': 150 * i + 'ms' }"
          v-bind="job"
        >
        </section-content-card>
      </transition-group>
    </div>
  </section>
</template>

<script>
import formatDateMixin from "@/mixins/dateFormat";
import marked from "marked";

export default {
  name: "AppJobs",
  mixins: [formatDateMixin],
  data() {
    return {
      jobs: [
        {
          title: "Collaboratore progetto vue-cli-plugin-bootstrap-vue",
          dateFrom: this.format(new Date("2021-05-01"), "MMM yyyy"),
          body: this.$sanitizeHTML(
            marked(
              `Implementazione di nuove features e bugfix.\n\nLink github: [https://github.com/GregYankovoy/vue-cli-plugin-bootstrap-vue](https://github.com/GregYankovoy/vue-cli-plugin-bootstrap-vue)`
            )
          ),
        },

        {
          title: "Front End Web Developer - Smart Contact",
          dateFrom: this.format(new Date("2018-06-01"), "MMM yyyy"),
          body: this.$sanitizeHTML(
            marked(
              `Frontend developer nella sezione digital.\n - Principale sviluppo e mantenimento di landing page per varie aziende operanti nel campo dell'energia, telefonia e internet finalizzate alla lead generation.\n - Sviluppo e manuntenzione di script/packages per il funzionamento del core e features delle landing, rendendo la creazione modulare, semplice e veloce.\n - Organizzazione del team e formazione tirocinanti\n - Implementazione motore di comparazione all'interno del sito prezzogiusto.com.`
            )
          ),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.section-content-card + .section-content-card {
  @apply mt-5;
}
</style>
