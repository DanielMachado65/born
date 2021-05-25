<template>
  <v-container fluid id="home">
    <div class="image">
      <v-img :src="born" class="born-ministerio-logo" alt="Apresentação" />
    </div>
  </v-container>
</template>

<script>
import born from "@/assets/imgs/born.png";

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
  background-image: url("~@/assets/imgs/ballons.gif");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#home .image {
  height: 400px;
  width: 400px;
}
</style>