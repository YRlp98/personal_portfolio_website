<template>
  <div class="titleBackground-container">
    <h1>&lt;{{ title }}&gt;</h1>
  </div>
</template>

<script>
export default {
  name: "TitleBackground",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.titleBackground-container {
  position: absolute;
  z-index: -1;
  pointer-events: none;

  h1 {
    text-transform: uppercase;
    font-size: 6.25rem;
    font-weight: 800;
    color: black;
    opacity: 0.15;
    user-select: none;
    white-space: nowrap;
    direction: ltr;
  }
}
</style>