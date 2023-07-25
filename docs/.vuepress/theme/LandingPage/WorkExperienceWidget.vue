<template>
  <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
    <!-- Section Title -->
    <v-row v-scroll-reveal="{ delay: 250 }" class="mt-2 mb-4 mr-2 ml-2" align="end">
      <h1 class="primary--text">Work Experience</h1>
      <v-spacer></v-spacer>
    </v-row>
    <!-- Work Experience -->
    <v-timeline :align-top="$vuetify.breakpoint.smAndDown" :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-scroll-reveal="{ delay: 250 }" v-for="(data, index) in experiences" :key="index" large>
        <template v-slot:icon>
          <v-avatar>
            <img :src="data.company_logo">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <h3 class="mt-3 grey--text ">{{ data.tenure }}</h3>
        </template>
        <v-row>
          <v-col v-if="$vuetify.breakpoint.smAndDown" cols="12" md="2">
            <h3 class="mt-3 grey--text ">{{ data.tenure }}</h3>
          </v-col>
          <v-col>
            <h2>
              {{ data.company_name }}
            </h2>
            <a :href="data.company_web">
              <h4>
                {{ data.company_web }}
              </h4>
            </a>
            <h4 class="mt-3">
              {{ data.job_title }}
            </h4>
            <!-- desc role what i get -->
            <div class="mt-3" v-html="data.responsibilities"></div>
            <!-- button to playstore -->
            <v-btn
                outlined
                elevation="1"
                color="primary"
                @click="toUrl(data.playstore)"
                class="mt-4"
              >
                <v-icon left>fab fa-google-play</v-icon>
                <span class="font-weight-black">See App</span>
              </v-btn>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          key: "1",
          company_logo: "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690037689/hyuwah.github.io/assets/logo_recharge.webp",
          company_name: "PT Jalan Terus Saja (ReCharge)",
          company_web: "https://www.recharge.id",
          playstore: "https://play.google.com/store/apps/details?id=id.recharge.app",
          responsibilities: `
          ReCharge is a mobile app that allows users to rent powerbanks from smart stations across Indonesia.
          It's my first job as an Android Developer where I'm exposed to <strong>agile software development</strong> with very lean product engineering team (less than 10).
          <br><br>
          During my first several months, I'm handling the development of the mobile app (which still native & lot's of Java code back then) with the guidance of the Senior Developer.
          Then I move into handling the powerbank smart stations which uses an Android TV board.
          I learnt a lot about <strong>Firebase</strong>, and problem solving as we had to occasionally do troubleshooting with our overseas partner.
          `,
          tenure: "2018 - 2019",
          job_title: "Android Developer",
        },
        {
          key: "2",
          company_logo: "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690037668/hyuwah.github.io/assets/logo_pegipegi.webp",
          company_name: "PT Go Online Destination (Pegipegi)",
          company_web: "https://www.pegipegi.com",
          playstore: "https://play.google.com/store/apps/details?id=com.pegipegi.android",
          responsibilities: `
          Pegipegi is one of leading online travel agency in Indonesia that provides a wide range of travel products and services.
          During my time here, I was part of a bigger product engineering team that used CI/CD to automate the development process from development to app release. 
          <br><br>
          The codebase used a <strong>single module MVP architecture</strong>, and I worked on the full development lifecycle for a new product which is Bus Transport. 
          I was also introduced to <strong>reactive programming with RxJava2</strong> and <strong>dependency injection with Dagger2</strong>.
          `,
          tenure: "2019 - 2020",
          job_title: "Android Developer",
        },
        {
          key: "3",
          company_logo: "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690037704/hyuwah.github.io/assets/logo_stickearn.webp",
          company_name: "PT Paragon Pratama Teknologi (StickEarn)",
          company_web: "https://stickearn.com",
          playstore: "https://play.google.com/store/apps/details?id=com.stickearn",
          responsibilities: `
          StickEarn is a digital out-of-home advertising platform that connects brands with premium publishers across Indonesia.
          Being sole Android Developer on the <strong>CORE team</strong>, I maintained <strong>StickEarn</strong> driver app & <strong>StickVendor</strong> ops app.
          <br><br>
          I establish git flow, learnt to manage the app release and getting hands-on on the foundation of the CI for those apps.
          Here I tinkers a lot with <strong>location tracking, camera, data compression, WorkManager</strong> and also did some research of Media Player on desktop app with Flutter & Electron.
          `,
          tenure: "2020 - 2021",
          job_title: "Android Developer",
        },
        {
          key: "4",
          company_logo: "https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690037641/hyuwah.github.io/assets/logo_mapan.webp",
          company_name: "PT Rekan Usaha Mikro Anda (Mapan)",
          company_web: "https://mapan.id",
          playstore: "https://play.google.com/store/apps/details?id=com.garena.ruma",
          responsibilities: `
          Mapan is a social enterprise that helps low-income women in Indonesia achieve financial independence through arisan and reseller businesses.
          I'm responsible for developing features and maintaining the Mapan Android app. The app does a lot of <strong>AB testing</strong> which heavily relied on <strong>Firebase Remote Config & Analytics.</strong>
          <br><br>
          Our team really adhere to <strong>SOLID Principles</strong>, the codebase has <strong>multi-module app architecture with MVVM and repository pattern</strong>, use <strong>Trunk based development</strong>, Dagger2 for DI and coroutines flow for reactive programming.
          <br><br>
          Here I learnt a lot about custom view and code reusability, writing technical documentation, and <strong>third-party services integration</strong> (i.e. AppsFlyer, Netcore).
          I also had the chance to <strong>reduce CI/CD build time</strong> by optimizing the linter process.
          `,
          tenure: "2021 - Present",
          job_title: "Software Engineer - Android",
        },
      ],
    };
  },
  methods: {
    toUrl(url) {
      console.log(url);
      window.open(url, "_blank");
    },
  },
};
</script>

<style></style>
