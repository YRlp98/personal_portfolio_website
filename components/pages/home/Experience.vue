<template>
  <div class="experience-container">
    <HomeTitle class="homeTitle" :title="$t('experience')" />
    <div class="experience main">
      <h3 class="catTitle">{{ $t("HomePageExperienceMain") }}</h3>
      <!-- Xeniac -->
      <ImageListCard
        class="imageListCard"
        link="https://xeniac.ir"
        imageUrl="https://s21.picofile.com/file/8444387576/xeniac_logo.png"
        imageAlt="Xeniac"
        :title="$t('xeniac')"
        :description="$t('xeniacDesc')"
      />
      <div class="subExperiences">
        <TitleSubCard
          class="titleSubCard"
          :title="$t('HomePageExperiencXeniacFrontEnd')"
          :description="$t('HomePageExperiencXeniacFrontEndDate')"
        />
        <TitleSubCard
          class="titleSubCard"
          :title="$t('HomePageExperiencXeniacUIUX')"
          :description="$t('HomePageExperiencXeniacUIUXDate')"
        />
        <TitleSubCard
          class="titleSubCard"
          :title="$t('HomePageExperiencXeniacMobile')"
          :description="$t('HomePageExperiencXeniacMobileDate')"
        />
      </div>
    </div>

    <div class="experience other">
      <h3 class="catTitle">{{ $t("HomePageExperienceOther") }}</h3>
      <!-- SamArena -->
      <ImageListCard
        class="imageListCard"
        link="https://samarena.ir/"
        imageUrl="https://s21.picofile.com/file/8444410692/samsung_logo.png"
        imageAlt="Sam Arena"
        :title="$t('samArea')"
        :description="$t('samAreaDesc')"
      />
      <div class="subExperiences">
        <TitleSubCard
          class="titleSubCard"
          :title="$t('HomePageExperiencSamArena')"
          :description="$t('HomePageExperiencSamArenaDate')"
        />
      </div>
      <!-- Toranji -->
      <ImageListCard
        class="imageListCard"
        link="https://toranji.ir"
        imageUrl="https://s20.picofile.com/file/8444411292/toranji_logo.png"
        imageAlt="Toranji"
        :title="$t('toranji')"
        :description="$t('toranjiDesc')"
      />
      <div class="subExperiences">
        <TitleSubCard
          class="titleSubCard"
          :title="$t('HomePageExperiencToranji')"
          :description="$t('HomePageExperiencToranjiDate')"
        />
      </div>
      <!-- CafeDL -->
      <ImageListCard
        class="imageListCard"
        link="https://cafedl.com/"
        imageUrl="https://s20.picofile.com/file/8444411300/cafedl_logo.png"
        imageAlt="CafeDL"
        :title="$t('cafeDL')"
        :description="$t('cafeDLDesc')"
      />
      <div class="subExperiences">
        <TitleSubCard
          class="titleSubCard"
          :title="$t('HomePageExperiencCafeDL')"
          :description="$t('HomePageExperiencCafeDLDate')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageListCard from "../../ImageListCard.vue";

export default {
  name: "Experience",
  ImageListCard,
};
</script>

<style lang="scss" scoped>
.experience-container {
  position: relative;
  display: flex;
  flex-direction: column;

  .experience {
    margin-top: 40px;

    .catTitle {
      font-size: 1.375rem;
      text-align: right;
    }

    .imageListCard {
      margin-top: 40px;
    }

    .subExperiences {
      margin-top: 25px;

      .titleSubCard {
        position: relative;
        margin-top: 15px;
        margin-right: 55px;

        &::after {
          content: "";
          position: absolute;
          z-index: 2;
          width: 8px;
          height: 8px;
          background-color: white;
          right: -35px;
          top: 10px;
          border-radius: 50%;
        }

        &:not(:first-child):before {
          content: "";
          z-index: 1;
          position: absolute;
          height: 20px;
          width: 1px;
          right: -32px;
          top: 30px;
          background: white;
        }
      }
    }
  }
}

// Tablet
@include mediaQueryMin("md") {
  .experience-container {
    position: relative;
    display: flex;
    flex-direction: column;

    .experience {
      position: relative;
    }

    .main {
      position: relative;
    }

    .other {
      position: absolute;
      top: 40px;
      right: 50%;
    }

    .experience {
      margin-top: 40px;

      .catTitle {
        font-size: 1.375rem;
        text-align: right;
      }

      .imageListCard {
        margin-top: 40px;
      }

      .subExperiences {
        margin-top: 25px;

        .titleSubCard {
          position: relative;
          margin-top: 15px;
          margin-right: 55px;
        }
      }
    }
  }
}
</style>