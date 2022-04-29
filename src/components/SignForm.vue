<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-2">
      <label for="email" class="form-label">Email</label>
      <input
        v-focus
        v-model="validationModel.email.$model"
        id="email"
        type="email"
        class="form-control"
      />
      <ValidationMessage :model="validationModel.email" class="pt-2" />
    </div>
    <div class="form-group mb-2">
      <label for="password" class="form-label">Password</label>
      <input
        v-model="validationModel.password.$model"
        type="password"
        name="password"
        id="password"
        class="form-control"
      />
      <ValidationMessage :model="validationModel.password" class="pt-2" />
    </div>
    <div class="text-end">
      <button
        class="btn btn-outline-primary"
        :disabled="validationModel.$invalid"
      >
        Submit
      </button>
    </div>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import userValidation from "@/models/UserValidation.js";
import ValidationMessage from "@/components/ValidationMessage";
export default {
  name: "SignForm",
  components: {
    ValidationMessage,
  },
  props: {
    actionName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();

    // const email = ref("");
    // const password = ref("");
    const validationModel = userValidation.toModel();
    const errorMessage = ref(null);

    async function handleSubmit() {
      try {
        const valid = await validationModel.value.$validate();
        if (!valid) return;

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
      // email,
      // password,
      validationModel,
      handleSubmit,
      errorMessage,
    };
  },
};
</script>

<style>
</style>