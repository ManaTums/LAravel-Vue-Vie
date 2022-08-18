import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';

import Primero from './Componentes/ComponentePrueba.vue';
import Segundo from './Componentes/SegundoC.vue';

createApp({
        components: {
            Primero,
            Segundo
        }
    })
    .mount("#app");