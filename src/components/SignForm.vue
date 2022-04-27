<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-2">
      <label for="email" class="form-label">Email</label>
      <input
        v-focus
        v-model="email"
        id="email"
        type="email"
        class="form-control"
      />
    </div>
    <div class="form-group mb-2">
      <label for="password" class="form-label">Password</label>
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        class="form-control"
      />
    </div>
    <button class="btn btn-outline-primary">Submit</button>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "SignForm",
  props: {
    actionName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const errorMessage = ref(null);

    async function handleSubmit() {
      try {
        await store.dispatch(props.actionName, {
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (err) {
        console.log(err);
        errorMessage.value = err.message;
      }
    }

    return {
      email,
      password,
      handleSubmit,
      errorMessage,
    };
  },
};
</script>

<style>
</style>