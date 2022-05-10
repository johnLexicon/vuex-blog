import axios from 'axios';
import urlJoin from 'url-join';

export default {
  namespaced: true,
  state: {
    posts: [],
    isLoading: false
  },
  getters: {
    isLoading: (state) => state.isLoading,
    posts: (state) => state.posts,
    post: (state) => (postId) => state.posts.find((post) => post.id === postId)
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    addPost(state, payload) {
      state.posts.push(payload);
    },
    removePost(state, payload) {
      state.posts = state.posts.filter((post) => post._id !== payload);
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
    async createPost(context, payload) {
      try {
        const user = context.rootGetters['auth/user'];
        console.log('User:', user);
        const newPost = { ...payload, author: user.displayName };
        const res = await axios.post(process.env.VUE_APP_POSTS_API, newPost);
        context.commit('addPost', { ...newPost, _id: res.data._id });
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async removePost(context, payload) {
      try {
        const apiUrl = urlJoin(
          process.env.VUE_APP_POSTS_API,
          payload.toString()
        );
        await axios.delete(apiUrl);
        context.commit('removePost', payload);
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }
};
