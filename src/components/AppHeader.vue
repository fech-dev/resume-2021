<template functional>
  <header class="header py-8 text-white bg-gradient-to-b from-blue to-teal">
    <div
      class="
        container container-lg
        flex flex-col
        items-center
        gap-8
        sm:flex-row sm:justify-center
      "
    >
      <div
        class="
          header__picture
          w-40
          h-40
          flex-shrink-0
          border-4 border-white
          rounded-full
          overflow-hidden
          shadow-lg
        "
      >
        <img
          src="@/assets/images/pic.jpeg"
          alt="Mameli Federico CV"
          class="img-cover"
        />
      </div>

      <div class="header__content text-center md:text-left">
        <h1 class="header__title font-bold uppercase">
          Mameli Federico <br />
          <small class="font-weight-bold">Frontend web developer</small>
        </h1>

        <contacts-list :contacts="props.contacts" class="mt-5" />
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
  &__title {
    line-height: 0.8;
    small {
      font-size: 66%;
    }
  }
}
</style>
