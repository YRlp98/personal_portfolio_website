<template>
  <div class="socialNetwork-container">
    <div class="socialNetwork defualt-margin">
      <h1>{{ $t("homePageFollowMeSN") }}</h1>
      <SocialNetwork class="socialNetwork" />
    </div>
    <TitleBackground
      title="social network"
      class="titleBackground defualt-margin"
    />
  </div>
</template>


<script>
import SocialNetwork from "../../SocialNetwork.vue";
import TitleBackground from "../../../components/backgrounds/TitleBackground.vue";

export default {
  name: "FollowMe",
  components: {
    SocialNetwork,
    TitleBackground,
  },
};
</script>

<style lang="scss" scoped>
.socialNetwork-container {
  position: relative;
  background-color: var(--gray-3);

  .socialNetwork {
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      z-index: 1;
      color: white;
      font-size: 1.375;
    }

    .socialNetwork {
      z-index: 1;
      height: 0;
      margin-top: 30px;
      margin-left: 20px;
    }
  }

  .titleBackground {
    z-index: 0;
    inset: 0;
    top: 50px;
    left: 0;
  }
}
</style>