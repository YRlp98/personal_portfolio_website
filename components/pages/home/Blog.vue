<template>
  <div class="blog-container" id="homeBlog">
    <h1 :style="{ textAlign: `${changeAlign(this.activeLang)}` }">
      {{ $t("blog") }}
    </h1>
    <div class="blog">
      <div class="blog-cards">
        <BlogCard
          class="blogCard"
          v-for="blog in blogs"
          :key="blog.id"
          :blog="blog"
        />
      </div>
      <div>
        <TextOnlyButton
          :text="$t('viewAll')"
          link="/blog"
          class="textOnlyButton"
        />
      </div>
    </div>
    <TitleBackground title="Blog" class="titleBackground" />
  </div>
</template>


<script>
import BlogCard from "../../widgets/BlogCard.vue";
import TitleBackground from "../../../components/backgrounds/TitleBackground.vue";
import TextOnlyButton from "../../widgets/TextOnlyButton.vue";

import changeAlign from "../../../assets/mixins/changeAlign";
import blogs from "~/data/blogs.json";

export default {
  name: "Blog",
  components: {
    BlogCard,
    TitleBackground,
    TextOnlyButton,
  },
  data() {
    return {
      activeLang: this.$i18n.locale,
      blogs: blogs.slice(0, 3),
    };
  },
  mixins: [changeAlign],
};
</script>

<style lang="scss" scoped>
.blog-container {
  position: relative;

  h1 {
    font-size: 28px;
    color: var(--gray-1);
    text-align: right;
  }

  .blog {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .blog-cards {
      margin-top: 40px;
      margin-bottom: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .blogCard {
        margin: 10px auto;
        width: max(310px);

        // Tablet
        @include mediaQueryMin("md") {
          margin: 10px min(10px);
          width: min(400px);
        }
      }
    }
  }

  .titleBackground {
    z-index: 1;
    left: -120px;
    top: 100px;
    transform: rotate(-90deg);
  }
}
</style>