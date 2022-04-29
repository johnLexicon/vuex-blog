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
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="alert alert-danger">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import PostsCollection from "@/components/posts/PostsCollection";
import useSearch from "@/hooks/search.js";
import useFetch from "@/hooks/fetchData.js";
import axios from "axios";
export default {
  name: "Home",
  components: {
    PostsCollection,
  },
  setup() {
    const { data, loading, error, getData } = useFetch(getPosts);

    onMounted(() => {
      getData();
    });

    const { searchText, filteredItems: filteredPosts } = useSearch(
      data,
      "title"
    );

    async function getPosts() {
      const res = await axios.get(process.env.VUE_APP_POSTS_API);
      return res.data;
    }

    return { filteredPosts, loading, searchText, error };
  },
};
</script>
