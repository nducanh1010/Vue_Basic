<template>
  <div class="dplay_carousel">
    <el-carousel type="card" height="200px" :autoplay="false">
      <el-carousel-item v-for="item in data" :key="item">
        <!-- <h3 class="medium">{{ item.image }}</h3> -->
        <span>{{item.content}}</span>
        <div style="position: relative;">
            <img :src="item.image" class="body" alt="" />
            <span style="z-index: 999;position: absolute; top: 80%; margin: 0;" class="title">{{ item.title }}</span>
        </div>
        
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'NewsCart',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped lang="scss">
.dplay_carousel {
  width: 60%;
  margin: auto;
  span {
    background-color: RGB(241, 241, 241);
    margin-left: 8px;
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
    height: 177px;
    width: 161px;
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
