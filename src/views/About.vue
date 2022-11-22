<template>
  <NavigationVue>
    <NewsFormVue></NewsFormVue>
  </NavigationVue>
</template>
<script>
import NewsFormVue from '@/components/News/NewsForm.vue';
import LoadingVue from '@/components/Loading.vue';
import NavigationVue from '@/components/Navigation.vue';
export default {
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },

  data() {
    return {
      loading: true,
    };
  },

  components: { NavigationVue, LoadingVue, NewsFormVue },
  name: 'About',
};
</script>
