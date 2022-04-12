<template>
  <div
    class="blog-container defualt-margin"
    :style="{ direction: `${changeDirection(this.activeLang)}` }"
  >
    <h1 class="title">{{ $t("blog") }}</h1>
    <div class="blog-cards">
      <BlogCard
        class="blogCard"
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "~/components/widgets/BlogCard.vue";

import changeDirection from "../assets/mixins/changeDirection";
import blogs from "~/data/blogs.json";

export default {
  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      activeLang: this.$i18n.locale,
      blogs,
    };
  },
  mixins: [changeDirection],
};
</script>

<style lang="scss" scoped>
.blog-container {
  display: flex;
  flex-direction: column;
  direction: rtl;
  padding-bottom: 100px;

  .title {
    margin-top: 250px;
    font-size: 2.125rem;
    font-weight: bold;
    color: var(--gray-1);
  }

  .blog-cards {
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

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
</style>