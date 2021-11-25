<template>
  <nav class="navbar-container">
    <span class="navbar-more" @click="isOpen = !isOpen">
      <img src="~assets/images/icons/more.svg" alt="" />
    </span>
    <transition name="fade" appear>
      <SettingsMenu class="settingsMenu" v-if="isOpen" />
    </transition>
    <ul class="navbar-items">
      <li>
        <nuxt-link to="/">{{ $t("navbarHome") }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">{{ $t("navbarAboutMe") }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">{{ $t("navbarSkills") }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">{{ $t("navbarProjects") }}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">{{ $t("navbarBlog") }}</nuxt-link>
      </li>
    </ul>
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
    display: flex;
    position: absolute;
    top: 20px;
    right: 20px;
    left: 20px;
    width: 768px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    z-index: 99;

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

// Desktop
@include mediaQueryMin("xl") {
  .navbar-container {
    width: 1280px;

    .navbar-items {
      display: flex;

      li {
        left: 100;
      }
    }
  }
}
</style>