<template>
  <div>
    <div class="lateral-left">Projeto que transforma</div>
    <div class="lateral-right">Projeto que transforma</div>
  </div>
</template>

<script>
export default {
  name: "Laterals",
};
</script>

<style scoped>
.lateral-right,
.lateral-left {
  position: absolute;
  font-family: "League Gothic", sans-serif;
  font-size: 1.4rem;
}

.lateral-left {
  top: 380px;
  left: -45px;
  transform: rotate(-90deg);
}

.lateral-right {
  top: 380px;
  right: -45px;
  transform: rotate(-90deg);
}
</style>