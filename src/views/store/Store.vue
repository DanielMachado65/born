<template>
  <v-container id="plan">
    <v-row>
      <v-col>
        <h1 class="text-center">Em construção</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Store",
  data: () => ({}),
};
</script>

<style scoped>
#plan {
  height: 70vh;
}

#plan .flower-logo {
  margin: 0 auto;
}

#plan h1 {
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#plan h3.button {
  text-align: center;
  border: white 2px solid;
  border-radius: 20px;
  font-family: "League Gothic", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 3px;
}

#plan span {
  width: 60%;
  margin: 0 auto;
  font-family: "League Gothic", sans-serif;
}

@media only screen and (min-width: 599px) {
  #plan h3.button {
    margin: 0 auto;
    width: 60%;
  }
}
</style>