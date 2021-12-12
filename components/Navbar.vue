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
          <nuxt-link to="/">{{ $t("home") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">{{ $t("aboutMe") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">{{ $t("skills") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">{{ $t("projects") }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">{{ $t("blog") }}</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import SettingsMenu from "./SettingsMenu.vue";

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

          .nuxt-link-exact-active {
            color: var(--white-1);
            text-decoration: none;
            font-size: 1rem;
            font-weight: regular;

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