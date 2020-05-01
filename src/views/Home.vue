<template>
  <div class="home">
    <div v-if="$auth && $auth.user">
      <img v-if="$auth.user.picture" :src="$auth.user.picture" width="200" />
      <h2>Welcome {{ $auth.user.name }} !</h2>
      <p>{{ $auth.user.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
