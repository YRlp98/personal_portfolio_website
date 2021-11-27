<template>
  <div class="index-container">
    <HeroSection class="heroSection" />
    <div class="aboutMe-container">
      <WaveBackground class="waveBackground" />
      <AboutMe class="defualt-margin" />
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/pages/home/HeroSection.vue";
import WaveBackground from "../components/backgrounds/WaveBackground";
import AboutMe from "../components/pages/home/AboutMe.vue";

export default {
  components: {
    HeroSection,
    WaveBackground,
    AboutMe,
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
}

// Tablet
@include mediaQueryMin("md") {
  .aboutMe-container {
    margin-top: 150px;

    .waveBackground {
      top: -310px;
    }
  }
}
</style>
