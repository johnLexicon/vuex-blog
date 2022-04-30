<template>
  <div>
    <h1>Signup</h1>
    <SignUpForm actionName="auth/signup" />
  </div>
</template>

<script>
import SignUpForm from "@/components/SignUpForm";
export default {
  name: "Signup",
  components: {
    SignUpForm,
  },
};
</script>

<style>
</style>