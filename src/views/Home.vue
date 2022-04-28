<template>
  <div>
    <div class="form-group mb-5">
      <input
        v-focus
        v-model="searchText"
        type="text"
        class="form-control"
        placeholder="Search..."
      />
    </div>
    <div v-if="filteredPosts.length">
      <PostsCollection :posts="filteredPosts" />
    </div>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
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
    const error = ref("");

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
      } catch (err) {
        console.log(err);
        error.value = "Failed to fetch blog posts";
      } finally {
        loading.value = false;
      }
    }
    return { filteredPosts, loading, searchText, error };
  },
};
</script>
