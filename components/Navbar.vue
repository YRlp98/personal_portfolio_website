<template>
  <nav class="navbar-container">
    <div class="navbar defualt-margin">
      <span class="navbar-more" @click="isOpen = !isOpen">
        <img src="~assets/images/icons/more.svg" alt="" />
      </span>
      <transition name="fade" appear>
        <SettingsMenu class="settingsMenu" v-if="isOpen" />
      </transition>
      <ul class="navbar-items">
        <li>
          <nuxt-link class="item" to="/">{{ $t("home") }}</nuxt-link>
        </li>
        <li>
          <item class="item" @click="goto('#homeAboutMe')">
            {{ $t("aboutMe") }}
          </item>
        </li>
        <li>
          <item class="item" @click="goto('#homeSkills')">
            {{ $t("skills") }}
          </item>
        </li>
        <li>
          <nuxt-link class="item" to="#">{{ $t("projects") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link class="item" to="#">{{ $t("blog") }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import SettingsMenu from "./widgets/SettingsMenu.vue";

export default {
  name: "Navbar",
  components: {
    SettingsMenu,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    },
  },
};
</script>

<style lang="scss" scoped>
// Mobile
.navbar-container {
  .navbar-items {
    display: none;
  }

  .navbar-more {
    display: none;
  }
}

// Tablet
@include mediaQueryMin("md") {
  .navbar-container {
    position: absolute;
    inset: 0;
    z-index: 999;
    top: 20px;
    height: 25px;

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .navbar-items {
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

      .navbar-more {
        display: flex;
        cursor: pointer;
      }

      .fade-enter-active,
      .fade-leave-active {
        transition: all 0.5s ease-out;
      }

      .fade-enter,
      .fade-leave-active {
        opacity: 0;
      }

      .settingsMenu {
        top: 30px;
      }
    }
  }
}
</style>