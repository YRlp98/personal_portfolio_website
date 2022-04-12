<template>
  <div class="footer-container">
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

    <div class="footer defualt-margin">
      <ul :style="{ direction: `${changeDirection(this.activeLang)}` }">
        <li>
          <nuxt-link class="item" to="/">{{ $t("home") }}</nuxt-link>
        </li>
        <li>
          <item class="item" @click="goto('/#homeAboutMe')">
            {{ $t("aboutMe") }}
          </item>
        </li>
        <li>
          <item class="item" @click="goto('/#homeSkills')">
            {{ $t("skills") }}
          </item>
        </li>
        <li>
          <nuxt-link class="item" to="/projects">{{
            $t("projects")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link class="item" to="/blog">{{ $t("blog") }}</nuxt-link>
        </li>
      </ul>
      <p :style="{ textAlign: `${changeAlign(this.activeLang)}` }">
        {{ $t("footerCopyright") }}
      </p>
    </div>
  </div>
</template>

<script>
import SocialNetwork from "~/components/widgets/SocialNetwork.vue";
import TitleBackground from "~/components/backgrounds/TitleBackground.vue";

import changeDirection from "../assets/mixins/changeDirection";
import changeAlign from "../assets/mixins/changeAlign";

export default {
  name: "Footer",
  components: {
    SocialNetwork,
    TitleBackground,
  },
  data() {
    return {
      activeLang: this.$i18n.locale,
    };
  },
  mixins: [changeDirection, changeAlign],
  methods: {
    goto(id) {
      this.$router.push(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  margin-top: 50px;
  margin-bottom: 50px;

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

  .footer {
    margin-top: 150px;

    ul {
      display: none;
    }

    p {
      font-size: 1.063rem;
      color: var(--gray-1);
      direction: rtl;
    }
  }
}

// Tablet
@include mediaQueryMin("md") {
  .footer-container {
    margin-top: 150px;

    .footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      ul {
        display: flex;
        direction: rtl;

        li {
          list-style: none;
          display: flex;

          .item {
            color: var(--white-1);
            text-decoration: none;
            font-size: 1rem;
            font-weight: regular;
            cursor: pointer;

            &:hover {
              color: var(--green-1);
            }
          }

          &::after {
            content: " \00b7";
            color: var(--gray-1);
            padding: 0 1rem;
          }

          &:last-child:after {
            content: none;
          }
        }
      }
    }
  }
}

// Desktop
@include mediaQueryMin("xl") {
  .footer {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
</style>