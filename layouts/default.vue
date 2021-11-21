<template>
  <div class="container">
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
};
</script>

<style>
</style>