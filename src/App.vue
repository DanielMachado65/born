<template>
  <v-app id="app">
    <Menu />
    <home />
  </v-app>
</template>

<script>
import Home from "@/views/home/Home";
import { Menu } from "@/views/template/";

export default {
  name: "App",
  components: { Home, Menu },
};
</script>

<style>
:root {
  --webkit-font-smoothing: antialiased;
  --moz-ozx-font-smoothing: grayscale;
}

@font-face {
  font-family: LeagueGothic;
  src: url("/born/src/assets/fonts/LeagueGothic-Regular.otf") format("opentype");
}

@font-face {
  font-family: LeagueGothicItalic;
  src: url("/born/src/assets/fonts/LeagueGothic-Italic.otf") format("opentype");
}

* {
  font-family: "LeagueGothic", sans-serif;
}

#app {
  background: black;
  color: white;
}

body {
  margin: 0;
  background: black;
}

::-webkit-scrollbar {
  width: 0.25rem;
}

::-webkit-scrollbar-track {
  background: #1e1e24;
}

::-webkit-scrollbar-thumb {
  background: coral;
}
</style>
