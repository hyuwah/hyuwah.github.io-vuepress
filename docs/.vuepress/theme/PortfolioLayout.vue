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
                    <v-img width="100%" max-height="50vh" contain :src="item.src" />
                  </v-col>
                  <v-col cols="12" sm="6" class="pa-3">
                    <div class="text-h6 font-weight-bold">{{ item.title }}</div>
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
                    @click="toUrl(item.github)"
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
          github: "https://github.com/hyuwah/TAZPASoftware",
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
          github: "https://github.com/hyuwah/movieku",
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
          github: "https://github.com/hyuwah/android-muslim-companion-app",
          playstore: "",
          type: "android",
        },
        {
          key: "4",
          src:
            "https://lh3.googleusercontent.com/0FsJRDl4zaxo4LrIfgXtAe9C0dETEPTOn4VkJEikGRoutPOaXsvlsDO0ZQuonIK-uocT=w1920-h929-rw",
          title: "CatatanKu",
          subtitle: "Android app for notes & todos",
          desc: `Simple note taking android app developed with Java. Basic CRUD using Cursor Loader pattern into SQLite database. CatatanKu is a lightweight notepad application to keep track of your thoughts and ideas.`,
          github: "https://github.com/hyuwah/android-catatanku",
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
            "App to help you save your important data that you don't have time to remember",
          desc: `Save your ID card, handphone number, address data in a centralized way. Send those data to other applications such as chat app. Or copy the data wherever the data is needed. Data protected with password / fingerprint & encryption`,
          github: "https://github.com/hyuwah/IdentitasKu",
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
          github: "https://github.com/hyuwah/DraggableView",
          playstore: "",
          type: "android library",
        },
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
      console.log(url)
      window.open(url, "_blank")
    }
  },
};
</script>

<style></style>
