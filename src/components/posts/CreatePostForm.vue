<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-3">
      <label for="title">Title</label>
      <input
        v-focus
        v-model="v$.title.$model"
        id="title"
        type="text"
        class="form-control"
      />
      <ValidationMessage :model="v$.title" class="pt-2" />
    </div>
    <div class="form-group mb-3">
      <label for="body">Content</label>
      <textarea
        v-model="v$.body.$model"
        class="form-control"
        name="body"
        id="body"
        cols="30"
        rows="10"
      ></textarea>
      <ValidationMessage :model="v$.body" class="pt-1" />
    </div>
    <div class="form-group mb-3">
      <label for="categories">Categories</label>
      <select
        v-model="v$.selectedCategories.$model"
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
      <button :disabled="v$.$invalid" class="btn btn-outline-primary">
        New Post
      </button>
    </div>
  </form>
</template>

<script>
import { ref, reactive, computed, nextTick } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import ValidationMessage from "@/components/ValidationMessage";
export default {
  name: "CreatePostForm",
  emits: ["on-submitted"],
  components: {
    ValidationMessage,
  },
  setup(_, { emit }) {
    const state = reactive({
      title: "",
      body: "",
      selectedCategories: ref([]),
    });
    const rules = computed(() => {
      return {
        title: { required, minLength: minLength(2) },
        body: { required, minLength: minLength(10) },
        selectedCategories: {},
      };
    });
    const v$ = useVuelidate(rules, state);

    async function handleSubmit() {
      const valid = await v$.value.$validate();
      if (!valid) return;

      emit("on-submitted", {
        title: v$.value.title.$model,
        body: v$.value.body.$model,
        categories: v$.value.selectedCategories.$model,
      });
      await nextTick();
      v$.value.$reset();
    }
    return {
      v$,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>