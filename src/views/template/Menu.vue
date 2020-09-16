<template>
  <aside class="menu">
    <div class="logo">
      <v-img :src="logo" @click="onClick('home')" class="logo" width="80" alt="Logo" />
    </div>
    <div class="menu-itens">
      <span class="mr-5" @click="onClick('plans')">Planos</span>
      <span class="mr-5">Loja</span>
      <span class="mr-6">Inscrição</span>
    </div>
  </aside>
</template>

<script>
import logo from "../../assets/imgs/born-negativo.png";

export default {
  name: "Menu",
  data: () => ({
    logo,
  }),
  methods: {
    onClick(router) {
      this.$router.push({ name: router });
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  font-family: "League Gothic", sans-serif;
  font-size: 1.7rem;
}

.menu .menu-itens {
  align-items: center;
  display: flex;
  cursor: pointer;
}

.menu .logo{
  cursor: pointer;
}
</style>
