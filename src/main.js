import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: {
    grey: '#f4f4f4'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
