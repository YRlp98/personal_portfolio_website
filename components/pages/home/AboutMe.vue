<template>
  <div class="aboutMe-container">
    <h1 class="aboutMe-title">{{ $t("homePageAboutMe") }}</h1>
    <div class="aboutMe-avatar">
      <img
        src="https://cdn.dribbble.com/users/2181241/avatars/normal/ee6d18f8a8142186aba971e05b895c8d.jpg?1618169853"
        alt="Yousef Roshandel"
      />
      <div class="square"></div>
    </div>
    <p class="aboutMe-text">{{ $t("homePageAboutMeText") }}</p>
    <AboutMeInfo class="aboutMeInfo" />
    <SocialNetwork class="socialNetwork" />
    <TitleBackground class="titleBackground" title="about me" />
  </div>
</template>

<script>
import AboutMeInfo from "../../AboutMeInfo.vue";
import SocialNetwork from "../../SocialNetwork.vue";
import TitleBackground from "../../backgrounds/TitleBackground.vue";

export default {
  name: "AboutMe",
  components: {
    AboutMeInfo,
    SocialNetwork,
    TitleBackground,
  },
};
</script>

<style lang="scss" scoped>
.aboutMe-container {
  display: flex;
  flex-direction: column;
  direction: rtl;
  z-index: 1;

  .aboutMe-title {
    font-size: 2.125rem;
    font-weight: bold;
  }

  .aboutMe-avatar {
    position: relative;
    margin-top: 40px;

    .square {
      position: absolute;
      z-index: -1;
      width: 170px;
      height: 170px;
      top: 15px;
      right: 15px;
      border: 2px solid var(--green-1);
      border-radius: 5px;
    }

    img {
      border-radius: 5px;
      height: 170px;
      width: 170px;
    }
  }

  .aboutMe-text {
    margin-top: 40px;
    font-size: 1.063;
    line-height: 28px;
  }

  .aboutMeInfo {
    margin-top: 40px;
  }

  .socialNetwork {
    margin-top: 40px;
  }

  .titleBackground {
    left: -200px;
    top: 230px;
    transform: rotate(-90deg);
  }
}

// Tablet
@include mediaQueryMin("md") {
  .aboutMe-container {
    position: relative;

    .aboutMe-title {
      position: absolute;
      top: 40px;
      right: 220px;
      z-index: 1;
      margin-right: 90px;
    }

    .aboutMe-text {
      position: absolute;
      top: 40px + 40px;
      right: 220px;
      z-index: 1;
      margin-right: 90px;
    }

    .socialNetwork {
      z-index: 99;
    }

    .titleBackground {
      top: 40px;
      left: 0;
      transform: rotate(0deg);
    }
  }
}
</style>