<template>
  <v-app class="theme-container gfont">
    <Navbar/>
      <v-main>
        <slot/>
      </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
