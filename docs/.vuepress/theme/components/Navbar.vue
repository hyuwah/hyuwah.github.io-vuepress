<template>
    <v-app-bar app :inverted-scroll="$frontmatter.home">
        <v-spacer></v-spacer>
        <v-toolbar-title @click="toHome" style="cursor:pointer">
        <v-layout align-center  class="primary--text">
            <img height="36px" src="https://hyuwah.github.io/assets/images/logo.png"/>
            <h5 class="headline font-weight-bold">hyuwah</h5>
            <h5 class="headline">.my.id</h5>
            <!-- <span class="font-weight-bold">.github</span>
            <span class="font-weight-light">.io</span> -->
        </v-layout>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
    methods:{
        toHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
    header {
        background-color: rgba(255,255,255,0.9) !important;
    }

    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
        header {
            background-color: rgba(255,255,255,0.65) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            backdrop-filter: blur(10px) !important;
        }
    }
</style>
