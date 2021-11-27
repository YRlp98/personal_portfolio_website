<template>
  <div class="settings-menu-container">
    <div class="menu-theme">
      <p>Theme</p>
      <ul class="menu-bar">
        <li>
          <a @click="onChangeTheme()" :class="{ active: isDark }" href="#">
            <span class="menu-icon">
              <img src="~assets/images/icons/dark.svg" alt="" />
            </span>
            Dark Mode
          </a>
        </li>
        <li>
          <a @click="onChangeTheme()" :class="{ active: !isDark }" href="#">
            <span class="menu-icon">
              <img src="~assets/images/icons/light.svg" alt="" />
            </span>
            Light Mode
          </a>
        </li>
      </ul>
    </div>
    <div class="menu-language">
      <p>Language</p>
      <ul class="menu-bar">
        <li>
          <a @click="onChangeLanguage()" :class="{ active: isFarsi }" href="#">
            <span class="menu-icon">
              <img src="~assets/images/icons/ir.svg" alt="" />
            </span>
            Farsi
          </a>
        </li>
        <li>
          <a @click="onChangeLanguage()" :class="{ active: !isFarsi }" href="#">
            <span class="menu-icon">
              <img src="~assets/images/icons/en.svg" alt="" />
            </span>
            English
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsMenu",
  data() {
    return {
      // themes: [
      //   {
      //     title: "Dark Mode",
      //     isDark: true,
      //   },
      //   {
      //     title: "Light Mode",
      //     isDark: false,
      //   },
      // ],
      // languages: [
      //   {
      //     title: "Farsi",
      //     isFarsi: true,
      //   },
      //   {
      //     title: "English",
      //     isFarsi: false,
      //   },
      // ],

      isDark: true,
      isFarsi: true,
    };
  },
  methods: {
    onChangeTheme() {
      this.isDark = !this.isDark;
    },
    onChangeLanguage() {
      this.isFarsi = !this.isFarsi;
    },
  },
};
</script>

<style lang="scss" scoped>
.settings-menu-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 215px;
  background: var(--gray-3);
  border-radius: 5px;
  padding: 20px 20px;
  z-index: 999;

  ul {
    list-style: none;
    width: 215px;
    padding: 10px 0;

    li {
      line-height: 2.188rem;

      a {
        text-decoration: none;
        color: white;
        display: flex;
        font-size: 0.813rem;
        padding: 1px 10px;
        align-items: center;
        border-radius: 5px;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;

          img {
            width: 17px;
            height: 17px;
          }
        }
      }

      :hover {
        transform: scale(1.1);
      }

      .active {
        background-color: var(--gray-2);
      }
    }
  }

  .menu-language {
    margin-top: 10px;
  }

  // Tablet
  @include mediaQueryMin("md") {
    box-shadow: 0px 4px 90px 1px rgba(255, 255, 255, 0.1);
    -ms-box-shadow: 0px 4px 90px 1px rgba(255, 255, 255, 0.1);
    -o-box-shadow: 0px 4px 90px 1px rgba(255, 255, 255, 0.1);
    -webkit-box-shadow: 0px 4px 90px 1px rgba(255, 255, 255, 0.1);
    -moz-box-shadow: 0px 4px 90px 1px rgba(255, 255, 255, 0.1);
  }
}
</style>