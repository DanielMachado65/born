<template>
  <aside class="menu">
    <div class="logo">
      <v-img :src="logo" class="logo" width="60" alt="Logo" />
    </div>
    <div class="menu-itens">
      <span class="mr-2">Logo</span>
      <span class="mr-2">Sobre</span>
      <span class="mr-2">Loja</span>
      <span class="mr-2">Inscrição</span>
    </div>
  </aside>
</template>

<script>
import logo from "../../assets/logo.png";
export default {
  name: "Menu",
  data: () => ({
    logo,
  }),
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu .menu-itens {
  align-items: center;
  display: flex;
}
</style>
