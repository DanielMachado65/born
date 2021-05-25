<template>
  <GoogleLogin
    :params="params"
    :renderParams="renderParams"
    :onSuccess="onSuccess"
    :onFailure="onFailure"
    >Login</GoogleLogin
  >
</template>

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "Subscribe",
  components: { GoogleLogin },

  data: () => ({
    params: {},
    renderParams: {
      width: 250,
      height: 50,
      // longtitle: true,
    },
  }),
  methods: {
    onSuccess(params) {
      console.log(params);
    },
    onFailure() {},
  },
};
</script>

<style scoped>
</style>