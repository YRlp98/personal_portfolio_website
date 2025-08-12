<template>
  <div class="projects-container defualt-margin" :style="{ direction: `${changeDirection(this.activeLang)}` }">
    <h1 class="title">{{ $t("projects") }}</h1>
    <div class="filter" :style="{ direction: `${changeDirection(this.activeLang)}` }">
      <p>{{ $t("show") }}:</p>
      <ul>
        <li v-for="(tag, index) in tags" :key="index" :style="{
          color:
            activeTag === $i18n.t(tag.name)
              ? getActiveTagProperties(tag.name).color
              : null,
          fontWeight: activeTag === tag.name ? 'bold' : 'regular',
        }" @click="onClick(tag.name)">
          {{ tag.name }}
        </li>
      </ul>
    </div>
    <div class="projects-cards">
      <ProjectCard class="projectCard" v-for="project in filterdProjects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<script>
import ProjectCard from "~/components/widgets/ProjectCard.vue";
import changeDirection from "../assets/mixins/changeDirection";
import projects from "~/data/projects.json";

export default {
  head() {
    const baseUrl = 'https://yrlp.ir';
    const path = this.$route.path;
    const canonicalUrl = baseUrl + path;

    return {
      title: 'Yousef Roshandel - Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences.' },
        { hid: 'og:title', property: 'og:title', content: 'Yousef Roshandel - Blog' },
        { hid: 'og:description', property: 'og:description', content: 'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences.' },
        { hid: 'og:url', property: 'og:url', content: canonicalUrl },
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl }
      ],
    }
  },

  name: "projects",
  components: { ProjectCard },
  data() {
    return {
      activeLang: this.$i18n.locale,
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
  mixins: [changeDirection],
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
  direction: rtl;
  padding-bottom: 50px;

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
    justify-content: space-between;

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
</style>