<template>
  <aside class="menu" :style="[ darkMode ? {backgroundColor: 'black'} : '' ]">
    <div class="menu-logo" @click="_onHandler('admin')">
      <v-img :src="logo" class="logo" width="40" alt="Logo" />
    </div>
    <div class="menu-items" :style="[ darkMode ? {color: 'white' } : '']">
      <MenuItems :method="_onHandler" />

      <div class="menu-item-last">
        <div class="menu-item-exit mb-4">
          <span>Dark</span>
          <v-switch color="orange darken-3" v-model="darkMode"></v-switch>
        </div>
        <div class="menu-item-exit" @click="_onHandler('logout')">
          <v-icon :color="darkMode ? 'white' : 'black'">fas fa-power-off</v-icon>
          <span>Sair</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import logo from "../../assets/logo.png";
import MenuItems from "../../components/MenuItems";
import { mapMutations } from "vuex";
import { userKey } from "@/global";

export default {
  name: "Menu",
  components: { MenuItems },
  computed: {
    darkMode: {
      get() {
        return this.$store.state.darkMode;
      },
      set() {
        return this.$store.commit("toggleTheme");
      },
    },
  },
  data: () => ({
    logo,
  }),
  methods: {
    ...mapMutations("user", ["setUser", "toggleModal"]),
    _onHandler(to) {
      if (to === "logout") {
        localStorage.removeItem(userKey);
        this.setUser(null);
      } else if (to === "User") this.toggleModal();
      else this.$router.push({ name: to });
    },
  },
};
</script>

<style>
.menu {
  grid-area: menu;

  display: flex;
  flex-direction: column;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.menu-logo {
  border-radius: 8px;
  padding: 5px;
  width: 80%;
  margin: 10px auto;
  box-shadow: 0 1px 2px 0 #6b6b6b;
}

.menu .menu-logo .logo {
  margin: 0 auto;
}

.menu .menu-items {
  height: calc(100vh - 80px);
  align-content: space-between;
  align-items: center;

  display: flex;
  flex-direction: column;
}

.menu .menu-items .menu-item-exit {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
