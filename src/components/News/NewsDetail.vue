<template>
  <el-dialog title="News information" v-model="dialogFormVisible">
    <div class="title">{{ detailNews.title }}</div>
    <el-image style="width: 150px; height: 150px" :src="detailNews.image" fit="cover"></el-image>
    <div>{{ detailNews.content }} </div>
  </el-dialog>
</template>
<script>
import newsService from '@/services/news.services';

export default {
  name: 'newsDetail',
  created() {
    newsService.detail(this.detailNewsID).then(res => (this.detailNews = res));
    this.dialogFormVisible = true;
  },
  
  data() {
    return {
      detailNews: {},
      dialogFormVisible: false,
    };
  },
};
</script>
<style scoped lang="scss">
.single-news {
  position: relative;
  border: 1px solid lightgrey;
  height: 333px;
  max-width: 200px;
  box-shadow: 1px 1px lightgray;
  border-radius: 3px;
  padding: 10px;
  margin: 0 10px;
  text-align: right;
  .delete {
    font-weight: bold;
    cursor: pointer;
    padding-bottom: 1px;
    position: absolute;
    top: 0;
  }
  .title {
    font-weight: 600;
    font-size: 18px;
    text-align: left;
  }
}
</style>
