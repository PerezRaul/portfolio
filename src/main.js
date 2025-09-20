import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faEnvelope, faFilePdf, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(i18n).mount('#app')