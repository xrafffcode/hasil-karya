/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import '@/assets/css/admin-custom.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

loadFonts()


const app = createApp(App)


app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(Vue3EasyDataTable)

app.component('EasyDataTable', Vue3EasyDataTable)

app.mount('#app')
