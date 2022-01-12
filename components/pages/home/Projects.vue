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
export default {
  name: "Projects",
  components: {
    ProjectCard,
    TitleBackground,
    TextOnlyButton,
  },
  data() {
    return {
      projects: [
        {
          title: "Steam item trader (Mobile)",
          image:
            "https://cdn.dribbble.com/users/2181241/screenshots/16217387/media/3e37ce3729e96e97029928460c193ec6.png?compress=1&resize=1200x900",
          alt: "Steam item trader (Mobile)",
          link: "https://github.com/YRlp98/x_trader_mobile_app",
          tags: [
            { tag: "UI/UX", color: "#FB4B8A" },
            { tag: "Mobile", color: "#38AF76" },
          ],
        },
        {
          title: "Steam item trader (Desktop)",
          image:
            "https://cdn.dribbble.com/users/2181241/screenshots/16196728/media/b8ca1960a5d5590a66c4251f30815a7e.png?compress=1&resize=1200x900",
          alt: "Steam item trader (Desktop)",
          link: "https://mediv0.github.io/xtrader/",
          tags: [
            { tag: "UI/UX", color: "#FB4B8A" },
            { tag: "Web", color: "#4D848B" },
          ],
        },
        {
          title: "Medic Care - Mobile App UI",
          image:
            "https://cdn.dribbble.com/users/2181241/screenshots/16104811/media/f1b1eccf4dfd2be0f419d8426f32775c.png?compress=1&resize=1200x900",
          alt: "Medic Care - Mobile App UI",
          link: "https://dribbble.com/shots/16104811-Medic-Care-Mobile-App-UI",
          tags: [{ tag: "UI/UX", color: "#FB4B8A" }],
        },
        {
          title: "Amirkabir Library Website UI",
          image:
            "https://cdn.dribbble.com/users/2181241/screenshots/15534370/media/0a658715512f6fba2b2099ff8966844c.png?compress=1&resize=1200x900",
          alt: "Amirkabir Library Website UI",
          link: "https://dribbble.com/shots/15534370-Amirkabir-Library-Website-UI",
          tags: [{ tag: "UI/UX", color: "#FB4B8A" }],
        },
        {
          title: "Personal Landing Page",
          image:
            "https://cdn.dribbble.com/users/2181241/screenshots/15080008/media/142b9083766659c3837b894a9f432402.png?compress=1&resize=1200x900",
          alt: "Personal Landing Page",
          link: "https://github.com/YRlp98/yrlp_sass",
          tags: [
            { tag: "UI/UX", color: "#FB4B8A" },
            { tag: "Web", color: "#4D848B" },
          ],
        },
        {
          title: "Academia Website UI",
          image:
            "https://cdn.dribbble.com/users/2181241/screenshots/14382089/media/0e938246e9d81d8f9021f14e557997ad.png?compress=1&resize=1200x900",
          alt: "Academia Website UI",
          link: "https://dribbble.com/shots/14382089-Academia-Website-UI",
          tags: [{ tag: "UI/UX", color: "#FB4B8A" }],
        },
      ],
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