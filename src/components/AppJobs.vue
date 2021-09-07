<template>
  <section id="jobs" class="py-3">
    <h2 class="title">Esperienza Lavorativa</h2>

    <div class="px-4 mt-4">
      <transition appear enter-active-class="animate__animated animate__fadeIn">
        <section-content-card
          title="Front End Web Developer - Smart contact"
          :date-from="format(new Date('2018-06-01'), 'MMM yyyy')"
          date-to="attuale"
        >
          Frontend developer nella sezione digital.
          <ul class="list-disc pl-4">
            <li>
              Principale sviluppo e mantenimento di landing page per varie
              aziende operanti nel campo dell'energia, telefonia e internet
              finalizzate alla lead generation.
            </li>
            <li>
              Sviluppo e manuntenzione di script/packages per il funzionamento
              del core e features delle landing, rendendo la creazione modulare,
              semplice e veloce.
            </li>
            <li>Organizzazione del team e formazione tirocinanti.</li>
            <li>
              Implementazione motore di comparazione all'interno del sito
              prezzogiusto.com.
            </li>
          </ul>
        </section-content-card>
      </transition>
    </div>
  </section>
</template>

<script>
import formatDateMixin from "@/mixins/dateFormat";

export default {
  name: "AppJobs",
  mixins: [formatDateMixin],
};
</script>

<style></style>
