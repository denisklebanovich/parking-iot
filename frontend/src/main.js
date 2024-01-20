import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/UserStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
