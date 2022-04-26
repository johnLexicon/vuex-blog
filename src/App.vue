<template>
  <main>
    <Navbar />
  </main>
  <router-view />
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
