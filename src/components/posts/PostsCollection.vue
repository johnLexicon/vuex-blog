<template>
  <post-card
    v-for="post in $props.posts"
    :post="post"
    :key="post.id"
    :loggedIn="isLoggedIn"
    @handle-delete="handleDelete"
  />
</template>

<script>
import PostCard from "./PostCard.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "PostsCollection",
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    let isLoggedIn = ref(false);

    isLoggedIn.value = store.getters["isLoggedIn"];

    async function handleDelete(postId) {
      try {
        const res = await axios.delete(
          `${process.env.VUE_APP_POSTS_API}${postId}`
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }

    return {
      isLoggedIn,
      handleDelete,
    };
  },
};
</script>

<style>
</style>