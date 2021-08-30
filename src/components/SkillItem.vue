<template functional>
  <div class="skill-item">
    <h4
      class="skill-item__name uppercase mb-1"
      :class="`text-${props.variant}`"
    >
      {{ props.name }}
    </h4>
    <div class="skill-item__meter h-6 border-2 border-blue shadow">
      <div
        class="
          skill-item__meter-inner
          h-full
          bg-gradient-to-br bg-gradient-primary
        "
        :style="{ width: `${(100 / 5) * props.vote}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    vote: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style lang="scss">
.skill-item {
  &__meter {
    &-inner {
      transition: width 0.3s ease-out;
    }
  }
}
</style>
