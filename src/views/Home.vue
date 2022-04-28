<template>
  <div class="container-md container-fluid pt-5">
    <div class="form-group mb-5">
      <input
        v-focus
        v-model="searchText"
        type="text"
        class="form-control"
        placeholder="Search..."
      />
    </div>
    <div v-if="!loading">
      <PostsCollection :posts="filteredPosts" />
    </div>
    <div v-else>Loading Posts</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import PostsCollection from "@/components/posts/PostsCollection";
import useSearch from "@/hooks/search.js";
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

    const { searchText, filteredItems: filteredPosts } = useSearch(
      posts,
      "title"
    );

    async function getPosts() {
      try {
        const res = await axios(process.env.VUE_APP_POSTS_API);
        posts.value = res.data;
        loading.value = false;
      } catch (err) {
        console.log(err);
      }
    }
    return { filteredPosts, loading, searchText };
  },
};
</script>
