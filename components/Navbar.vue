<template>
  <nav class="navbar-container">
    <div class="navbar defualt-margin">
      <span class="navbar-more" @click.stop="isOpen = !isOpen">
        <img src="/images/icons/more.svg" alt="More icon" />
      </span>
      <transition name="dropdown" appear>
        <SettingsMenu class="settingsMenu" v-if="isOpen" @close="isOpen = false" v-click-outside="() => isOpen = false" @click.stop />
      </transition>
      <ul class="navbar-items">
        <li>
          <nuxt-link class="item" :to="$localePath('/')">{{ $t("home") }}</nuxt-link>
        </li>
        <li>
          <span class="item" @click="goto($localePath('/#homeAboutMe'))">
            {{ $t("aboutMe") }}
          </span>
        </li>
        <li>
          <span class="item" @click="goto($localePath('/#homeSkills'))">
            {{ $t("skills") }}
          </span>
        </li>
        <li>
          <nuxt-link class="item" :to="$localePath('/projects')">{{
            $t("projects")
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link class="item" :to="$localePath('/blog')">{{ $t("blog") }}</nuxt-link>
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

      .dropdown-enter-active,
      .dropdown-leave-active {
        transition: opacity 0.24s ease, transform 0.24s ease;
        transform-origin: top center;
      }

      .dropdown-enter-from,
      .dropdown-leave-to {
        opacity: 0;
        transform: translateY(-10px) scaleY(0.92);
      }

      .dropdown-enter-to,
      .dropdown-leave-from {
        opacity: 1;
        transform: translateY(0) scaleY(1);
      }

      .settingsMenu {
        top: 30px;
      }
    }
  }
}
</style>
