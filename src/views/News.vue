<template>
  <NavigationVue>
    <div v-if="loading">
      <LoadingVue></LoadingVue>
    </div>
    <div v-else>
      <NewsFormVue @refreshList="handleRefresh"></NewsFormVue>
      <ListNewsVue :newsData="data.data" @refreshDelete="handleRefreshDelete"></ListNewsVue>

      <el-pagination
        class="paginate"
        @current-change="handleCurrentchange"
        background
        layout="prev, pager, next"
        :total="Math.ceil(data.total)"
      >
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
  methods: {
    handleCurrentchange(val) {
      newsService.nextpage(val).then(response => {
        this.data = response;

        // console.log('nextpage:', this.data)
      });
    },
    handleRefreshDelete(dataRefreshDel) {
      this.data = dataRefreshDel;
    },
    handleRefresh(dataRefresh) {
      this.data = dataRefresh;
    },
  },
};
</script>
<style scoped>
.paginate {
  margin-top: 2rem;
  justify-content: center;
}
</style>
