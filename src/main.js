import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FooterComponent from "@/components/layout/FooterComponent.vue";
import NavComponent from "@/components/layout/NavComponent.vue";

const app = createApp(App)

app.component('nav-component', NavComponent);
app.component('footer-component', FooterComponent);
app.use(router)


app.mount('#app')
