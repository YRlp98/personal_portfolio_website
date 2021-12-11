<template>
  <div class="footer-container">
    <div class="footer">
      <ul>
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
      <p>. {{ $t("footerCopyright") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
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
      justify-content: space-between;

      ul {
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

      p {
        margin-top: 40px;
      }
    }
  }
}
</style>