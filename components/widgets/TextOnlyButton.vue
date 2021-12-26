<template>
  <a class="textOnlyButton" :href="link">{{ text }}</a>
</template>


<script>
export default {
  name: "TextOnlyButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "Button",
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.textOnlyButton {
  text-decoration: none;
  color: white;
  background-color: var(--gray-3);
  padding: 16px 32px;
  padding-bottom: 14px; // To fix font padding issue
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in;
    box-shadow: 0px 4px 90px 1px rgba(255, 255, 255, 0.1);
  }
}
</style>