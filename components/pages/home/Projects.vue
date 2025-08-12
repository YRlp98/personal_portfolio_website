<template>
  <div class="projects-container" id="homeProjects">
    <h2 :style="{ textAlign: `${changeAlign(this.activeLang)}` }">
      {{ $t("projects") }}
    </h2>
    <div class="projects">
      <div class="projects-cards">
        <ProjectCard
          class="projectCard"
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
      <div>
        <TextOnlyButton
          :text="$t('viewAll')"
          link="/projects"
          class="textOnlyButton"
        />
      </div>
    </div>
    <TitleBackground title="Projects" class="titleBackground" />
  </div>
</template>

<script>
import ProjectCard from "../../widgets/ProjectCard.vue";
import TitleBackground from "../../../components/backgrounds/TitleBackground.vue";
import TextOnlyButton from "../../widgets/TextOnlyButton.vue";

import projects from "~/data/projects.json";
import changeAlign from "../../../assets/mixins/changeAlign";

export default {
  name: "Projects",
  components: {
    ProjectCard,
    TitleBackground,
    TextOnlyButton,
  },
  data() {
    return {
      activeLang: this.$i18n.locale,
      projects: projects.slice(0, 6),
    };
  },
  mixins: [changeAlign],
};
</script>

<style lang="scss" scoped>
.projects-container {
  position: relative;

  h1 {
    font-size: 28px;
    color: var(--gray-1);
    text-align: right;
  }

  .projects {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .projects-cards {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      .projectCard {
        margin: 10px auto;
        width: max(260px);

        // Tablet
        @include mediaQueryMin("md") {
          margin: 10px min(10px);
          width: min(340px);
          height: min(245px);
        }
      }
    }
  }

  .titleBackground {
    z-index: 1;
    left: -200px;
    top: 240px;
    transform: rotate(-90deg);
  }
}
</style>