<template>
  <section id="skills" class="py-3">
    <h2 class="title">Skills</h2>

    <transition-group
      tag="ul"
      class="mb-0 mt-5"
      appear
      enter-active-class="animate__animated animate__faster animate__fadeInDown"
    >
      <li
        v-for="(skill, i) in skills"
        :key="skill.name"
        :style="{ 'animation-delay': `${100 * i}ms` }"
        class="mb-2"
      >
        <skill-item :name="skill.name" :vote="skill.vote" />
      </li>
    </transition-group>
  </section>
</template>

<script>
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
};
</script>
