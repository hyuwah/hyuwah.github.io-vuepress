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
    siteData, // site metadata,
    isServer
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
    
    import('vue-scroll-reveal').then(module => {
      if(isServer) {
        Vue.use({
          install(Vue, defaultOptions) {
            Vue.directive('scroll-reveal', {
              inserted: (el, binding) => {},
              update: (el, binding) => {},
            });
          }
        })
        Vue.prototype.$sr = {
          isSupported() {},
          sync() {},
          reveal() {},
        }
      } else {
        Vue.use(module.default)
      }
    }).catch(error => {
      console.log(error);
    });

    import('vue-apexcharts').then(module => {
      Vue.component('apexcharts', module.default)
    }).catch(error => {
      console.log(error);
    });
  }