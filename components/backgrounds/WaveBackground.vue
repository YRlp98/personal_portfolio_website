<template>
  <div class="wave"></div>
</template>

<script>
export default {
  name: "WaveBackground",
};
</script>

<style lang="scss" scoped>
.wave {
  position: absolute;
  z-index: 100;
  height: 200px;
  width: 100%;
  background: url("../../assets/images/wave3.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>