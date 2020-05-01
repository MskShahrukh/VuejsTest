<template>
  <div id="header">
    <ul>
      <li class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" width="15" alt="site logo" />
          Site logo.
        </router-link>
      </li>

      <li v-if="$auth && $auth.isAuthenticated" style="float:right">
        <a href="javascript:void(0)" @click="logout()">logout</a>
      </li>
      <li
        v-if="($auth && !$auth.isAuthenticated) || !$auth"
        style="float:right"
      >
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin + "/login"
      });
    }
  }
};
</script>
