<template>
  <div>
    <h1>Login</h1>
    <SignInForm actionName="auth/signin" />
  </div>
</template>

<script>
import SignInForm from "@/components/SignInForm";
export default {
  name: "Login",
  components: {
    SignInForm,
  },
};
</script>

<style>
</style>