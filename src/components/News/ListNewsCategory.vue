<template>
  <NavigationVue>
    <div v-if="loading">
      <LoadingVue></LoadingVue>
    </div>
    <div v-else>
      <el-row :gutter="10">
        <el-col :span="18" :offset="3"
          ><div class="grid-content bg-purple">
            <el-row :gutter="10">
              <el-col :span="4" v-for="item in dataList.data" :key="item.id">
                <div class="  rounded  border border-current text-sm relative h-80 shadow-slate-600   " @click="showDetail(item)">
              <span class="delete float-right font-bold cursor-pointer mr-1" @click="handleDelItem(item.id)">x</span>

              <div class="title font-bold clear-right ml-1">{{ item.title }}</div>

              <el-image class="w-28 h-28 object-scale-down" :src="item.image" ></el-image>
              <div class="absolute overflow-hidden text-ellipsis mx-1 mt-1">{{ item.content }}</div>
            </div>
              </el-col>
            </el-row>
          </div></el-col
        >
      </el-row>
      <el-pagination :page-size="5" :pager-count="5" layout="prev, pager, next" :total="Math.ceil(dataList.data.length/5) ">
      </el-pagination>
    </div>
  </NavigationVue>
</template>
<script>
import newsService from '@/services/news.services';
import NavigationVue from '../Navigation.vue';
import LoadingVue from '../Loading.vue';
export default {
  name: 'listNewCategory',
  components: { NavigationVue, LoadingVue },
  created() {
    this.loading=true;
    newsService.getListNewsCategory(this.$route.params.id).then(res => {
      this.dataList = res;
      this.loading=false
      console.log(this.dataList.data.length);
    })
    .catch(()=>{
      this.loading=false
    })
  },
  data() {
    return {
      loading:false,
      dataList: [],
    };
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
            });
            newsService.getList().then(res => {
              this.newsData = res;
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

  .body {
    margin-bottom: 20px;
    height: 177px;
    width: 161px;
  }
}

.img {
  width: 100%;
  height: auto;
}
// }
</style>
