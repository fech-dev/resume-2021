<template functional>
  <div class="section-content-card" v-bind="data">
    <div class="section-content-card__head">
      <h3 class="section-content-card__title text-blue-dark mb-0">
        <slot name="title">
          {{ props.title }}
        </slot>
      </h3>
      <em class="section-content-card__date d-block small">
        <slot name="dates"> {{ props.dateFrom }} - {{ props.dateTo }}</slot>
      </em>
    </div>
    <div
      class="section-content-card__body py-2 px-1"
      v-html="props.body"
      v-if="props.body"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionContentCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    dateFrom: {
      type: String,
      default: "",
    },
    dateTo: {
      type: String,
      default: "attuale",
    },
    body: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.section-content-card {
  &__body {
    ul {
      list-style: disc;
      @apply pl-4;
    }
  }
}
</style>
