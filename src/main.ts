import { createApp } from 'vue'
import './assets/css/tailwind.css'
import App from './App.vue'
import 'vue3-carousel/dist/carousel.css'
import 'aos/dist/aos.css'
import router from './router'
import 'animate.css'

createApp(App).use(router).mount('#app')
