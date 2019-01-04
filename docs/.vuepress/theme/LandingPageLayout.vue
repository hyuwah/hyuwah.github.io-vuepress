<template>
  <DefaultLayout>
    <v-parallax
      height="400"
      src="https://res.cloudinary.com/hyuwah-github-io/image/upload/v1514133423/cattypefrenzy.gif"
    >
      <v-layout align-center column justify-center class="ma-3">
        <h1 class="display-2 font-weight-light mb-3">MUHAMMAD WAHYUDIN</h1>
        <h4
          class="subheading"
        >Software Developer - Instrumentation &amp; Electronics Physicist - Technology Enthusiast</h4>
      </v-layout>
    </v-parallax>

    <div class="blue">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2 class="pb-5" style="margin-top:-100px">
            <v-hover>
            <v-card slot-scope="{hover}"
                :class="`elevation-${hover?12:2}`"
            >
              <v-card-title primary-title>
                <v-layout column align-center>
                  <v-avatar size="96px">
                    <v-img src="http://muhammadwahyudin.com/assets/images/pp-square.webp"/>
                  </v-avatar>
                  <span class="display-1 mt-3 blue--text">Hello There!</span>
                </v-layout>
              </v-card-title>
              <v-card-text class="pr-4 pl-4 pb-4">
                <span
                  class="headline font-weight-light"
                >I'm Wahyu, Android Developer with bachelor's degree in Physics from Universitas Padjadjaran. I make Windows desktop software with C#, Website, Web apps & Android apps.</span>
              </v-card-text>
            </v-card>
            </v-hover>
          </v-flex>

          <Content/>

           

        </v-layout>
      </v-container>
    </div>

    <div class="elevation-4 mb-4">         
        <Contact/>
    </div>

  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./Layout";
import Contact from "./LandingPage/Contact"
export default {
  components: {
    DefaultLayout,
    Contact
  },
  
};
</script>

<style>
</style>
