<template>
  <main>
    <Navbar />
  </main>
  <router-view class="vh-100 pt-5 container-md container-fluid bg-light" />
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
