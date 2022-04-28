<template>
  <div>
    <h1>Create Post</h1>
    <CreatePostForm @on-submitted="handleSubmit" />
  </div>
</template>

<script>
import CreatePostForm from "@/components/posts/CreatePostForm";
import axios from "axios";
export default {
  name: "CreatePost",
  components: {
    CreatePostForm,
  },
  methods: {
    async handleSubmit(newPost) {
      try {
        const res = await axios.post(process.env.VUE_APP_POSTS_API, newPost);
        console.log(res);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>