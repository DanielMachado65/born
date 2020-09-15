import Vue from 'vue'
import './plugins/axios'
import './plugins/mq'
import './plugins/msg'
import './plugins/gravatar'
import './plugins/charts'
import App from './App.vue'
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
