import Vuetify from "vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueContentPlaceholder from "vue-content-placeholders";
// import VueScrollReveal from 'vue-scroll-reveal';

// Helpers
import colors from 'vuetify/es5/util/colors'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.use(Vuetify, {
      theme: {
        primary: colors.blue.darken2,
        secondary: colors.blue.lighten1,
        accent: colors.green.base,
      }
    })
    Vue.use(VueContentPlaceholder)
    // Vue.use(VueScrollReveal)
  }