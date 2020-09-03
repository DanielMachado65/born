<template>
  <v-container fluid id="home">
    <div class="header">
      <h1>Born III</h1>
      <h2>O melhor retiro</h2>
    </div>
    <div class="lateral-left">Vem fazer parte desse ministério</div>
    <div class="lateral-right">Não esquece da data, do dia: 03/10/2020</div>
    <hr class="lateral-left lateral-hr" color="black" />
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#home {
  height: 80vh;
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
  background: black;
  color: white;
}

#home .lateral-right,
#home .lateral-left {
  position: absolute;
}

#home .lateral-left {
  top: 200px;
  left: -100px;
  transform: rotate(-90deg);
}

#home .lateral-right {
  top: 300px;
  right: -120px;
  transform: rotate(90deg);
}

#home .lateral-hr {
  width: 600px;
  top: 350px;
  left: -260px;
}
</style>