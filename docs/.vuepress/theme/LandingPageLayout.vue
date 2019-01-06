<template>
  <DefaultLayout>
    <!-- PARALLAX HERO -->
    <v-parallax
    id="heroParallax"
      src="https://res.cloudinary.com/hyuwah-github-io/image/upload/v1514133423/cattypefrenzy.gif"
    >
      <v-layout align-center column justify-center class="ma-3">
        <h1 class="display-2 font-weight-bold mb-3 text-xs-center">MUHAMMAD WAHYUDIN</h1>
        <h3
          class=" font-weight-light text-xs-center"
        >Software Developer - Instrumentation &amp; Electronics Physicist - Technology Enthusiast</h3>
      </v-layout>
    </v-parallax>

    <div class="primary bg">
      <v-container>
        <v-layout row wrap>
          <!-- INTRO CARD -->
          <v-flex
            xs12
            sm10
            md8
            offset-sm1
            offset-md2
            class="pb-5"
            style="margin-top:-100px; z-index:1"
          >
            <v-hover>
              <v-card slot-scope="{hover}" :class="`elevation-${hover?12:2}`">
                <v-card-title primary-title>
                  <v-layout column align-center>
                    <v-avatar size="96px">
                      <v-img src="http://muhammadwahyudin.com/assets/images/pp-square.webp"/>
                    </v-avatar>
                  </v-layout>
                </v-card-title>
                <v-card-text class="pr-4 pl-4 pb-4 pt-0 text-xs-center">
                  <h1 class="primary--text">Hello There!</h1>
                  <h2
                    class="font-weight-light"
                  >I'm Wahyu, Android Developer with bachelor's degree in Physics from Universitas Padjadjaran. I make Windows desktop software with C#, Website, Web apps & Android apps.</h2>
                  <br>
                  <a href="https://sourcerer.io/hyuwah" target="_blank">
                    <img
                      src="https://sourcerer.io/icons/logo-sharing.svg"
                      height="48px"
                      alt="Sourcerer"
                    >
                  </a>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>

          <!-- PORTFOLIO WIDGET -->
          <PortfolioWidget/>

          <!-- <Content/> -->
        </v-layout>
      </v-container>
    </div>

    <!-- BOTTOM PARALLAX -->
    <v-parallax height="300" src="http://muhammadwahyudin.com/assets/images/arduino.webp"></v-parallax>
    <!-- CONTACT SECTION -->
    <div class="elevation-4 pt-4 pb-4">
      <Contact/>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./Layout";
import Contact from "./LandingPage/Contact";
import PortfolioWidget from "./LandingPage/PortfolioWidget";
export default {
  components: {
    DefaultLayout,
    Contact,
    PortfolioWidget,
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style>
.v-parallax__image {
  filter: brightness(50%);
  -webkit-filter: brightness(50%);
}

.bg {
  background: linear-gradient(135deg, #1976d2 0%,#47c4ff 98%);
}
</style>
