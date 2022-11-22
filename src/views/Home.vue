<template>
  <NavigationVue>
    <div class="read-index" v-if="!continueReading"
      ><h3>Tin tức mới nhất</h3>
      <img class="shoppingMall" src="../assets/shoppingMall.png" alt="" />
      <h4 class="text-green-500">Phát Triển & Tích Hợp Hệ Thống Quản Lý Trung Tâm Thương Mại</h4>
      <ul>
        <li>
          Mất nhiều thời gian để tạo tài liệu so sánh đơn giá xây dựng trung tâm thương mại và lưu trữ dữ liệu sang
          excel trong môi trường cục bộ.
        </li>
        <li>
          Tất cả dữ liệu báo giá đều được phân phối và quản lý trên server dưới dạng file excel nên rất khó để trích
          xuất dữ liệu.
        </li>
        <li>
          Khách hàng muốn hệ thống hóa toàn bộ số liệu báo giá và đánh giá các báo giá này từ nhà cung cấp xây dựng qua
          1 hệ thống.
        </li>
      </ul>
      <button class="btn-continue" @click="continueReading = !continueReading">Đọc tiếp</button></div
    >

    <div class="continue-reading" v-else>
      <h4>Phát Triển & Tích Hợp Hệ Thống Quản Lý Trung Tâm Thương Mại</h4>
      <img class="shoppingMall" src="../assets/shoppingMall.png" alt="" />

      <ul>
        <li>
          Mất nhiều thời gian để tạo tài liệu so sánh đơn giá xây dựng trung tâm thương mại và lưu trữ dữ liệu sang
          excel trong môi trường cục bộ.
        </li>
        <li>
          Tất cả dữ liệu báo giá đều được phân phối và quản lý trên server dưới dạng file excel nên rất khó để trích
          xuất dữ liệu.
        </li>
        <li>
          Khách hàng muốn hệ thống hóa toàn bộ số liệu báo giá và đánh giá các báo giá này từ nhà cung cấp xây dựng qua
          1 hệ thống.
        </li>
      </ul>
      <div class="ol-order"
        ><ol start="1">
          <li>
            Tạo ra một môi trường làm việc chuyên nghiệp, năng động Con người là trung tâm trong chính sách phát triển
            của CodLUCK. Chúng tôi hướng đến việc xây dựng một môi trường trẻ trung, cởi mở – nơi mà mọi thành viên đều
            có thể phát huy hết khả năng của mình, tô điểm cho công ty trở nên đa màu sắc nhưng vẫn giữ được tinh thần
            đoàn kết.
          </li>
          <li>
            Mang lại sự hài lòng tuyệt đối cho Khách Hàng Khách hàng của CodLUCK sẽ được cung cấp những dịch vụ tốt nhất
            và sự tư vấn nhiệt tình, phù hợp nhất. Chúng tôi sẽ biến lựa chọn của Khách hàng thành lựa chọn đúng đắn hơn
            bao giờ hết.
          </li>
          <li>
            Đóng góp cho xã hội Thế giới đang chuyển mình trong cuộc cách mạng công nghiệp 4.0. Chuyển đổi kĩ thuật số
            (DX) đang diễn ra nhanh chóng mặt trên nhiều lĩnh vực. Sứ mệnh của chúng tôi là đóng góp vào quá trình
            chuyển đổi kỹ thuật số của Việt Nam và của thế giới, bằng cách cung cấp các giải pháp DX phù hợp cho doanh
            nghiệp, cho chính phủ và xã hội.
          </li>
        </ol>
        <button class="btn-continue" @click="continueReading = !continueReading">Quay lại</button>
      </div></div
    >
    <h4 class="related-content">Danh sách liên quan</h4>

    <NewsCartVue :data="tableData"> </NewsCartVue>
  </NavigationVue>
</template>
<script>
import NewsCartVue from '@/components/News/NewsCart.vue';
import NavigationVue from '@/components/Navigation.vue';
import newsService from '@/services/news.services';

export default {
  name: 'Home',
  components: { NavigationVue, NewsCartVue },
  // components: { NavigationVue },
  created() {
    
    newsService.getList().then(res => {
    
      this.tableData = [...this.tableData, ...res.data];
    });
  },

  data() {
    return {
      loading:false,
      continueReading: false,
      tableData: [
       
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.read-index {
  ul {
    list-style-type: none;
    list-style-position: inside;
    text-align: left;
    li::before {
      content: '- ';
    }
    .ol-oder {
      list-style-type: decimal;
    }
  }
  h3 {
    margin: 90px auto 30px;
    font-size: 40px;
    font-weight: bold;
  }
  h4 {
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }
  .shoppingMall {
    overflow: auto;
    float: left;
    margin-left: 5rem;
    margin-right: 1rem;
    height: 342px;
    width: 516px;
    object-fit: cover;
  }
  .btn-continue {
    width: 128px;
    height: 35px;
    border-radius: 10px;
    text-align: center;
    background-color: rgb(24, 207, 79);
    border: none;
    color: white;
    float: left;
    margin-left: 1rem;
  }
}
.continue-reading {
  ul {
    list-style-type: none;
    list-style-position: inside;
    text-align: left;
    li::before {
      content: '- ';
    }
    .ol-oder {
      ol {
        list-style-type: decimal;
        li {
          // text-align: left !important;
          margin-bottom: 5px;
        }
      }
    }
  }
  h3 {
    margin: 90px auto 30px;
    font-size: 40px;
    font-weight: bold;
  }
  h4 {
    margin-left: 2.5rem;
    margin-bottom: 1.5rem;
    text-align: left;
    font-size: 23px;
  }
  .shoppingMall {
    text-align: center;
    height: 285px;
    width: 479px;
    object-fit: cover;
    display: block;
    margin: auto;
  }
  .btn-continue {
    width: 128px;
    height: 35px;
    border-radius: 10px;
    text-align: center;
    background-color: rgb(24, 207, 79);
    border: none;
    color: white;
    float: left;
    margin-left: 1rem;
  }
}
.related-content {
  margin-top: 12rem;
  clear: left;
  text-align: center;
  font-weight: bold;
  font-size: 1.75rem;
}
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
.dplay_carousel {
  width: 60%;
  margin: auto;
  .title {
    font-weight: lighter;
    font-size: 14px;
  }
  .body {
    display: block;
    object-fit: scale-down;
    height: 179px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
