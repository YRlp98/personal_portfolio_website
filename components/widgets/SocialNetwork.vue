<template>
  <div class="socialNetwork-container">
    <div class="items">
      <a href="https://www.linkedin.com/in/yrlp98/" target="_blank">
        <img src="~/assets/images/icons/linkedin.svg" alt="LinkedIn"
      /></a>
      <a href="https://github.com/YRlp98" target="_blank">
        <img src="~/assets/images/icons/github.svg" alt="GitHub"
      /></a>
      <a href="https://dribbble.com/YRlp98" target="_blank">
        <img src="~/assets/images/icons/dribbble.svg" alt="Dribble"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCZd51HzXf_YThh9wfZy_1YA"
        target="_blank"
      >
        <img src="~/assets/images/icons/youtube.svg" alt="Youtube"
      /></a>
      <a href="https://twitter.com/YRlp98" target="_blank">
        <img src="~/assets/images/icons/twitter.svg" alt="Twitter"
      /></a>
      <a href="https://www.facebook.com/YRlp98/" target="_blank">
        <img src="~/assets/images/icons/facebook.svg" alt="Facebook"
      /></a>
      <a href="https://www.instagram.com/y.rlp/" target="_blank">
        <img src="~/assets/images/icons/instagram.svg" alt="Instagram"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialNetwork",
};
</script>

<style lang="scss" scoped>
.socialNetwork-container {
  .items {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    direction: ltr;
    height: 0;

    a {
      margin-right: 20px;

      img {
        width: 20px;
        height: 20px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>