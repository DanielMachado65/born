<template>
  <aside class="menu">
    <div class="menu-itens">
      <span class="mr-5" @click="onClick('store')">Loja</span>
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
  width: 100%;
  justify-content: flex-end;
  display: flex;
  cursor: pointer;
}

.menu .logo {
  cursor: pointer;
}
</style>
