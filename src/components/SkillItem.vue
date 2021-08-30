<template functional>
  <div class="skill-item">
    <h5 class="skill-item__name mb-1" :class="`text-${props.variant}`">
      {{ props.name }}
    </h5>
    <div
      class="skill-item__meter border shadow"
      :class="[`border-${props.variant.replace('gradient-', '')}`]"
    >
      <div
        class="skill-item__meter-inner"
        :class="[`bg-${props.variant}`]"
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
    variant: {
      type: String,
      default: "white",
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
    height: 1.5rem;

    &-inner {
      height: 100%;
      transition: width 0.3s ease-out;
    }
  }
}
</style>
