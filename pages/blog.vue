<template>
  <div class="blog-container defualt-margin" :style="{ direction: `${changeDirection(activeLang)}` }">
    <h1 class="title">{{ $t("blog") }}</h1>
    <div class="blog-cards">
      <BlogCard class="blogCard" v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import BlogCard from "~/components/widgets/BlogCard.vue";
import changeDirection from "../assets/mixins/changeDirection";
import blogs from "~/data/blogs.json";

export default {
  setup() {
    const route = useRoute()
    const canonicalUrl = computed(() => 'https://yrlp.ir' + route.path)

    useHead({
      title: 'Yousef Roshandel - Blog',
      meta: [
        { name: 'description', content: 'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences.' },
        { property: 'og:title', content: 'Yousef Roshandel - Blog' },
        { property: 'og:description', content: 'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites and digital experiences.' },
        { property: 'og:url', content: () => canonicalUrl.value },
      ],
      link: [
        { rel: 'canonical', href: () => canonicalUrl.value },
      ],
    })
  },

  name: "Blog",
  components: { BlogCard },
  data() {
    return {
      blogs,
    };
  },
  computed: {
    activeLang() { return this.$i18n.locale; },
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
    display: grid;
    gap: 30px;

    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));

    .blogCard {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>