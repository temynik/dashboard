import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueCircle from 'vue2-circle-progress'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Buefy)
Vue.use(VueCircle)

new Vue({
  render: h => h(App),
}).$mount('#app')
