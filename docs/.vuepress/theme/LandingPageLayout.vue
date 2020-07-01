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
          <v-img src="https://hyuwah.github.io/assets/images/pp-square.webp" />
        </v-avatar>
        <h1 class="display-2 font-weight-bold ma-3">
          MUHAMMAD WAHYUDIN
        </h1>
        <h3 class="font-weight-light">
          Android Software Engineer -- Instrumentation &amp; Electronics Physicist
        </h3>
      </v-col>
    </v-row>
    </v-parallax>

    <div class="primary bg">
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
                <v-card-title primary-title>
                  <v-col align=center>
                    <h2 class="primary--text mb-2">Hello There!</h2>
                    <h3 class="font-weight-light pl-4 pr-4 text-sm-center">
                      I'm Wahyu, physics graduate turned Google certified
                      Associate Android Developer. Currently in love with
                      Kotlin, but also have a crush on Flutter
                    </h3>
                  </v-col>
                </v-card-title>
                <v-card-text class="pr-4 pl-4 pb-4 pt-0 text-center">
                  <v-col align=center class="mb-2">
                    <a
                      href="https://www.credential.net/62f48fc6-dfef-4604-a900-b59a5d2cc17c"
                      target="_blank"
                      rel="noopener"
                    >
                      <v-avatar size="156px" class="elevation-4">
                        <v-img
                          src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/14516874"
                        />
                      </v-avatar>
                    </a>
                  </v-col>
                  <v-row justify=center>
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
                          <v-col cols=12>
                            <img
                              :src="socmedItem.img"
                              height="48px"
                              :alt="socmedItem.title"
                            />
                          </v-col>
                          <v-col cols=12>
                            <span
                              class="subheading grey--text text--darken-4"
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
          <CodingStats/>

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
          title: "Sourcerer",
          img: "https://sourcerer.io/icons/logo-sharing.svg",
          link: "https://sourcerer.io/hyuwah"
        },
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
          title: "dev.to",
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
