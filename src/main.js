import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import loggerMixin from './mixins/logger.js';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config.js';

// Used only once att start to check if authentication is ready and the current login status.
const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit('auth/setAuthIsReady', true);
  store.commit('auth/setUser', user);
  unsubscribe();
});

const app = createApp(App);

app.use(store).use(router);

// Global mixin example
app.mixin(loggerMixin);

// Global custom directive
app.directive('focus', {
  mounted(elem) {
    elem.focus();
  }
});

app.mount('#app');
