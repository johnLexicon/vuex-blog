<template>
  <div class="card rounded">
    <div class="card-header text-primary bg-white">
      <div class="h1 card-title">{{ $props.post.title }}</div>
    </div>
    <div class="card-body">{{ $props.post.body }}</div>
    <div class="py-3 categories">
      <span
        v-for="category in capitalizedCategories"
        :key="category"
        class="px-3 mx-3 bg-danger text-white rounded"
        >{{ category }}</span
      >
    </div>
    <div class="card-footer bg-white">
      <span class="fst-italic"
        >Author: {{ $props.post.author || "Unknown" }}</span
      >
    </div>
  </div>
</template>

<script>
import capitalize from "@/hooks/capitalize.js";
export default {
  name: "PostDetailsCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const capitalizedCategories = capitalize(props.post.categories);
    return {
      capitalizedCategories,
    };
  },
};
</script>

<style>
</style>