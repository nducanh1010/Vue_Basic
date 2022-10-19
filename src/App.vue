<template>
  <div id="app">
    <Navigation />
    <el-main>
      <img alt="Vue logo" src="./assets/logo.png" />
      <router-view />
    </el-main>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: rgb(238, 223, 182); */
}
</style>
