<template>
  <div class="projects-container defualt-margin">
    <h1 class="title">{{ $t("projects") }}</h1>
    <div class="filter">
      <p>{{ $t("show") }}:</p>
      <ul>
        <li
          v-for="(tag, index) in tags"
          :key="index"
          :style="{
            color:
              activeTag === $i18n.t(tag.name)
                ? getActiveTagProperties(tag.name).color
                : null,
            fontWeight: activeTag === tag.name ? 'bold' : 'regular',
          }"
          @click="onClick(tag.name)"
        >
          {{ tag.name }}
        </li>
      </ul>
    </div>
    <div class="projects-cards">
      <ProjectCard
        class="projectCard"
        v-for="project in filterdProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "~/components/widgets/ProjectCard.vue";
import projects from "~/data/projects.json";

export default {
  name: "projects",
  components: { ProjectCard },
  data() {
    return {
      projects,
      tags: [
        { name: this.$i18n.t("All"), color: "#ffffff" },
        { name: this.$i18n.t("Designing"), color: "#FB4B8A" },
        { name: this.$i18n.t("Web"), color: "#4D848B" },
        { name: this.$i18n.t("Mobile"), color: "#38AF76" },
        { name: this.$i18n.t("Others"), color: "#FB4B4B" },
      ],
      activeTag: this.$i18n.t("All"),
    };
  },
  methods: {
    onClick(tag) {
      this.activeTag = tag;
    },
    getActiveTagProperties(tag) {
      return this.tags.find((_tag) => {
        return _tag.name === this.$i18n.t(this.activeTag);
      });
    },
  },
  computed: {
    filterdProjects: function () {
      if (this.activeTag === this.$i18n.t("All")) {
        return this.projects;
      }
      return this.projects.filter((project) => {
        let found = false;

        project.tags.filter((indexTag) => {
          found = this.$i18n.t(indexTag.value) === this.$i18n.t(this.activeTag);
        });
        return found;
      });
    },
  },
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
    margin-top: 25px;
    direction: rtl;

    p {
      color: var(--gray-1);
      font-size: 1rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      justify-content: space-between;
      align-content: center;
      color: var(--gray-1);
      font-size: 1rem;

      li {
        margin: 0 10px;
        padding: 0px 5px;
        border-radius: 5px;
        user-select: none;
        cursor: pointer;

        &:hover {
          background-color: var(--green-1);
          color: var(--gray-2);
        }
      }
    }
  }

  .projects-cards {
    margin-top: 80px;
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
</style>