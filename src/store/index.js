import { createStore } from 'vuex';

//firebase imports
import { auth } from '@/firebase/config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.user);
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('User state changed', payload);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    }
  },
  actions: {
    async signup(context, payload) {
      const res = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      if (res) {
        context.commit('setUser', res.user);
      } else {
        throw new Error('Could not signup');
      }
    },
    async signin(context, payload) {
      const res = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
      if (res) {
        context.commit('setUser', res.user);
      } else {
        throw new Error('Could not signin');
      }
    },
    async logout(context) {
      await signOut(auth);
      context.commit('setUser', null);
    }
  },
  modules: {}
});

// Used only once att start to check if authentication is ready and the current login status.
const unsubscribe = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true);
  store.commit('setUser', user);
  unsubscribe();
});

export default store;
