<template>
  <div class="skillProgress-container">
    <div class="skillProgress-title">
      <h4>. {{ title }}</h4>
      <a :href="link" target="_blank">
        <img src="../assets/images/icons/question_icon.svg" alt="About" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillSimple",
  props: {
    title: {
      type: String,
      default: "Skill Title",
    },
    link: {
      type: String,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>