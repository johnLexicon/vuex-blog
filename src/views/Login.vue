<template>
  <div>
    <h1>Login</h1>
    <sign-form actionName="signin" />
  </div>
</template>

<script>
import SignForm from "@/components/SignForm";
export default {
  name: "Login",
  components: {
    SignForm,
  },
};
</script>

<style>
</style>