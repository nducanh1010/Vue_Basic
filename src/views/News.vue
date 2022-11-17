<template>
  <NavigationVue>
    <div v-if="loading">
      <LoadingVue></LoadingVue>
    </div>
    <div v-else>
      <NewsFormVue></NewsFormVue>
      <ListNewsVue :newsData="data.data"></ListNewsVue>
      
      <el-pagination
      class="paginate"
  background
  layout="prev, pager, next"
  :total="data.total*10">
</el-pagination>
    </div>
  </NavigationVue>
</template>
<script>
import LoadingVue from '@/components/Loading.vue';
import NavigationVue from '@/components/Navigation.vue';
import newsService from '@/services/news.services';
import NewsFormVue from '@/components/News/NewsForm.vue';
import ListNewsVue from '@/components/News/ListNews.vue';

export default {
  name: 'News',
  components: { NavigationVue, NewsFormVue, LoadingVue, ListNewsVue },

  created() {
    this.loading = true;
    newsService
      .getList()
      .then(res => {
        this.data = res;
        this.loading = false;
        console.log(this.data.total);
      })
      .catch(() => {
        this.loading = false;
      });
  },

  data() {
    return {
      loading: false,
      data: [],
      dialog: false,
    };
  },
};
</script>
<style scoped >
.paginate{
  justify-content: center;
}
</style>
