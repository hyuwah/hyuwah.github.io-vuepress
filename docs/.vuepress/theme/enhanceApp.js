import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueContentPlaceholder from "vue-content-placeholders";

// Helpers
import colors from 'vuetify/es5/util/colors'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    // ...apply enhancements to the app
    Vue.use(Vuetify)
    options.vuetify = new Vuetify({
      icons: {
        iconfont: 'md',
      },
      theme: {
        light : {
          primary: colors.blue.darken2,
          secondary: colors.blue.lighten1,
          accent: colors.green.base,
        }
      }
    })
    Vue.use(VueContentPlaceholder)
    
    import('gridsome-scroll-reveal').then(module => {
      Vue.use(module.default)
    }).catch(error => {
      console.log(error);
    });

    import('vue-apexcharts').then(module => {
      Vue.component('apexcharts', module.default)
    }).catch(error => {
      console.log(error);
    });
  }