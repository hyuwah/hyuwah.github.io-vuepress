<template>
  <v-col cols=12 sm=10 md=8 offset-sm=1 offset-md=2 class="pb-5 mt-5 mb-5">
    <!-- Section Title & More button -->
    <v-row v-scroll-reveal.reset="{delay:250}" class="mb-4" align="end">
      <h2 class="display-2 white--text">Portfolios</h2>
      <v-spacer></v-spacer>
      <v-btn text dark small @click="toPortfolioPage">
        Show More
        <v-icon>chevron_right</v-icon>
      </v-btn>
    </v-row>
    <!-- Carousel -->
    <v-carousel interval=10000 cycle show-arrows-on-hover v-scroll-reveal.reset="{delay:350}" :height="getCarouselHeight()">
      <v-carousel-item v-for="(item,i) in items.slice().reverse()" :key="i">
        <v-container fluid class="bg--scrim">
          <v-row class="pa-3">
            <v-col align-self="center" cols=12 sm=6>
              <v-img width="100%" max-height="35vh" contain :src="item.src" />
              <p class="subheading white--text mt-2 text-center">{{item.subtitle}}</p>
            </v-col>
            <v-col cols=12 sm=6 class="pa-3">
              <div class="white--text title text-center">{{item.title}}</div>
              <br />
              <div class="white--text">{{item.desc}}</div>
              <br />
              <v-row align="center">
                <v-col cols=12 sm=3 md=2>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                    <a
                      v-on="on" 
                      class="white--text"
                      v-if="item.github"
                      :href="item.github"
                      target="_blank"
                      rel="noopener"
                    >
                      <v-icon class="mb-3" large>fab fa-github</v-icon>
                    </a>
                    </template>
                    <span>Go to Project's Repo</span>
                  </v-tooltip>
                </v-col>
                <v-col cols=12 sm=3 md=2>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                    <a
                      v-on="on"
                      v-if="item.playstore"
                      :href="item.playstore"
                      target="_blank"
                      rel="noopener"
                    >
                      <v-icon class="mb-3" large>fab fa-google-play</v-icon>
                    </a>
                    </template>
                    <span>Go to Play Store</span>
                  </v-tooltip>
                </v-col>
              </v-row>
              <br />
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          key: "1",
          src:
            "https://github.com/hyuwah/TAZPASoftware/blob/master/assets/TB3-2.gif?raw=true",
          title: "TAZPA Software",
          subtitle: "DAQ Software for my thesis",
          desc: `TAZPA Software is a software interface for TAZPA, a system to measure zeta potential of a colloidal sample. Part of my thesis on Universitas Padjadjaran.`,
          github: "https://github.com/hyuwah/TAZPASoftware",
          playstore: "",
          type: ".net desktop"
        },
        {
          key: "2",
          src:
            "https://camo.githubusercontent.com/1a1e12f6a6d8edc966b933c80965e4789a224a54/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f6879757761682d6769746875622d696f2f696d6167652f75706c6f61642f76313531383834343339322f6d6f7669656b752d302e352d686f6d652e706e67",
          title: "MovieKu",
          subtitle: "Movie information android app",
          desc:
            "An Indonesia Android Kejar Intermediate class final project. Data provided by The Movie Database (TMDb) API. Search movies, see trailer & review. ",
          github: "https://github.com/hyuwah/movieku",
          playstore: "",
          type: "android"
        },
        {
          key: "3",
          src:
            "https://camo.githubusercontent.com/c7977b50e3405a0e4e0b72063f062005b55ffe06/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6879757761682d6769746875622d696f2f696d6167652f75706c6f61642f635f7363616c652c685f3634302f76313532323835373039342f6d63615f617961745f666574636865722e706e67",
          title: "Muslim Companion App",
          subtitle: "Simple Random Ayat Fetcher from Quran",
          desc:
            "A work in progress app to learn MVP pattern. Data provided by Al Quran Cloud API. Transliteration & translation, share ayat",
          github: "https://github.com/hyuwah/android-muslim-companion-app",
          playstore: "",
          type: "android"
        },
        {
          key: "4",
          //src:
          //  "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1520599860/catatanku-banner_uzx2tt.png",
          src:
            "https://lh3.googleusercontent.com/0FsJRDl4zaxo4LrIfgXtAe9C0dETEPTOn4VkJEikGRoutPOaXsvlsDO0ZQuonIK-uocT=w1920-h929-rw",
          title: "CatatanKu",
          subtitle: "Android app for notes & todos",
          desc: `Simple note taking android app developed with Java. Basic CRUD using Cursor Loader pattern into SQLite database. CatatanKu is a lightweight notepad application to keep track of your thoughts and ideas.`,
          github: "https://github.com/hyuwah/android-catatanku",
          playstore:
            "https://play.google.com/store/apps/details?id=io.github.hyuwah.catatanku&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
          type: "android"
        },
        {
          key: "5",
          src:
            "https://lh3.googleusercontent.com/DpEDoCjLkrQVbuBAXQSJ4FwBf3nc-XuASHBlAGSqUGhLlW3PksCaMx3YjyFa4N3_j4k=w1920-h928-rw",
          title: "IdentitasKu",
          subtitle:
            "App to help you save your important data that you don't have time to remember",
          desc: `Save your ID card, handphone number, address data in a centralized way. Send those data to other applications such as chat app. Or copy the data wherever the data is needed. Data protected with password / fingerprint & encryption`,
          github: "https://github.com/hyuwah/IdentitasKu",
          playstore:
            "https://play.google.com/store/apps/details?id=com.muhammadwahyudin.identitasku",
          type: "android"
        },
        {
          key: "6",
          src:
            "https://camo.githubusercontent.com/9c31c2ae13e5e79e6328a61ed94a540a429b7e88/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3331342f312a644d7a494a6c543132686d53546b566b7a4e6e7845512e676966",
          title: "DraggableView",
          subtitle:
            "DraggableView is an Android library to make floating draggable view easy.",
          desc:
            "DraggableView is an Android library to make floating draggable view easily using extensions on Kotlin & provided utils class on Java",
          github: "https://github.com/hyuwah/DraggableView",
          playstore: "",
          type: "android library"
        }
      ]
    };
  },
  methods: {
    toPortfolioPage() {
      this.$router.push(this.$frontmatter.portfolio);
    },
    getCarouselHeight() {
      if (this.$vuetify.breakpoint.name == "xs") return "75vh";
      else return "55vh";
    }
  }
};
</script>

<style>
.bg--scrim {
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  overflow-y: auto;
}
a {
  text-decoration: none
}
</style>
