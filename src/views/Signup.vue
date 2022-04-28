<template>
  <div>
    <h1>Signup</h1>
    <sign-form actionName="signup" />
  </div>
</template>

<script>
import SignForm from "@/components/SignForm";
export default {
  name: "Signup",
  components: {
    SignForm,
  },
};
</script>

<style>
</style>