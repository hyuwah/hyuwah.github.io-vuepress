import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueContentPlaceholder from "vue-content-placeholders";

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.use(Vuetify, {
      iconfont: 'mdi'
    })
    Vue.use(VueContentPlaceholder)
  }