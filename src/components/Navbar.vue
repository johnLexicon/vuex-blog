<template>
  <nav class="navbar navbar-expand-md sticky-top navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo-lexicon.gif" alt="Lexicon logo" height="30" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <template v-if="authIsReady">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/new"
                >New Post</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/about"
                >About</router-link
              >
            </li>
          </ul>
          <div>
            <div v-if="user">
              <span class="me-2 text-light">Logged in as {{ user.email }}</span>
              <button
                @click="handleSignOut"
                class="btn btn-outline-light"
                type="submit"
              >
                Logout
              </button>
            </div>
            <div v-else>
              <span class="nav-item">
                <router-link
                  class="text-decoration-none text-light me-2"
                  to="/login"
                  >Login</router-link
                >
              </span>
              <span class="nav-item">
                <router-link
                  class="text-decoration-none text-light"
                  to="/signup"
                  >Signup</router-link
                >
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Navbar",
  setup() {
    const store = useStore();

    const user = computed(() => {
      return store.state.user;
    });

    const authIsReady = computed(() => {
      return store.state.authIsReady;
    });

    function handleSignOut() {
      store.dispatch("logout");
    }

    return { user, authIsReady, handleSignOut };
  },
};
</script>

<style scoped>
.router-link-active {
  color: #d60000 !important;
}
</style>