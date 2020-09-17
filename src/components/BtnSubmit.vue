<template>
  <v-container>
    <v-row>
      <v-col md="12">
        <v-btn color="purple darken-3" :disabled="disabled" class="white--text">{{text}}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BtnSubmit",
  props: {
    text: String,
    disabled: Boolean,
  },
};
</script>

<style scoped>
button {
  width: 100%;
}
</style>