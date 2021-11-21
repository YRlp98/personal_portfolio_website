<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li>
        <nuxt-link class="menu__item" to="/">Home / صفحه اصلی</nuxt-link>
      </li>
      <li>
        <nuxt-link class="menu__item" to="/">About Me / درباره من</nuxt-link>
      </li>
      <li>
        <nuxt-link class="menu__item" to="/">Skills / مهارت‌ها</nuxt-link>
      </li>
      <li>
        <nuxt-link class="menu__item" to="/">Projects / پروژه‌ها</nuxt-link>
      </li>
      <li>
        <nuxt-link class="menu__item" to="/">‌Blog / بلاگ</nuxt-link>
      </li>

      <div class="settings-menu">
        <SettingsMenu />
      </div>
    </ul>
  </div>
</template>

<script>
import SettingsMenu from "./SettingsMenu.vue";

export default {
  name: "NavbarMobile",
  computed: {
    SettingsMenu,
  },
};
</script>

<style lang="scss" scoped>
.hamburger-menu {
  position: absolute;
}

#menu__toggle {
  opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}

.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 18px; // 26
  height: 18px; // 26
  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  transition-duration: 0.25s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  background-color: var(--gray-3);
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  transition-duration: 0.25s;

  .settings-menu {
    position: absolute;
    margin-top: -50px;
  }
}

.menu__item {
  display: block;
  padding: 12.5px 24px;
  color: white;
  // font-size: 1.063rem;
  text-decoration: none;
  transition-duration: 0.25s;
}

.menu__item:hover {
  background-color: var(--gray-2);
}

// Tablet
@include mediaQueryMin("md") {
  .hamburger-menu {
    display: none;
  }
}
</style>