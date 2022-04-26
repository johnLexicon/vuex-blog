<template>
  <div class="container-md container-fluid">
    <h1>Home</h1>
    <div v-if="!loading">
      <PostsCollection v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>Loading Posts</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import PostsCollection from "@/components/posts/PostsCollection";
import axios from "axios";
export default {
  name: "Home",
  components: {
    PostsCollection,
  },
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    onMounted(() => {
      getPosts();
    });
    async function getPosts() {
      try {
        const res = await axios("https://jsonplaceholder.typicode.com/posts");
        posts.value = res.data;
        loading.value = false;
      } catch (err) {
        console.log(err);
      }
    }
    return { posts, loading };
  },
};
</script>
