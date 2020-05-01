<style>
@import "./styles/main.css";
</style>

<template>
  <div>
    <NavBar> </NavBar>
    <SideBar> </SideBar>

    <div id="app" :class="{ main: $auth && $auth.isAuthenticated }">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default {
  name: "main-app",
  components: { NavBar, SideBar }
};
</script>
