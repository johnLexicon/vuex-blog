<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-3">
      <label for="title">Title</label>
      <input
        v-focus
        v-model="validationModel.title.$model"
        id="title"
        type="text"
        class="form-control"
      />
      <ValidationMessage :model="validationModel.title" class="pt-2" />
    </div>
    <div class="form-group mb-3">
      <label for="body">Content</label>
      <textarea
        v-model="validationModel.body.$model"
        class="form-control"
        name="body"
        id="body"
        cols="30"
        rows="10"
      ></textarea>
      <ValidationMessage :model="validationModel.body" class="pt-1" />
    </div>
    <div class="form-group mb-3">
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
    <div class="form-group mb-3">
      <label for="author">Author</label>
      <input
        v-model="author"
        type="text"
        name="author"
        id="author"
        class="form-control"
      />
    </div>
    <div class="form-group mb-3">
      <button
        :disabled="validationModel.$invalid"
        class="btn btn-outline-primary"
      >
        New Post
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import postValidation from "@/models/PostValidation.js";
import ValidationMessage from "@/components/ValidationMessage";
export default {
  name: "CreatePostForm",
  emits: ["on-submitted"],
  components: {
    ValidationMessage,
  },
  setup(_, { emit }) {
    const author = ref("");
    const selectedCategories = ref([]);

    const validationModel = postValidation.toModel();

    async function handleSubmit() {
      const valid = await validationModel.value.$validate();
      if (!valid) return;

      emit("on-submitted", {
        title: validationModel.value.title.$model,
        body: validationModel.value.body.$model,
        author: author.value,
        categories: [...selectedCategories.value],
      });
    }
    return {
      selectedCategories,
      author,
      validationModel,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>