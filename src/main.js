import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faBars,
    faCircleX,
    faEarthAsia,
    faEnvelopeOpenText,
    faHeadphones,
    faArrowLeftLong
} from '@fortawesome/pro-light-svg-icons'

import './assets/styles/styles.scss'

const app = createApp(App)
library.add(
    faBars,
    faCircleX,
    faEarthAsia,
    faEnvelopeOpenText,
    faHeadphones,
    faArrowLeftLong
)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
