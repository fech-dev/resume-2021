<template functional>
  <header class="header bg-gradient-primary text-white py-4">
    <div
      class="
        container-lg
        d-flex
        flex-column flex-sm-row
        align-items-center
        justify-content-sm-center
      "
    >
      <div class="header__picture rounded-circle shadow-lg">
        <img
          src="@/assets/images/pic.jpeg"
          alt="Mameli Federico CV"
          class="img-cover"
        />
      </div>

      <div class="header__content text-center text-md-left">
        <h1 class="text-uppercase header__title">
          Mameli Federico <br />
          <small class="font-weight-bold">Frontend web developer</small>
        </h1>

        <contacts-list :contacts="props.contacts" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.header {
  > [class*="container"] {
    gap: 2rem;
  }

  &__picture {
    $size: 10rem;
    flex: 0 0 $size;
    width: $size;
    height: $size;
    border: 5px solid $white;
    overflow: hidden;
  }

  &__title {
    small {
      font-size: 66%;
    }
  }
}
</style>
