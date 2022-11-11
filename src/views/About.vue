<template>
  <NavigationVue>
    <!-- <div v-if="loading">
      <LoadingVue />
    </div> -->
<NewsFormVue></NewsFormVue>
  </NavigationVue>
</template>
<script>
import NewsFormVue from '@/components/News/NewsForm.vue';
import LoadingVue from '@/components/Loading.vue';
import NavigationVue from '@/components/Navigation.vue';
import NewsForm from '@/components/News/NewsForm.vue';
// import { fa } from 'element-plus/es/locale';
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

  components: { NavigationVue, LoadingVue,NewsFormVue },
  name: 'About',
};
</script>
