<template>
  <div class="login-page">
    <h1>This is the login page</h1>

    <button @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "login-page",

  methods: {
    login() {
      this.$auth.loginWithPopup().then(() => {
        if (this.$auth && this.$auth._data) {
          this.$store.commit("loginUser", this.$auth._data);
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
