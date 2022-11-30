<template>
  <div class="dplay_carousel">
    <el-carousel type="card" height="200px" :autoplay="false">
      <el-carousel-item trigger="click" v-for="item in data" :key="item.id" @click="() => getCarouselID(item.id)">
        <!-- <h3 class="medium">{{ item.image }}</h3> -->

        <span>{{ item.content }}</span>
        <div style="position: relative">
          <img :src="item.image" class="body" alt="" />
          <span style="z-index: 999; position: absolute; top: 80%; margin: 0" class="title">{{ item.title }}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-dialog title="News information" v-model="dialogFormVisible" width="420px">
    <span class="font-bold break-normal ">{{ detailNews.title }}</span>
    <img class="float-left object-scale-down h-28 w-28 mr-3" :src="detailNews.image" />
    <ul class="list-none">
      <li>ID : {{ detailNews.id }}</li>
      <li class="break-normal">{{ detailNews.content }}</li>
    </ul>
    
  </el-dialog>
  </div>
</template>
<script>
import newsService from '@/services/news.services';

export default {
  name: 'NewsCart',
 
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
     loading:false,
      detailNews: {},
      dialogFormVisible: false,
    };
  },
  methods: {
    getCarouselID(id) {
      newsService.detail(id).then(res=>this.detailNews=res)

      this.dialogFormVisible = !this.dialogFormVisible;
    },
  },
};
</script>
<style scoped lang="scss">
.dplay_carousel {
  width: 40%;
  margin: auto;
  span {
    

    font-size: 14px;
  }
  .title {
    margin-left: 1rem;

    font-weight: lighter;
    font-size: 14px;
  }
  .body {
    display: block;
    object-fit: scale-down;
    height: 160px;
    width: 103px;
    margin-left: auto;
    margin-right: auto;
  }
  .el-carousel__item h3 {
    color: #ffffff;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #ffffff;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #ffffff;
  }
}
</style>
