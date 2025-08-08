<template>
  <div class="experience-container">
    <HomeTitle class="homeTitle" :title="$t('experience')" />

    <!-- Main experience -->
    <div class="experience main">
      <h3 class="catTitle">{{ $t("HomePageExperienceMain") }}</h3>

      <!-- dowSwan -->
      <ImageListCard class="imageListCard" link="https://dotswan.com/"
        imageUrl="https://media.licdn.com/dms/image/v2/D4E0BAQGe5XcQ0JubbA/company-logo_200_200/B4EZWEjLPfGYAM-/0/1741685568974/dotswan_logo?e=1757548800&v=beta&t=He-2nS-bgbNf_7ppztHIRX-LFH0X55wzuDHqFsw4Hek"
        imageAlt="dotSwan" :title="$t('dotSwan')" :description="$t('dotSwanDesc')" />
      <div class="subExperiences">
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencDotSwan')"
          :description="$t('HomePageExperiencDotSwanFrontEndDate')" />
      </div>

      <!-- Fewzed -->
      <ImageListCard class="imageListCard" link="http://fewzed.co.uk/"
        imageUrl="https://media.licdn.com/dms/image/v2/C4E0BAQE40p4qe9z3zA/company-logo_200_200/company-logo_200_200/0/1662882352622/fewzed_ltd_logo?e=1757548800&v=beta&t=Mkr39RtGKkIBHuSBTdNBF0M7vnhg8oWtzDmVG3rABjw"
        imageAlt="Fewzed" :title="$t('fewzed')" :description="$t('fewzedDesc')" />
      <div class="subExperiences">
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencFewzewd')"
          :description="$t('HomePageExperiencFewzedFrontEndDate')" />
      </div>

      <!-- Xeniac -->
      <ImageListCard class="imageListCard" link="https://xeniac.ir"
        imageUrl="https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Xeniac.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1hlbmlhYy5wbmciLCJpYXQiOjE2MzgxOTk5NDAsImV4cCI6MTk1MzU1OTk0MH0.qQ9NDn-b5zKjTFDMJZCPCMCMBcZZ2eBParqm7-njpqw"
        imageAlt="Xeniac" :title="$t('xeniac')" :description="$t('xeniacDesc')" />
      <div class="subExperiences">
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencXeniacFrontEnd')"
          :description="$t('HomePageExperiencXeniacFrontEndDate')" />
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencXeniacUIUX')"
          :description="$t('HomePageExperiencXeniacUIUXDate')" />
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencXeniacMobile')"
          :description="$t('HomePageExperiencXeniacMobileDate')" />
      </div>
    </div>

    <!-- Other experience -->
    <div class="experience other">
      <h3 class="catTitle">{{ $t("HomePageExperienceOther") }}</h3>
      <!-- SamArena -->
      <ImageListCard class="imageListCard" link="https://samarena.ir/"
        imageUrl="https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Samsung.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1NhbXN1bmcucG5nIiwiaWF0IjoxNjM4MTk5OTYxLCJleHAiOjE5NTM1NTk5NjF9.yXjD1MS9mEy8jIPkQOZwWdytYh8BB2b8_N7KaaOKepg"
        imageAlt="Sam Arena" :title="$t('samArea')" :description="$t('samAreaDesc')" />
      <div class="subExperiences">
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencSamArena')"
          :description="$t('HomePageExperiencSamArenaDate')" />
      </div>
      <!-- Toranji -->
      <ImageListCard class="imageListCard" link="https://toranji.ir"
        imageUrl="https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/Toranji.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL1RvcmFuamkucG5nIiwiaWF0IjoxNjM4MTk5OTc5LCJleHAiOjE5NTM1NTk5Nzl9.-ShWOeep1YCyK36OPtv7t_Owv2mrbA0JGbnrZbY6Apg"
        imageAlt="Toranji" :title="$t('toranji')" :description="$t('toranjiDesc')" />
      <div class="subExperiences">
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencToranji')"
          :description="$t('HomePageExperiencToranjiDate')" />
      </div>
      <!-- CafeDL -->
      <ImageListCard class="imageListCard" link="https://cafedl.com/"
        imageUrl="https://lixbjgupmbwyplqhzkde.supabase.in/storage/v1/object/sign/yrlp-storage/Images/CafeDL.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ5cmxwLXN0b3JhZ2UvSW1hZ2VzL0NhZmVETC5wbmciLCJpYXQiOjE2MzgxOTk4NzgsImV4cCI6MTk1MzU1OTg3OH0.PRTCKt4arzv1Xc6uwXmFw0fPS8SU1BwshwsudyaAkLI"
        imageAlt="CafeDL" :title="$t('cafeDL')" :description="$t('cafeDLDesc')" />
      <div class="subExperiences">
        <TitleSubCard class="titleSubCard" :title="$t('HomePageExperiencCafeDL')"
          :description="$t('HomePageExperiencCafeDLDate')" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeTitle from "./HomeTitle.vue";
import ImageListCard from "~/components/widgets/ImageListCard.vue";
import TitleSubCard from "~/components/widgets/TitleSubCard.vue";

export default {
  name: "Experience",
  components: {
    HomeTitle,
    ImageListCard,
    TitleSubCard,
  },
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
</style>