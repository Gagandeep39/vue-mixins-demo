import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixins/logger';

createApp(App)
  .mixin(loggerMixin)
  .mount('#app');
