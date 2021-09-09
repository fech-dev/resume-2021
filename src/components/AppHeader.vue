<template functional>
  <header class="header py-10 text-white bg-gradient-to-b from-blue to-teal">
    <div
      class="
        container container-lg
        flex flex-col
        items-center
        gap-8
        sm:flex-row sm:justify-center
        lg:h-96
      "
    >
      <transition
        enter-active-class="animate__animated animate__fast animate__fadeInLeft"
        appear
      >
        <div
          class="
            header__picture
            w-48
            h-48
            lg:w-56 lg:h-56
            flex-shrink-0
            border-4 border-white
            rounded-full
            overflow-hidden
            shadow-lg
          "
        >
          <img
            src="@/assets/images/pic.jpg"
            alt="Mameli Federico CV"
            class="img-cover"
          />
        </div>
      </transition>

      <div class="header__content text-center md:text-left">
        <transition
          appear
          enter-active-class="animate__animated animate__fast animate__fadeInDown"
        >
          <h1 class="header__title font-bold uppercase">
            Mameli Federico <br />
            <small class="font-weight-bold">Frontend web developer</small>
          </h1>
        </transition>

        <transition
          appear
          enter-active-class="animate__animated animate__fast animate__fadeInRight"
        >
          <contacts-list :contacts="props.contacts" class="mt-5" />
        </transition>
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
