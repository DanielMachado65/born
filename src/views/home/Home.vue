<template>
  <v-container fluid id="home">
    <div class="header">
      <v-img :src="born" class="born-ministerio-logo" alt="Apresentação" />
      <h2 class="button">@bornministerio</h2>
    </div>
  </v-container>
</template>

<script>
import born from "@/assets/imgs/born-negativo.png";

export default {
  name: "Home",
  data: () => ({
    born,
  }),
  methods: {
    routeToSubscribe() {
      this.$router.push({ name: "subscribe" });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}

#home .header {
  height: calc(100vh - 10%);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}

#home .born-ministerio-logo {
  width: 500px;
  height: 300px;
  margin-left: -40px;
}

#home h2.button {
  width: 300px;
  text-align: center;
  border: white 2px solid;
  border-radius: 20px;
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
  letter-spacing: 3px;
}

#home .subtitle {
  font-family: "League Gothic", sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 20px;
}
</style>