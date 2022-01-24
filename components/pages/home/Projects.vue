<template>
  <div class="projects-container" id="homeProjects">
    <h1>{{ $t("projects") }}</h1>
    <div class="projects">
      <div class="projects-cards">
        <ProjectCard
          class="projectCard"
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
      <TextOnlyButton
        :text="$t('viewAll')"
        link="/projects"
        class="textOnlyButton"
      />
    </div>
    <TitleBackground title="Projects" class="titleBackground" />
  </div>
</template>

<script>
import ProjectCard from "../../widgets/ProjectCard.vue";
import TitleBackground from "../../../components/backgrounds/TitleBackground.vue";
import TextOnlyButton from "../../widgets/TextOnlyButton.vue";
import projects from "~/data/projects.json";

export default {
  name: "Projects",
  components: {
    ProjectCard,
    TitleBackground,
    TextOnlyButton,
  },
  data() {
    return {
      projects: projects.slice(0, 6),
    };
  },
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
    justify-content: center;

    .projects-cards {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .projectCard {
        margin: 10px auto;

        // Tablet
        @include mediaQueryMin("md") {
          width: 340px;
          height: 245px;
        }
      }
    }
  }

  .titleBackground {
    z-index: 1;
    left: -200px;
    top: 180px;
    transform: rotate(-90deg);
  }
}
</style>