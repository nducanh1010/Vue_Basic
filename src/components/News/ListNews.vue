<template>
  <el-row :gutter="20">
    <el-col :span="18" :offset="3">
      <div class="grid-content bg-purple">
        <el-row :gutter="20">
          <el-col :span="4" v-for="item in newsData" :key="item.id">
            <div class="grid-content bg-purple single-news">
              <span class="delete" @click="handleDelItem(item.id)">x</span>

              <div class="title">{{ item.title }}</div>

              <el-image style="width: 150px; height: 150px" :src="item.image" fit="cover"></el-image>
              <div class="content">{{ item.content }}</div>
              <!-- <el-button size="mini" type="primary" round class="btn-edit">Edit</el-button> -->
            </div>
          </el-col>
        </el-row>
      </div></el-col
    >
  </el-row>
</template>
<script>
import newsService from '@/services/news.services';
export default {
  name: 'ListNews',
  props: {
    newsData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
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
            }) 
            newsService.getList().then(res => {
              this.newsData = res;
            })          
           ;
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
    font-size: 16px;
    text-align: left;
  }
  .content {
    margin-top: 3px;
    font-size: 14px;
  }
  .btn-edit {
  }
}

.img {
  width: 100%;
  height: auto;
}
</style>
