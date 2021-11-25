<template>
  <div class="index-container">
    <HeroSection class="heroSection" />
    <div class="aboutMe-container">
      <WaveBackground class="waveBackground" />
      <div class="aboutMe defualt-margin">
        <h1>Test title...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          corrupti esse, ex exercitationem distinctio mollitia voluptas atque
          doloribus labore illum sequi molestias voluptatibus repellat, ut a
          quae modi eveniet reiciendis.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/pages/home/HeroSection.vue";
import WaveBackground from "../components/backgrounds/WaveBackground";

export default {
  components: {
    HeroSection,
    WaveBackground,
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  position: relative;
  overflow: hidden;
}

.aboutMe-container {
  position: relative;

  .waveBackground {
    top: -200px;
  }

  .aboutMe {
    margin-top: 50px;
    background-color: red;
  }

  // Tablet
  @include mediaQueryMin("md") {
    margin-top: 150px;

    .waveBackground {
      top: -310px;
    }
  }
}
</style>
