<template>
  <div class="index-container">
    <HeroSection class="heroSection" />
    <div class="aboutMe-container">
      <WaveBackground class="waveBackground" />
      <AboutMe class="defualt-margin" />
    </div>
    <div class="defualt-margin education-container">
      <Education />
    </div>
    <div class="defualt-margin experience-container">
      <Experience />
    </div>
    <div class="skills-container">
      <Skills />
    </div>
    <div class="defualt-margin projects-container">
      <Projects />
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/pages/home/HeroSection.vue";
import WaveBackground from "../components/backgrounds/WaveBackground";
import AboutMe from "../components/pages/home/AboutMe.vue";
import Education from "../components/pages/home/Education.vue";
import Experience from "../components/pages/home/Experience.vue";
import Skills from "../components/pages/home/Skills.vue";
import Projects from "../components/pages/home/Projects";

export default {
  components: {
    HeroSection,
    WaveBackground,
    AboutMe,
    Education,
    Experience,
    Skills,
    Projects,
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

.education-container {
  position: relative;
  margin-top: 150px;
}

.experience-container {
  margin-top: 150px;
}

.skills-container {
  margin-top: 150px;
}

.projects-container {
  margin-top: 150px;
}

// Tablet
@include mediaQueryMin("md") {
  .aboutMe-container {
    margin-top: 150px;

    .waveBackground {
      top: -310px;
    }
  }
  .education-container {
    position: relative;
    margin-top: 250px;
  }

  .experience-container {
    margin-top: 250px;
  }

  .skills-container {
    margin-top: 450px;
  }

  .projects-container {
    margin-top: 250px;
  }
}
</style>
