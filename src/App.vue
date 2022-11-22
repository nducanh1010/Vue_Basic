<template>
  <div id="app">
    <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
      <router-view />
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
import Navigation from './components/Navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation,
  },
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    })
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
