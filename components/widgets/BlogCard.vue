<template>
  <a :href="blog.link" target="_blank" class="blogCard-container">
    <div class="blogCard">
      <img :src="blog.image" :alt="blog.alt" loading="lazy" />
      <div class="blogCard-info">
        <h1>{{ blog.title }}</h1>
        <p>{{ blog.description }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.blogCard-container {
  position: relative;
  width: 340px;
  height: 400px;
  border-radius: 5px;
  background: transparent;
  display: flex;
  flex-direction: column;
  transition: 0.4s ease-out;
  background: var(--gray-2);
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  text-decoration: none;
  z-index: 9;
  border-radius: 5px;

  &:hover {
    transform: translateY(10px);
  }

  .blogCard {
    img {
      width: 100%;
      height: 225px;
      object-fit: cover;
      border-radius: 5px 5px 0 0;
    }

    .blogCard-info {
      width: 100%;
      padding: 20px 20px;
      text-align: right;
      z-index: 9;

      h1 {
        color: white;
        font-size: 1.375rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 90%;
        direction: rtl;
      }

      p {
        margin-top: 20px;
        font-size: 1rem;
        color: var(--gray-1);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 90%;
        direction: rtl;
      }
    }
  }
}
</style>