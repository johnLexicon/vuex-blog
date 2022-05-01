import { createStore } from 'vuex';

import authModule from './auth-module';
import postsModule from './posts-module';

const store = createStore({
  modules: {
    auth: authModule,
    posts: postsModule
  }
});

export default store;
