<template>
  <div class="skills-container">
    <div class="main-skills-container defualt-margin">
      <h1>{{ $t("homePageSkillsMain") }}</h1>
      <div class="main-skills">
        <!-- Web -->
        <div class="skills">
          <IconTitle
            class="iconTitle"
            color="#a0d039"
            icon="web"
            alt="web"
            title="Web"
          />
          <SkillProgress
            class="skillProgress"
            title="HTML"
            width="90"
            link="https://en.wikipedia.org/wiki/HTML"
          />
          <SkillProgress
            class="skillProgress"
            title="CSS"
            width="90"
            link="https://en.wikipedia.org/wiki/CSS"
          />
          <SkillProgress
            class="skillProgress"
            title="Vue.js"
            width="90"
            link="https://en.wikipedia.org/wiki/Vue.js"
          />
          <SkillProgress
            class="skillProgress"
            title="Nuxt.js"
            width="90"
            link="https://en.wikipedia.org/wiki/Nuxt.js"
          />
          <SkillProgress
            class="skillProgress"
            title="JavaScript"
            width="80"
            link="https://en.wikipedia.org/wiki/JavaScript"
          />
          <SkillProgress
            class="skillProgress"
            title="Node.js"
            width="40"
            link="https://en.wikipedia.org/wiki/Node.js"
          />
        </div>
        <!-- UI/UX -->
        <div class="skills">
          <IconTitle
            class="iconTitle"
            color="#65d7bb"
            icon="uiux"
            alt="UI/UX Design"
            title="UI/UX Design"
          />
          <SkillProgress
            class="skillProgress"
            title="Figma"
            width="90"
            color="#65d7bb"
            link="https://en.wikipedia.org/wiki/Figma_(software)"
          />
          <SkillProgress
            class="skillProgress"
            title="Adobe XD"
            width="90"
            color="#65d7bb"
            link="https://en.wikipedia.org/wiki/Adobe_XD"
          />
          <SkillProgress
            class="skillProgress"
            title="Adobe Photoshop"
            width="80"
            color="#65d7bb"
            link="https://en.wikipedia.org/wiki/Adobe_Photoshop"
          />
          <SkillProgress
            class="skillProgress"
            title="Adobe Illustrator"
            width="50"
            color="#65d7bb"
            link="https://en.wikipedia.org/wiki/Adobe_Illustrator"
          />
        </div>
      </div>
    </div>
    <div class="other-skills-container defualt-margin">
      <h1>{{ $t("homePageSkillsOther") }}</h1>
      <div class="other-skills">
        <!-- Software engineering -->
        <div class="skills">
          <IconTitle
            class="iconTitle"
            color="#a98ff3"
            icon="software_engineering"
            alt="Software engineering"
            title="Software engineering"
          />
          <SkillSimple
            class="skillSimple"
            title="Agile"
            link="https://en.wikipedia.org/wiki/Agile_software_development"
          />
          <SkillSimple
            class="skillSimple"
            title="Scrum"
            link="https://en.wikipedia.org/wiki/Scrum_(software_development)"
          />
        </div>
        <!-- Mobile -->
        <div class="skills">
          <IconTitle
            class="iconTitle"
            color="#FF4E4E"
            icon="mobile"
            alt="Mobile"
            title="Mobile"
          />
          <SkillSimple
            class="skillSimple"
            title="Flutter"
            link="https://en.wikipedia.org/wiki/Flutter_(software)"
          />
          <SkillSimple
            class="skillSimple"
            title="Dart"
            link="https://en.wikipedia.org/wiki/Dart_(programming_language)"
          />
          <SkillSimple
            class="skillSimple"
            title="Java"
            link="https://en.wikipedia.org/wiki/Java_(programming_language)"
          />
          <SkillSimple
            class="skillSimple"
            title="XML"
            link="https://en.wikipedia.org/wiki/XML"
          />
        </div>
        <!-- Others -->
        <div class="skills">
          <IconTitle
            class="iconTitle"
            color="#E5D64C"
            icon="others"
            alt="Others"
            title="Others"
          />
          <SkillSimple
            class="skillSimple"
            title="Git"
            link="https://en.wikipedia.org/wiki/Git"
          />
          <SkillSimple
            class="skillSimple"
            title="REST API"
            link="https://en.wikipedia.org/wiki/Representational_state_transfer"
          />
          <SkillSimple
            class="skillSimple"
            title="Linux"
            link="https://en.wikipedia.org/wiki/Linux"
          />
        </div>
        <!-- Languages -->
        <div class="skills">
          <IconTitle
            class="iconTitle"
            color="#279BDD"
            icon="language"
            alt="languages"
            title="languages"
          />
          <div class="languages lanMargin">
            <h4>. Persian</h4>
            <p>(Native)</p>
          </div>
          <div class="languages">
            <h4>. English</h4>
            <p>(B2)</p>
          </div>
        </div>
      </div>
    </div>
    <TitleBackground class="titleBackground" title="skills" />
  </div>
</template>


<script>
import IconTitle from "../../iconTitle.vue";
import SkillProgress from "../../SkillProgress.vue";
import SkillSimple from "../../SkillSimple.vue";
import TitleBackground from "../../backgrounds/TitleBackground.vue";

export default {
  name: "Skills",
  components: {
    IconTitle,
    SkillProgress,
    SkillSimple,
    TitleBackground,
  },
};
</script>


<style lang="scss" scoped>
.skills-container {
  padding: 9% 0;
  background: url("../../../assets/images/wave3.svg") top / 100% auto,
    url("../../../assets/images/wave1.svg") bottom/100% auto,
    linear-gradient(var(--gray-3), var(--gray-3)) content-box;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  position: relative;

  .main-skills-container {
    margin-top: 60px;
    margin-bottom: 60px;

    .main-skills {
      margin-top: 40px;
    }
  }

  .other-skills-container {
    margin-top: 60px;
    margin-bottom: 60px;

    .other-skills {
      margin-top: 40px;
    }
  }

  h1 {
    font-size: 28px;
    color: var(--gray-1);
    text-align: right;
  }

  .skills {
    z-index: 2;
    margin-top: 20px;

    .iconTitle {
      margin-top: 40px;
    }

    .skillProgress {
      margin-top: 20px;
    }

    .skillSimple {
      margin-top: 10px;
    }

    .lanMargin {
      margin-top: 10px;
    }

    .languages {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 6px;

      h4 {
        font-size: 1.125rem;
        color: white;
      }
      p {
        font-size: 0.75rem;
        color: white;
        margin-left: 5px;
      }
    }
  }
}

// Tablet
@include mediaQueryMin("md") {
  .skills-container {
    .main-skills-container {
      margin-top: 40px;
      margin-bottom: 40px;

      .main-skills {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    }

    .other-skills-container {
      margin-top: 40px;
      margin-bottom: 40px;

      .other-skills {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    }
  }

  .titleBackground {
    z-index: 0;
    top: 450px;
    left: 5%;
    transform: rotate(-90deg);
  }
}

// Desktop
@include mediaQueryMin("xl") {
  .skills-container {
    .main-skills-container {
      .main-skills {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 50%;
      }
    }
  }
}
</style>