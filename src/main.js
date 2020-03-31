import Vue from 'vue'
import App from './views/app/App.vue'
import router from '../router.js'
import store from './store'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles';


Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueParticles)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
