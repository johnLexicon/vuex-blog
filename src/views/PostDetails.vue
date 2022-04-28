<template>
  <div>
    <div v-if="!loading" class="post-content">
      <h1>{{ post.title }}</h1>
      <div>
        {{ post.body }}
      </div>
      <div class="author">Written by {{ post.author || "Unknown" }}</div>
    </div>
    <div v-if="loading">Loading post...</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "PostsDetails",
  props: ["id"],
  setup(props) {
    const router = useRouter();
    let post = ref(null);
    const loading = ref(true);
    onMounted(() => {
      getPost();
    });
    async function getPost() {
      try {
        const res = await axios.get(
          `${process.env.VUE_APP_POSTS_API}${props.id}`
        );
        post.value = res.data;
        console.log(res.data);
        loading.value = false;
      } catch (err) {
        console.log(err);
        router.push({ name: "NotFound" });
      }
    }
    return {
      post,
      loading,
    };
  },
};
</script>

<style>
</style>