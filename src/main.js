import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import './assets/fonts/stylesheet.css'

// Vue.config.productionTip = false

import { LoaderPlugin } from 'vue-google-login'; 

Vue.use(LoaderPlugin, {
    client_id: '966833563899-g4rafr58us6a8qnvdjqi2a446la80qtl.apps.googleusercontent.com'
});

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
