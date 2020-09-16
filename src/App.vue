<template>
  <v-app id="app">
    <Menu />
    <home />
  </v-app>
</template>

<script>
import Home from '../src/views/home/Home';
import { Menu } from "../src/views/template/";

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
  background: purple;
}
</style>
