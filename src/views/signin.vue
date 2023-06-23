<template>
  <signin></signin>
</template>

<script>
import signin from "../components/sign-in.vue";
export default {
  name: "Sign-in",
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("token")) {
      next("/");
    } else {
      next();
    }
  },
  components: {
    signin,
  },
};
</script>
