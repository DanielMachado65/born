<template>
  <div :class="`float-point-white ${localtion}`" :style="{background: color}"></div>
</template>

<script>
export default {
  name: "FloatPoint",
  props: {
    localtion: String,
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style scoped>
.float-point-white {
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
}

.top {
  top: 70px;
}

.right {
  right: 70px;
}

.bottom {
  bottom: 70px;
}

.left {
  left: 70px;
}
</style>