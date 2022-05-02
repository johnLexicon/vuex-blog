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
    <div v-if="isLoading">Loading...</div>
    <div v-if="error" class="alert alert-danger">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import PostsCollection from "@/components/posts/PostsCollection";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    PostsCollection,
  },
  data() {
    return {
      error: null,
      searchText: "",
    };
  },
  created() {
    try {
      this.fetchPosts();
    } catch (err) {
      this.error = err;
    }
  },
  computed: {
    ...mapGetters("posts", ["isLoading", "posts"]),
    filteredPosts() {
      if (this.isLoading) return [];
      return this.posts.filter((post) => post.title.includes(this.searchText));
    },
  },
  methods: {
    ...mapActions("posts", ["fetchPosts"]),
  },
};
</script>
