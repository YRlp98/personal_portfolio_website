<template>
  <div class="heroSection-container">
    <div class="heroSection-welcome">
      <h1>{{ $t("homePageHello") }}</h1>
      <h1>{{ $t("homePageName") }}</h1>
      <h2>{{ $t("homePageJobTitleP1") }}</h2>
      <h2>{{ $t("homePageJobTitleP2") }}</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.heroSection-container {
  background-color: royalblue;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  direction: rtl;
  top: 0;

  .heroSection-welcome {
    padding-top: 150px;

    h1 {
      font-size: 50px;
      font-weight: normal;
      color: white;
      word-spacing: -10px;
    }

    h2 {
      padding-top: 20px;
      font-size: 24px;
      color: var(--green-1);
      word-spacing: -5px;
    }
  }
}
</style>
