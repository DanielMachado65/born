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

* {
  font-family: "Montserrat", sans-serif;
}

body {
  margin: 0;
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
