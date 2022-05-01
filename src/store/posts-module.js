import axios from 'axios';

export default {
  namespaced: true,
  state: {
    posts: [],
    isLoading: false
  },
  getters: {
    isLoading: (state) => state.isLoading,
    posts: (state) => state.posts
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    removePost(state, payload) {
      state.posts = state.posts.filter((post) => post.id !== payload);
    }
  },
  actions: {
    async fetchPosts(context) {
      try {
        context.commit('setIsLoading', true);
        const res = await axios.get(process.env.VUE_APP_POSTS_API);
        context.commit('setPosts', res.data);
      } catch (err) {
        console.log(err);
        throw err;
      } finally {
        context.commit('setIsLoading', false);
      }
    },
    async removePost(context, payload) {
      try {
        await axios.delete(`${process.env.VUE_APP_POSTS_API}${payload}`);
        context.commit('removePost', payload);
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }
};
