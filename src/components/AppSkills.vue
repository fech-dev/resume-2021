<template>
  <section id="skills" class="py-3">
    <h2 class="title">Skills</h2>

    <transition-group
      tag="ul"
      class="mb-0 mt-5"
      :css="false"
      appear
      @beforeEnter="beforeEnter"
      @enter="enter"
    >
      <li
        v-for="(skill, i) in skills"
        :key="skill.name"
        :data-index="i"
        class="mb-2"
      >
        <skill-item :name="skill.name" :vote="skill.vote" />
      </li>
    </transition-group>
  </section>
</template>

<script>
import velocity from "velocity-animate";
import SkillItem from "@/components/SkillItem.vue";

export default {
  components: {
    SkillItem,
  },

  props: {
    skills: {
      type: Array,
      required: true,
    },
  },

  methods: {
    beforeEnter(el) {
      el.style.setProperty("opacity", 0);
      el.style.setProperty("transform", "translateY(-50px)");
    },
    enter(el, done) {
      const duration = 400;

      setTimeout(() => {
        velocity(
          el,
          {
            opacity: 1,
            translateY: "0px",
          },
          {
            duration,
            easing: "ease-out",
            complete: done,
          }
        );
      }, (duration - 50) * el.dataset.index);
    },
  },
};
</script>
