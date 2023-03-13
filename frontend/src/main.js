import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import './assets/main.css'

const app = createApp(App)
app.use(Toast)
app.use(Vuelidate)
app.use(createPinia())
app.use(router)

app.mount('#app')
