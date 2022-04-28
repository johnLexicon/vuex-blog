<template>
  <main class="bg-light min-vh-100">
    <Navbar />
    <router-view class="pt-4 container-md container-fluid" />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {},
};
</script>


<style>
</style>
