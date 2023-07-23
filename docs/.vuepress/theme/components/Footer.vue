<template>
  <v-footer color="primary" dark height="auto" padless>
    <v-row no-gutters class="mt-6">
      <v-col cols=12>
        <div>
          <v-col class="px-8">
            <v-row align="center" justify="end">
              <img
                height="48px"
                src="https://hyuwah.github.io/assets/images/logo.png"
              />
              <h5 class="headline font-weight-bold">hyuwah</h5>
              <h5 class="headline">.my.id</h5>
              <!-- <span class="title font-weight-bold">.github</span>
            <span class="title font-weight-light">.io</span> -->
            </v-row>
            <v-row justify="end" class="mt-2">
              <span class="text-right"
                >A website to showcase the work of Muhamad Wahyudin</span
              >
            </v-row>
          </v-col>
        </div>

        <v-row justify="center"
          class="primary darken-1 pa-2 font-weight-light mx-4 my-6 rounded-xl"
        >
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
