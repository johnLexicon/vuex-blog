<template>
  <main class="bg-light min-vh-100">
    <Navbar />
    <router-view
      v-slot="{ Component }"
      class="pt-4 container-md container-fluid"
    >
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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
/** Route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>
