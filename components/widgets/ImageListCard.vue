<template>
  <div class="imageListCard-container">
    <a class="imageListCard" :href="link" target="_blank">
      <div class="image">
        <img :src="imageUrl" :alt="imageAlt" />
      </div>
      <TitleSubCard
        class="titleSubCard"
        :title="title"
        :description="description"
      />
    </a>
  </div>
</template>

<script>
import TitleSubCard from "~/components/widgets/TitleSubCard.vue";

export default {
  name: "ImageListCard",
  components: {
    TitleSubCard,
  },
  props: {
    link: {
      type: String,
      required: false,
      default: "/",
    },
    imageUrl: {
      type: String,
      required: true,
      default: "https://s21.picofile.com/file/8444387576/xeniac_logo.png",
    },
    imageAlt: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
      default: "Title",
    },
    description: {
      type: String,
      required: true,
      default: "Description",
    },
  },
};
</script>

<style lang="scss" scoped>
.imageListCard-container {
  display: flex;
  justify-content: flex-end;

  .imageListCard {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;

    .titleSubCard {
      margin-right: 15px;
    }
  }
}
</style>