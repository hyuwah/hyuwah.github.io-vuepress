<template>
  <DefaultLayout>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols=12>
          <Content/>
        </v-col>
      </v-row>
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./Layout";
export default {
  components: {
    DefaultLayout
  }
};
</script>

<style>
</style>
