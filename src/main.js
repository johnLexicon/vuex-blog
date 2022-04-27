import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import loggerMixin from './mixins/logger.js';

const app = createApp(App);

app.use(store).use(router);

// Global mixin example
app.mixin(loggerMixin);

app.mount('#app');
