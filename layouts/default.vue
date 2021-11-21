<template>
  <div>
    <NavbarMobile />
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    NavbarMobile,
    Navbar,
  },
  data() {
    return {
      activeLocale: "fa",
    };
  },
};
</script>

<style>
</style>