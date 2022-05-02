<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-2">
      <label for="name" class="form-label">Name</label>
      <input
        v-focus
        v-model="v$.name.$model"
        type="text"
        name="name"
        id="name"
        class="form-control"
      />
      <ValidationMessage :model="v$.name" class="pt-2" />
    </div>
    <div class="form-group mb-2">
      <label for="email" class="form-label">Email</label>
      <input
        v-model="v$.email.$model"
        id="email"
        type="email"
        class="form-control"
      />
      <ValidationMessage :model="v$.email" class="pt-2" />
    </div>
    <div class="form-group mb-2">
      <label for="password" class="form-label">Password</label>
      <input
        v-model="v$.password.password.$model"
        type="password"
        name="password"
        id="password"
        class="form-control"
      />
      <ValidationMessage :model="v$.password.password" class="pt-2" />
    </div>
    <div class="form-group mb-2">
      <label for="confirmPassword" class="form-label">Confirm Password</label>
      <input
        v-model="v$.password.confirm.$model"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        class="form-control"
      />
      <ValidationMessage :model="v$.password.confirm" class="pt-2" />
    </div>
    <div class="text-end">
      <button class="btn btn-outline-primary" :disabled="v$.$invalid">
        Register
      </button>
    </div>
    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
  </form>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ValidationMessage from "@/components/ValidationMessage";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email, sameAs } from "@vuelidate/validators";
export default {
  name: "SignUpForm",
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

    const state = reactive({
      name: "",
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    });

    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(2) },
        email: { required, email },
        password: {
          password: { required, minLength: minLength(8) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
      };
    });

    const v$ = useVuelidate(rules, state);
    const errorMessage = ref(null);

    async function handleSubmit() {
      try {
        const valid = await v$.value.$validate();
        if (!valid) return;

        await store.dispatch(props.actionName, {
          name: v$.value.name.$model,
          email: v$.value.email.$model,
          password: v$.value.password.password.$model,
        });
        router.push("/");
      } catch (err) {
        console.log(err);
        errorMessage.value = err.message;
      }
    }

    return {
      v$,
      handleSubmit,
      errorMessage,
    };
  },
};
</script>

<style>
</style>