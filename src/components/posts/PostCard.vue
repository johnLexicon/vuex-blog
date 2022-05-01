<template>
  <div class="card shadow rounded border-0 mb-4">
    <div class="card-header bg-primary text-white text-end">
      <i
        class="fa-solid fa-trash text-danger"
        @click="removePost($props.post.id)"
        :class="{
          'text-muted': !isLoggedIn,
          enabled: isLoggedIn,
        }"
      ></i>
    </div>
    <div class="px-2 py-2 card-title fw-bold">{{ $props.post.title }}</div>
    <div class="card-body">{{ $props.post.body.slice(0, 25) }}...</div>
    <div
      class="
        card-footer
        bg-white
        d-flex
        flex-row-reverse
        justify-content-between
        align-items-center
      "
    >
      <router-link
        :to="{ name: 'PostDetails', params: { id: $props.post.id } }"
        class="btn btn-outline-primary"
      >
        Read more...
      </router-link>
      <span class="fst-italic"
        >Author: {{ $props.post.author || "Unknown" }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
  methods: {
    ...mapActions("posts", ["removePost"]),
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");
.enabled {
  cursor: pointer;
  color: #d60000;
}
</style>