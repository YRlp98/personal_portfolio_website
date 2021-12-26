<template>
  <div class="homeTitle-container">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.homeTitle-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: 2px solid var(--green-1);
  padding-right: 20px;

  h1 {
    font-size: 1.75rem;
    font-weight: bold;
  }
}
</style>