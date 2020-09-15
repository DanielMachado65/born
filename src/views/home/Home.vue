<template>
  <v-container fluid id="home">
    <div class="header">
      <v-img :src="born" class="born-ministerio-logo" alt="Apresentação" />
      <h2 class="button">@bornministerio</h2>
    </div>
    <div class="lateral-left">Projeto que transforma</div>
    <div class="lateral-right">Projeto que transforma</div>
    <Footer />
    <About />
    <btn-submit />

    <!-- <h2 class="text-center subtitle">Born I - Preparado para nascer de novo?</h2>
    <ExperiencesBornI /> -->

    <h2 class="text-center subtitle">Born II - Maturidade Espirtual</h2>
    <ExperiencesBornII />
  </v-container>
</template>

<script>
import born from "@/assets/imgs/born-negativo.png";
import { Footer } from "@/views/template/";
import {
  About,
  BtnSubmit,
  // ExperiencesBornI,
  ExperiencesBornII,
} from "@/components/";

export default {
  name: "Home",
  components: { Footer, About, BtnSubmit, ExperiencesBornII },
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

#home h2.button {
  width: 300px;
  text-align: center;
  border: white 2px solid;
  border-radius: 20px;
  font-family: "League Gothic", sans-serif;
  font-size: 2rem;
  letter-spacing: 3px;
}

#home .lateral-right,
#home .lateral-left {
  position: absolute;
  font-family: "League Gothic", sans-serif;
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

#home .subtitle {
  font-family: "League Gothic", sans-serif;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 20px;
}
</style>