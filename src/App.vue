<template>
  <component :is="layout"></component>
</template>

<script>
import MainLayout from "./layout/MainLayout.vue";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
