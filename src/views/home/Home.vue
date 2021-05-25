<template>
  <div>
    <v-container fluid id="home">
      <div class="image">
        <v-img :src="born" class="born-ministerio-logo" alt="Apresentação" />
      </div>
    </v-container>
    <v-container>
      <StoryLine />
    </v-container>
  </div>
</template>

<script>
import born from "@/assets/imgs/born.png";
import StoryLine from "@/components/StoryLine";

export default {
  name: "Home",
  components: {
    StoryLine,
  },
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