<template>
  <div class="sidenav" v-if="$auth && $auth.isAuthenticated">
    <router-link
      :class="{
        active: $route.name === 'Customers' || $route.name === 'Customer',
        'sidenav-item': true
      }"
      to="/customers"
      >Customers</router-link
    >

    <router-link
      :class="{ active: $route.name === 'Contact', 'sidenav-item': true }"
      to="/contact"
      >Contact Us</router-link
    >
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>
