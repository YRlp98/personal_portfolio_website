<template>
  <nav class="navbar-container">
    <span class="navbar-more">
      <img src="~assets/images/icons/more.svg" alt="" />
    </span>
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
export default {
  name: "Navbar",
  data() {
    return {
      activeLocale: "en",
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
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    background-color: brown;

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
  }
}

// Desktop
@include mediaQueryMin("xl") {
  .navbar-container {
    background-color: #ffbbbb;
    .navbar-items {
      display: flex;

      li {
        left: 100;
      }
    }

    .navbar-more {
      display: flex;
      cursor: pointer;
    }
  }
}
</style>