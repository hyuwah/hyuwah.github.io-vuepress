<template>
  <v-footer color="primary" dark height="auto" padless>
    <v-row no-gutters class="mt-6">
      <v-col cols="12" sm="10" md="8" offset-sm="1" offset-md="2">
        <div>
          <v-col class="px-6">
            <v-row align="center" justify="end">
              <img height="30px"
                src="https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690197583/hyuwah.github.io/mw_logo_only.svg"
                class="mr-2" style="filter: invert(1);" />
              <h5 class="headline font-weight-bold">hyuwah</h5>
              <h5 class="headline">.my.id</h5>
              <!-- <span class="title font-weight-bold">.github</span>
            <span class="title font-weight-light">.io</span> -->
            </v-row>
            <v-row justify="end" class="mt-4">
              <span class="text-right">A website to showcase the work of Muhamad Wahyudin</span>
            </v-row>
          </v-col>
        </div>

        <v-row justify="center" class="primary darken-1 pa-2 font-weight-light mx-2 my-6 rounded-xl">
          <span class="px-3 primary--text text--lighten-4">
            &copy; {{ new Date().getFullYear() }} | Made with
            <v-icon small class="red--text text--lighten-2">favorite</v-icon> in
            Indonesia
          </span>
        </v-row>
      </v-col>
    </v-row>
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
