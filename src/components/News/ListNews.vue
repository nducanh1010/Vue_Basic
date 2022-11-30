<template>
  <el-row :gutter="20">
    <el-col :span="18" :offset="3">
      <el-row :gutter="20">
        <el-col :span="4" v-for="item in newsData" :key="item.id" class="items-stretch">
          <div
            class="rounded border border-current text-sm relative h-80 shadow-slate-600 mb-3"
            :lg="16"
            :md="12"
            :xs="24"
          >
            <span class="float-right font-semibold cursor-pointer mr-1" @click="handleDelItem(item.id)">x</span>

            <div class="text-xs text-left font-bold clear-right ml-1">{{ item.title }}</div>

            <el-image class="w-24 h-auto object-scale-down" :src="item.image" @click="showDetail(item)"></el-image>
            <div class="absolute overflow-hidden text-ellipsis mx-1 mt-1">{{ item.content }}</div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-dialog title="News information" v-model="dialogFormVisible" width="420px">
    <!-- <div>{{ detailNews.id }}</div> -->
    <span class="font-bold break-normal">{{ detailNews.title }}</span>
    <!-- <el-image style="width: 150px; height: 150px" :src="detailNews.image" fit="cover"></el-image> -->
    <img class="float-left object-scale-down h-28 w-28 mr-3" :src="detailNews.image" />
    <ul class="list-none">
      <li>ID : {{ detailNews.id }}</li>
      <li class="break-normal">{{ detailNews.content }}</li>
    </ul>

    <UpdateNewsVue :detailNews="detailNews" @refreshListFromUpdate="handleRefresh"></UpdateNewsVue>
  </el-dialog>
</template>
<script>
import UpdateNewsVue from '@/components/News/UpdateNews.vue';
import newsService from '@/services/news.services';
export default {
  name: 'ListNews',
  components: { UpdateNewsVue },
  props: {
    newsData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      detailNews: {},
      dialogFormVisible: false,
    };
  },
  methods: {
    handleRefresh(data) {
      this.detailNews = data;
      let objIndex = this.newsData.findIndex(item => item.id === data.id);
      console.log(objIndex);
      this.newsData[objIndex].id = data.id;
      this.newsData[objIndex].title = data.title;
      this.newsData[objIndex].image = data.image;
      this.newsData[objIndex].content = data.content;
    },
    showDetail(item) {
      console.log('Log data form show', this.newsData);
      this.dialogFormVisible = true;
      this.detailNews = item;
    },
    handleDelItem(item) {
      this.$confirm('Are you sure ?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          // this.tableData = this.tableData.filter(item => item.id != row.id);
          newsService.delete(item).then(res => {
            this.$message({
              type: 'success',
              message: res,
            });
            newsService.getList().then(res => {
              this.$emit("refreshDel",res)
            });
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled',
          });
        });
    },
  },
};
</script>
<style scoped lang="scss"></style>
