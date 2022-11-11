<template>
  <NavigationVue>
    <!-- <div v-for="item in newsData" :key="item.id">
      <div :src="item.image"></div>
      <img :src="item.image" alt="" />
      <div>{{ item.content }}</div>
      <div>{{ item.title }}</div>
    </div> -->
    <div class="content-container">
      <div class="single-content" v-for="item in newsData">
        <img :src="item.image" alt="" class="body" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </NavigationVue>
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
import newsService from '@/services/news.services';

export default {
  name: 'News',
  components: { NavigationVue },
  props: {
    data:{
      type:Object,
      default:()=>{}
    }
  },
  created() {
    newsService.getList().then(res => {
      this.newsData = res;
      console.log(res);
    });
  },
  data() {
    return {
      newsData: [],
    };
  },
};
</script>
<style scoped lang="scss">
.content-container {
  clear: left;
  display: inline-block;

  .single-content {
    float: left;
    margin-right: 10px;

    .body {
      object-fit: scale-down;
      width: 291px;
      height: 164px;
    }
    .title {
      font-weight: bold;
      text-align: center;
      padding: 10px 20px;
    }
  }
}
</style>
