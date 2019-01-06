<template>
  <v-footer color="primary" dark height="auto">
    <v-layout column class="mt-2">
      <v-layout row wrap class="pa-2">
        <v-flex xs10 md3 offset-xs1 offset-md2>
          <h1 class="font-weight-regular">Links</h1>
          <ul>
            <li>Github Profile</li>
            <li>Gitlab</li>
            <li>Codepen</li>
          </ul>
        </v-flex>

        <v-flex xs10 md3 offset-xs1 offset-md2>
          <v-layout row align-center justify-end>
            <img height="48px" src="http://muhammadwahyudin.com/assets/images/logo.png">
            <span class="title font-weight-bold">.github</span>
            <span class="title font-weight-light">.io</span>
          </v-layout>
          <v-layout row justify-end class="mt-2">
            <span class="text-xs-right">A website to showcase the work of Muhammad Wahyudin</span>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-flex xs12 class="primary darken-1 pa-2 text-xs-center font-weight-light mt-3">
        <span class="px-3 primary--text text--lighten-4">
          Hyuwah &copy; {{new Date().getFullYear()}} | Made with
          <v-icon small class="red--text text--lighten-2">favorite</v-icon> in Indonesia
        </span>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
/* footer{
  background: linear-gradient(135deg, #1976d2 0%,#47c4ff 98%) !important;
} */
</style>
