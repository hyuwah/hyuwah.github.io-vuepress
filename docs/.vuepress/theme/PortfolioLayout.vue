<template>
  <DefaultLayout>
    <div class="grey lighten-4">
      <v-container>
        <v-col cols="12">
          <!-- <Content/> -->

          <!-- Section Title & More button -->
          <v-row class="ma-4">
            <v-btn outlined @click="toHome()">
              <v-icon left>chevron_left</v-icon>
              Back
            </v-btn>
          </v-row>
          <v-row v-scroll-reveal="{ delay: 250 }" class="ma-4" align="end">
            <h2 class="display-2">Portfolios</h2>
          </v-row>
          <!-- Featured Portfolio -->
          <v-row>
            <v-col
              v-scroll-reveal="{ delay: 250 }"
              v-for="(item, i) in items.slice().reverse()"
              :key="i"
              cols="12"
              md="12"
              lg="6"
            >
              <v-card outlined class="rounded-lg pl-2 pr-2 ">
                <v-row class="pa-3">
                  <v-col align-self="center" cols="12" sm="6">
                    <v-img
                      width="100%"
                      max-height="50vh"
                      contain
                      :src="item.src"
                    />
                  </v-col>
                  <v-col cols="12" sm="6" class="pa-3">
                    <div class="text-h6 font-weight-bold">{{ item.title }}</div>
                    <v-row
                      v-if="item.github.stars || item.github.fork"
                      class="pl-3 pr-3 pb-3 pt-1"
                    >
                      <img
                        v-if="item.github.stars"
                        :src="item.github.stars"
                        class="mr-2"
                      />
                      <img v-if="item.github.forks" :src="item.github.forks" />
                    </v-row>
                    <p class="text-subtitle-2 text--secondary">
                      {{ item.subtitle }}
                    </p>
                    <p class="text-body-1">{{ item.desc }}</p>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    v-if="item.github"
                    outlined
                    class="ma-2"
                    @click="toUrl(item.github.url)"
                  >
                    <v-icon left dark>fab fa-github</v-icon>
                    Repository
                  </v-btn>
                  <v-btn
                    v-if="item.playstore"
                    outlined
                    class="ma-2"
                    @click="toUrl(item.playstore)"
                  >
                    <v-icon left dark>fab fa-google-play</v-icon>
                    Playstore
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./Layout";
export default {
  components: {
    DefaultLayout,
  },
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
          github: {
            url: "https://github.com/hyuwah/TAZPASoftware",
            stars: "",
          },
          playstore: "",
          type: ".net desktop",
        },
        {
          key: "2",
          src:
            "https://camo.githubusercontent.com/1a1e12f6a6d8edc966b933c80965e4789a224a54/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f6879757761682d6769746875622d696f2f696d6167652f75706c6f61642f76313531383834343339322f6d6f7669656b752d302e352d686f6d652e706e67",
          title: "MovieKu",
          subtitle: "Movie information android app",
          desc:
            "An Indonesia Android Kejar Intermediate class final project. Data provided by The Movie Database (TMDb) API. Search movies, see trailer & review. ",
          github: {
            url: "https://github.com/hyuwah/movieku",
            stars: "",
          },
          playstore: "",
          type: "android",
        },
        {
          key: "3",
          src:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1591783251/Muslim%20Companion%20Apps/mvp_ayah_prayer_qibla.gif",
          title: "Muslim Companion App",
          subtitle: "Show quran verse, prayer times & qibla",
          desc:
            "A work in progress app to show random quran verse, prayer times & qibla compass. Data provided by Al Quran Cloud API & Aladhan API.",
          github: {
            url: "https://github.com/hyuwah/android-muslim-companion-app",
            stars:
              "https://img.shields.io/github/stars/hyuwah/android-muslim-companion-app?style=social",
            forks:
              "https://img.shields.io/github/forks/hyuwah/android-muslim-companion-app?style=social",
          },
          playstore: "",
          type: "android",
        },
        {
          key: "4",
          src:
            "https://lh3.googleusercontent.com/0FsJRDl4zaxo4LrIfgXtAe9C0dETEPTOn4VkJEikGRoutPOaXsvlsDO0ZQuonIK-uocT=w1920-h929-rw",
          title: "CatatanKu",
          subtitle: "Simple note taking android app with markdown feature",
          desc: `CatatanKu is a lightweight notepad application to keep track of your thoughts and ideas. It uses RoomDB for basic CRUD, Dagger Hilt for DI, Markwon for markdown renderer.`,
          github: {
            url: "https://github.com/hyuwah/android-catatanku",
            stars: "https://img.shields.io/github/stars/hyuwah/android-catatanku?style=social",
            forks: "https://img.shields.io/github/forks/hyuwah/android-catatanku?style=social"
          },
          playstore:
            "https://play.google.com/store/apps/details?id=io.github.hyuwah.catatanku&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
          type: "android",
        },
        {
          key: "5",
          src:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1588829097/IdentitasKu/1200.gif",
          title: "IdentitasKu",
          subtitle:
            "Offline App to help you save your important data that you don't have time to remember",
          desc: `Save your ID card, handphone number, address data in a centralized way. Send those data to other applications such as chat app, or copy the data wherever it's needed. Data is saved locally & protected with password / fingerprint & encryption`,
          github: {
            url: "https://github.com/hyuwah/IdentitasKu",
            stars:
              "https://img.shields.io/github/stars/hyuwah/IdentitasKu?style=social",
            forks:
              "https://img.shields.io/github/forks/hyuwah/IdentitasKu?style=social",
          },
          playstore:
            "https://play.google.com/store/apps/details?id=com.muhammadwahyudin.identitasku",
          type: "android",
        },
        {
          key: "6",
          src:
            "https://camo.githubusercontent.com/9c31c2ae13e5e79e6328a61ed94a540a429b7e88/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3331342f312a644d7a494a6c543132686d53546b566b7a4e6e7845512e676966",
          title: "DraggableView",
          subtitle: "Android library to make floating draggable view easy.",
          desc:
            "DraggableView is an Android library to make floating draggable view easily inside app or overlaying other app",
          github: {
            url: "https://github.com/hyuwah/DraggableView",
            stars:
              "https://img.shields.io/github/stars/hyuwah/DraggableView?style=social",
            forks:
              "https://img.shields.io/github/forks/hyuwah/DraggableView?style=social",
          },
          playstore: "",
          type: "android library",
        },
        {
          key: "7",
          src:
            "https://camo.githubusercontent.com/51a62edccd651596f52cf46e61f59235afc314b0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6879757761682d6769746875622d696f2f696d6167652f75706c6f61642f76313539323434383137302f476974687562557365724578706c6f7265722f696e69742d757365722d736f6369616c2d6f7074696d697a65642e676966",
          title: "Github User Explorer",
          subtitle: "Architectural sample of modern android development",
          desc:
            "Github API App with MVVM + Dagger Hilt + Jetpack Navigation + Coroutine + Retrofit",
          github: {
            url: "https://github.com/hyuwah/github-user-explorer-app",
            stars: "https://img.shields.io/github/stars/hyuwah/github-user-explorer-app?style=social",
            forks: "https://img.shields.io/github/forks/hyuwah/github-user-explorer-app?style=social",
          },
          playstore: "",
          type: "android",
        },
        {
          key: "8",
          src:
            "https://camo.githubusercontent.com/c07b5192a349e2a9753790664fbe3151ec44fb5c/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6879757761682d6769746875622d696f2f696d6167652f75706c6f61642f76313539333134313232332f4d6f76696544422532304578706c6f7265722f626173635f666c6f775f6f7074696d697a65642e676966",
          title: "MovieDB Explorer",
          subtitle: "Architectural sample of modern android development",
          desc:
            "The MovieDB App with MVVM + Koin + Jetpack Navigation + Coroutine + Retrofit + Room",
          github: {
            url: "https://github.com/hyuwah/moviedb-explorer-app",
            stars: "https://img.shields.io/github/stars/hyuwah/moviedb-explorer-app?style=social",
            forks: "https://img.shields.io/github/forks/hyuwah/moviedb-explorer-app?style=social",
          },
          playstore: "",
          type: "android",
        }
      ],
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    getCarouselHeight() {
      if (this.$vuetify.breakpoint.name == "xs") return "75vh";
      else return "55vh";
    },
    toUrl(url) {
      console.log(url);
      window.open(url, "_blank");
    },
  },
};
</script>

<style></style>
