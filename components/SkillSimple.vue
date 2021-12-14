<template>
  <div class="skillProgress-container">
    <div class="skillProgress-title">
      <h4>. {{ skill.title }}</h4>
      <a :href="skill.link" target="_blank">
        <img src="../assets/images/icons/question_icon.svg" alt="About" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillSimple",
  props: {
    skill: {
      type: Object,
    },
    // title: {
    //   type: String,
    //   default: "Skill Title",
    // },
    // link: {
    //   type: String,
    //   default: "/",
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>