<template>
  <DefaultLayout>
    <v-container>
      <v-layout row justify-center align-center>
        <v-flex xs12>
          <Content/>
        </v-flex>
      </v-layout>
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
