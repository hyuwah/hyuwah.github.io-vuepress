<template>
    <v-app-bar app :inverted-scroll="$frontmatter.home">
        <v-spacer></v-spacer>
        <v-toolbar-title @click="toHome" style="cursor:pointer">
        <v-layout align-center  class="primary--text">
            <img height="30px" src="https://res.cloudinary.com/hyuwah-github-io/image/upload/v1690197583/hyuwah.github.io/mw_logo_only.svg" class="mr-2" style="filter: invert(0.35) sepia(1) saturate(5) hue-rotate(175deg);"/>
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
