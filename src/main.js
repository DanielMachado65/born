import Vue from 'vue'
import App from './App.vue'
import './plugins/mq'

import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import './assets/fonts/stylesheet.css'

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
