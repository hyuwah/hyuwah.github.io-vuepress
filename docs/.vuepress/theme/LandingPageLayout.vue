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
          class="font-weight-light text-xs-center"
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
              <v-card slot-scope="{hover}" :class="`card-rounded elevation-${hover?12:2}`">
                <v-card-title primary-title>
                  <v-layout column align-center>
                    <v-avatar size="96px">
                      <v-img src="http://hyuwah.github.io/assets/images/pp-square.webp"/>
                    </v-avatar>
                  </v-layout>
                </v-card-title>
                <v-card-text class="pr-4 pl-4 pb-4 pt-0 text-xs-center">
                  <h1 class="primary--text">Hello There!</h1>
                  <h2
                    class="font-weight-light"
                  >I'm Wahyu, Android Developer with bachelor's degree in Physics from Universitas Padjadjaran.</h2>
                  <br>
                  <v-layout row wrap justify-center>
                    <v-flex
                      xs4
                      sm2
                      v-for="socmedItem in socmedItems"
                      :key="socmedItem.id"
                      class="socmed-item"
                    >
                        <a :href="socmedItem.link" target="_blank" class="socmed-item">
                          <v-layout column >
                            <v-flex xs12>
                              <img :src="socmedItem.img" height="48px" :alt="socmedItem.title">
                            </v-flex>
                            <v-flex xs12>
                              <span class="caption">{{socmedItem.title}}</span>
                            </v-flex>
                          </v-layout>
                        </a>
                    </v-flex>
                  </v-layout>

                  <!-- <a href="https://sourcerer.io/hyuwah" target="_blank">
                    <img
                      src="https://sourcerer.io/icons/logo-sharing.svg"
                      height="48px"
                      alt="Sourcerer"
                    >
                  </a>-->
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>

          <!-- PORTFOLIO WIDGET -->
          <PortfolioWidget/>

          <!-- CODING STATS WIDGET -->
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2 class="pb-5 mt-5 mb-5">
            <v-layout v-scroll-reveal.reset="{delay:250}" row class="mb-4" align-end>
              <h2 class="display-2 white--text">Coding Stats</h2>
            </v-layout>
            <v-layout row wrap>
              <!-- Coding activity Wakatime -->
              <v-flex xs12 md6>
                <figure style="padding: 1em;"><embed src="https://wakatime.com/share/@hyuwah/52042bd7-8354-4496-8b7a-ca9e705df2d2.svg"></embed></figure>
              </v-flex>
              <!-- Language Wakatime -->              
              <v-flex xs12 md6>
                <figure style="padding: 1em;"><embed src="https://wakatime.com/share/@hyuwah/ed51c99a-a0c7-4258-b42c-05d84ffed8d6.svg"></embed></figure>
              </v-flex>
            </v-layout>
          </v-flex>

          <!-- CODING STATS APEXCHARTS -->
          <!-- <CodingStats /> -->


          <!-- <Content/> -->
        </v-layout>
      </v-container>
    </div>

    <!-- BOTTOM PARALLAX -->
    <v-parallax height="300" src="http://hyuwah.github.io/assets/images/arduino.webp"></v-parallax>
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
import CodingStats from "./LandingPage/CodingStats"
export default {
  components: {
    DefaultLayout,
    Contact,
    PortfolioWidget,
    CodingStats
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      socmedItems: [
        {
          title: "Sourcerer",
          img: "https://sourcerer.io/icons/logo-sharing.svg",
          link: "https://sourcerer.io/hyuwah",
        },
        {
          title: "Github",
          img:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_github_gsbxtx.png",
          link: "https://github.com/hyuwah",
        },
        {
          title: "Linkedin",
          img:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_linkedin_gzqqg1.png",
          link: "https://www.linkedin.com/in/hyuwah/",
        },
        {
          title: "Gitlab",
          img:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_gitlab_rkwpqt.png",
          link: "https://gitlab.com/hyuwah",
        },
        {
          title: "Codepen",
          img:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_codepen_uxypzn.png",
          link: "https://codepen.io/hyuwah/",
        }
      ]
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
  background: linear-gradient(135deg, #1976d2 0%, #47c4ff 98%);
}

.socmed-item {
  margin-bottom: 16px;
  text-decoration: none;
}

.card-rounded {
  border-radius: 12px;
}
</style>
