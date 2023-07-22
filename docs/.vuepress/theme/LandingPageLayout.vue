<template>
  <DefaultLayout>
    <!-- PARALLAX HERO -->
    <v-parallax
      id="heroParallax"
      src="https://res.cloudinary.com/hyuwah-github-io/image/upload/v1566016247/hyuwah.github.io/v2-header-alt.webp"
    >
    <v-row align=center>
      <v-col align="center">
        <v-avatar size="96px" class="mb-2">
          <v-img src="https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690004613/hyuwah.github.io/linkedin-pic.jpg" />
        </v-avatar>
        <h1 class="display-2 font-weight-bold ma-3">
          MUHAMAD WAHYUDIN
        </h1>
        <h3 class="font-weight-light">
          Software Engineer - Android
        </h3>
      </v-col>
    </v-row>
    </v-parallax>

    <div class="grey lighten-4">
      <v-container>
        <v-row wrap>
          <!-- INTRO CARD -->
          <v-col
            cols=12
            sm=10
            md=8
            offset-sm=1
            offset-md=2
            class="pb-5"
            style="margin-top:-100px; z-index:1"
          >
            <v-hover>
              <v-card
                hover
                shaped
              >
                <v-card-title primary-title class="pb-0">
                  <v-col align=center >
                    <h2 class="primary--text mb-2">Hello There!</h2>
                    <h5 class="font-weight-light" style="word-break: break-word">
                      I'm Wahyu, a Software Engineer handling mobile development specifically on Android with 5+ years of experience in the startup industry. I was a Google Certified Associate Android Developer from 2019 until 2022. I am passionate about creating innovative and user-friendly mobile apps, and I am always looking for new ways to use technology to solve real-world problems.
                    </h5>
                  </v-col>
                </v-card-title>
                <v-card-text class="pr-4 pl-4 pb-4 pt-0 text-center">
                  <v-col align=center class="mb-2">
                    <a
                      href="https://www.credential.net/62f48fc6-dfef-4604-a900-b59a5d2cc17c"
                      target="_blank"
                      rel="noopener"
                    >
                      <v-avatar size="128px" class="elevation-4">
                        <v-img
                          src="https://res.cloudinary.com/hyuwah-github-io/image/upload/v1689983366/hyuwah.github.io/associate-android-dev-badge-kotlin.png"
                        />
                      </v-avatar>
                    </a>
                  </v-col>
                  <v-row class="mt-4" justify=center>
                    <v-col
                      cols=4
                      sm=2
                      v-for="socmedItem in socmedItems"
                      :key="socmedItem.id"
                      class="socmed-item"
                    >
                      <a
                        :href="socmedItem.link"
                        target="_blank"
                        rel="noopener"
                        class="socmed-item"
                      >
                        <v-row>
                          <v-col cols=12 class="pb-0">
                            <img
                              :src="socmedItem.img"
                              height="48px"
                              :alt="socmedItem.title"
                            />
                          </v-col>
                          <v-col cols=12 class="pt-0">
                            <span
                              class="font-weight-medium grey--text text--darken-4"
                              >{{ socmedItem.title }}</span
                            >
                          </v-col>
                        </v-row>
                      </a>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <!-- PORTFOLIO WIDGET -->
          <PortfolioWidget />

          <!-- CODING STATS APEXCHARTS -->
          <!-- <CodingStats/> -->

          <!-- <Content/> -->
        </v-row>
      </v-container>
    </div>

    <!-- BOTTOM PARALLAX -->
    <v-parallax
      height="300"
      src="https://hyuwah.github.io/assets/images/arduino.webp"
    ></v-parallax>
    <!-- CONTACT SECTION -->
    <div class="elevation-4 pt-4 pb-4">
      <Contact />
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./Layout";
import Contact from "./LandingPage/Contact";
import PortfolioWidget from "./LandingPage/PortfolioWidget";
import CodingStats from "./LandingPage/CodingStats";
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
          title: "Github",
          img:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_github_gsbxtx.png",
          link: "https://github.com/hyuwah"
        },
        {
          title: "LinkedIn",
          img:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_linkedin_gzqqg1.png",
          link: "https://www.linkedin.com/in/hyuwah/"
        },
        {
          title: "DEV.to",
          img:
            "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",
          link: "https://dev.to/hyuwah"
        },
        {
          title: "Codepen",
          img:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1547297332/img_codepen_uxypzn.png",
          link: "https://codepen.io/hyuwah/"
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
