<template>
  <div class="footer-container">
    <div class="footer">
      <ul>
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
      <p>. {{ $t("footerCopyright") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goto(id) {
      this.$router.push(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  padding-top: 150px;
  margin-bottom: 50px;

  .footer {
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