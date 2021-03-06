//firebase imports
import { auth } from '@/firebase/config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';

export default {
  namespaced: true,
  state: {
    user: null,
    authIsReady: false
  },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.user);
    },
    user(state) {
      return state.user;
    },
    authIsReady(state) {
      return state.authIsReady;
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
        await updateProfile(auth.currentUser, { displayName: payload.name });
        context.commit('setUser', auth.currentUser);
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
  }
};
