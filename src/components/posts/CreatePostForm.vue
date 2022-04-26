<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-2">
      <label for="title">Title</label>
      <input v-model="title" id="title" type="text" class="form-control" />
    </div>
    <div class="form-group mb-2">
      <label for="body">Content</label>
      <textarea
        v-model="body"
        class="form-control"
        name="body"
        id="body"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="form-group mb-2">
      <label for="categories">Categories</label>
      <select
        v-model="selectedCategories"
        multiple
        name="categories"
        id="categories"
        class="form-control"
      >
        <option value="travel">Travel</option>
        <option value="food">Food</option>
        <option value="politics">Politics</option>
      </select>
    </div>
    <div class="form-group mb-2">
      <button class="btn btn-outline-primary">New Post</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CreatePostForm",
  emits: ["on-submitted"],
  setup(_, { emit }) {
    const title = ref("");
    const body = ref("");
    const selectedCategories = ref([]);

    function handleSubmit() {
      //TODO: Validation
      emit("on-submitted", {
        title: title.value,
        body: body.value,
        categories: [...selectedCategories.value],
      });
    }
    return {
      title,
      body,
      selectedCategories,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>