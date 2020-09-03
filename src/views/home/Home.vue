<template>
  <v-container fluid id="home">
    <div class="header">
      <h1>Born III</h1>
      <h2>@bornministerio</h2>
    </div>
    <div class="lateral-left">Projeto que transforma</div>
    <div class="lateral-right">Projeto que transforma</div>
    <Footer />
    <About />
  </v-container>
</template>

<script>
import { Footer } from "@/views/template/";
import { About } from "@/components/";

export default {
  name: "Home",
  components: { Footer, About },
};
</script>

<style scoped>
#home {
  height: 65vh;
}

#home .header {
  height: calc(100vh - 30%);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}

#home h1 {
  text-align: center;
  font-size: 3rem;
}

#home h2 {
  width: 300px;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border: black 2px solid;
  border-radius: 20px;
}

#home .lateral-right,
#home .lateral-left {
  position: absolute;
}

#home .lateral-left {
  top: 300px;
  left: -50px;
  transform: rotate(-90deg);
}

#home .lateral-right {
  top: 300px;
  right: -50px;
  transform: rotate(-90deg);
}
</style>