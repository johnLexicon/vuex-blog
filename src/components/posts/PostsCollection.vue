<template>
  <post-card v-for="post in $props.posts" :post="post" :key="post.id" />
</template>

<script>
import PostCard from "./PostCard.vue";
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
};
</script>

<style>
</style>