<template>
  <div>
    <h1>Create Post</h1>
    <CreatePostForm @on-submitted="handleSubmit" />
  </div>
</template>

<script>
import CreatePostForm from "@/components/posts/CreatePostForm";
export default {
  name: "CreatePost",
  components: {
    CreatePostForm,
  },
  methods: {
    async handleSubmit(newPost) {
      try {
        this.$store.dispatch("posts/createPost", newPost);
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