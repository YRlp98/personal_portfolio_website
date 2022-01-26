<template>
  <div class="blog-container defualt-margin">
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
import blogs from "~/data/blogs.json";

export default {
  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      blogs,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
    justify-content: center;

    .blogCard {
      margin: 10px auto;

      // Tablet
      @include mediaQueryMin("md") {
        width: 400px;
      }
    }
  }
}
</style>