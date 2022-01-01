<template>
  <div class="projects-container defualt-margin">
    <h1 class="title">{{ $t("projects") }}</h1>
    <div class="filter">
      <p>نمایش:</p>
      <ul>
        <li>همه</li>
        <li>طراحی</li>
        <li>وب</li>
        <li>موبایل</li>
        <li>متفرقه</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "projects",
};
</script>

<style lang="scss" scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .title {
    margin-top: 250px;
    font-size: 2.125rem;
    font-weight: bold;
    color: var(--gray-1);
  }

  .filter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ul {
      display: flex;
    }
  }
}
</style>