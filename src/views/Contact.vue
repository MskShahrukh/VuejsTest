<template>
  <div class="contact-page">
    <h1>This is contact page</h1>
    <p>
      <b>Address</b>
      - {{ contactInfo && contactInfo.address }}
    </p>
    <p>
      <b>Email</b>
      - {{ contactInfo && contactInfo.email }}
    </p>
    <p>
      <b>Phone</b>
      - {{ contactInfo && contactInfo.phone }}
    </p>
  </div>
</template>

<script>
export default {
  name: "contact-page",
  data() {
    return {
      contactInfo: this.$store.state.contactInfo
    };
  }
};
</script>
