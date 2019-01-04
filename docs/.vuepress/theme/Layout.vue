<template>
  <v-app class="theme-container">

    <v-toolbar color="white" light fixed app>
      <v-toolbar-title>
        <v-layout align-center class="blue--text font-weight-regular">
        <img height="36px" src="http://muhammadwahyudin.com/assets/images/logo.png"/>
        <b>.github</b>
        .io
        </v-layout>
        </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <slot></slot>
    </v-content>

    <v-footer color="blue" dark height="auto" absolute app>
      <v-layout row wrap>

        <v-flex xs12 class="pa-2 text-xs-center">
          A website to showcase the work of Muhammad Wahyudin
        </v-flex>
        <v-flex xs12 class="blue darken-1 pa-2 text-xs-center font-weight-light">
          <span class="px-3">Hyuwah &copy; {{new Date().getFullYear()}} | Made with <v-icon small>favorite</v-icon> in Indonesia</span>
        </v-flex>
      </v-layout>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name:"DefaultLayout"
};
</script>

<style>
</style>
