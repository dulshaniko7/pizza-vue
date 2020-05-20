import Vue from 'vue'
import App from './App.vue'
import 'jquery'
import 'jquery/dist/jquery'
import 'popper.js'
import 'popper.js/dist/popper'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
