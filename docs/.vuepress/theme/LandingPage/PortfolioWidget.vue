<template>
  <v-flex xs12 sm10 md8 offset-sm1 offset-md2 class="pb-5 mt-5 mb-5">
    <!-- Section Title & More button -->
    <v-layout v-scroll-reveal.reset="{delay:250}" row class="mb-4" align-end>
      <h2 class="display-2 white--text">Portfolios</h2>
      <v-spacer></v-spacer>
      <v-btn flat dark small>Show More
        <v-icon>chevron_right</v-icon>
      </v-btn>
    </v-layout>
    <!-- Carousel -->
    <v-carousel v-scroll-reveal.reset="{delay:350}" height="50vh">
      <v-carousel-item v-for="(item,i) in items" :key="i">
        <v-container fluid class="bg--scrim">
          <v-layout row wrap class="pa-3">
            <v-flex xs12 sm6>
              <v-img width="100%" :src="item.src"/>
              <p class="subheading white--text mt-2">{{item.subtitle}}</p>
            </v-flex>
            <v-flex xs12 sm6 class="pa-3">
              <div class="white--text title text-xs-center">{{item.title}}</div>
              <br>
              <div class="white--text">{{item.desc}}</div>
              <v-layout row wrap justify-center align-center>
                <v-flex xs6 md4>
                  <a class="white--text" v-if="item.github" :href="item.github">
                    <v-icon>github</v-icon>
                  </a>
                </v-flex>
                <v-flex xs6 md4>
                  <a v-if="item.playstore" :href="item.playstore">
                    <v-img
                      src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                    />
                  </a>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          key: "1",
          src:
            "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1520599860/catatanku-banner_uzx2tt.png",
          title: "CatatanKu",
          subtitle: "Android app for notes & todos",
          desc: `Simple note taking android app developed with Java. Basic CRUD using Cursor Loader pattern into SQLite database. CatatanKu is a lightweight notepad application to keep track of your thoughts and ideas.`,
          github: "#",
          playstore:
            "https://play.google.com/store/apps/details?id=io.github.hyuwah.catatanku&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
          type: "android"
        },
        {
          key: "2",
          src:
            "https://github.com/hyuwah/TAZPASoftware/blob/master/assets/TB3-2.gif?raw=true",
          title: "TAZPA Software",
          subtitle: "DAQ Software for my thesis",
          desc: `TAZPA Software is a software interface for TAZPA, a system to measure zeta potential of a colloidal sample. Part of my thesis on Universitas Padjadjaran.`,
          github: "",
          playstore: "",
          type: "android"
        }
        // {
        //   key: "3",
        //   src:
        //     "https://raw.githubusercontent.com/hyuwah/FW-Cipher/master/MaterialProject/res/ss_run.PNG"
        // }
      ]
    };
  }
};
</script>

<style>
.bg--scrim {
  background: rgba(0, 0, 0, 0.7);
  height: 50vh;
  overflow-y: auto;
}
</style>
