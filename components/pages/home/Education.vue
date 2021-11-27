<template>
  <div class="education-container">
    <HomeTitle :title="$t('education')" />
    <div class="education-carts">
      <a class="education-cart">
        <div class="icon">
          <img
            src="../../../assets/images/icons/education.svg"
            alt="Associate's degree"
          />
        </div>
        <description>
          <h4>{{ $t("homePageEducationAssociate") }}</h4>
          <div class="subtitle">
            <p2>{{ $t("homePageEducationAssociateDate") }}</p2>
            <img src="../../../assets/images/icons/calendar.svg" />
          </div>
        </description>
      </a>

      <a class="education-cart">
        <div class="icon">
          <img
            src="../../../assets/images/icons/education.svg"
            alt="Bachelor's degree"
          />
        </div>
        <description>
          <h4>{{ $t("homePageEducationBachelor") }}</h4>
          <div class="subtitle">
            <p2>{{ $t("homePageEducationBachelorDate") }}</p2>
            <img src="../../../assets/images/icons/calendar.svg" />
          </div>
        </description>
      </a>
    </div>
  </div>
</template>

<script>
import HomeTitle from "../../HomeTitle.vue";

export default {
  name: "Education",
  components: {
    HomeTitle,
  },
};
</script>

<style lang="scss" scoped>
.education-container {
  display: flex;
  flex-direction: column;

  .education-carts {
    .education-cart {
      direction: rtl;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 40px;
      text-decoration: none;

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        height: 50px;
        width: 50px;
        border-radius: 5px;
        margin-left: 15px;

        img {
          height: 25px;
          width: 30px;
        }
      }

      description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h4 {
          color: white;
          font-size: 1.063rem;
        }

        .subtitle {
          display: flex;
          direction: ltr;
          align-items: center;

          p2 {
            color: gray;
            font-size: 0.75rem;
          }

          img {
            height: 15px;
            width: 15px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

// Tablet
@include mediaQueryMin("md") {
  .education-container {
    .education-carts {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
}

// Desktop
@include mediaQueryMin("xl") {
  .education-container {
    position: relative;
    display: flex;
    flex-direction: row;
    direction: rtl;

    .education-carts {
      position: absolute;
      inset: 0;
      top: -40px;
      right: 100px;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>