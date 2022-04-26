<template>
  <div class="card shadow rounded border-0 p-2 mb-3">
    <div class="card-title fw-bold">{{ $props.post.title }}</div>
    <div class="card-body">{{ $props.post.body.slice(0, 25) }}...</div>
    <div class="card-footer bg-white">
      <router-link
        :to="{ name: 'PostDetails', params: { id: $props.post.id } }"
        class="btn btn-outline-primary"
      >
        Read more...
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsCollection",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>