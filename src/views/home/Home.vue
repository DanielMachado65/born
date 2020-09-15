<template>
  <v-container fluid id="home">
    <div class="header">
      <v-img :src="born" class="born-ministerio-logo" alt="Apresentação" />
      <h2>@bornministerio</h2>
    </div>
    <div class="lateral-left">Projeto que transforma</div>
    <div class="lateral-right">Projeto que transforma</div>
    <Footer />
    <About />
  </v-container>
</template>

<script>
import born from "@/assets/imgs/born-negativo.png";
import { Footer } from "@/views/template/";
import { About } from "@/components/";

export default {
  name: "Home",
  components: { Footer, About },
  data: () => ({
    born,
  }),
};
</script>

<style scoped>
#home {
  height: 70vh;
}

#home .header {
  height: calc(100vh - 25%);
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

#home h2 {
  width: 300px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border: white 2px solid;
  border-radius: 20px;
  font-family: 'League Gothic', sans-serif;
  font-size: 2rem;
  letter-spacing: 3px;
}

#home .lateral-right,
#home .lateral-left {
  position: absolute;
  font-family: 'League Gothic', sans-serif;
  font-size: 1.4rem;
}

#home .lateral-left {
  top: 380px;
  left: -45px;
  transform: rotate(-90deg);
}

#home .lateral-right {
  top: 380px;
  right: -45px;
  transform: rotate(-90deg);
}
</style>