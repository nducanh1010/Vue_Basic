<template>
  <NavigationVue>
    <Fragment class="read-index" v-if="!continueReading"
      ><h3>Tin tức mới nhất</h3>
      <img class="shoppingMall" src="../assets/shoppingMall.png" alt="" />
      <h4>Phát Triển & Tích Hợp Hệ Thống Quản Lý Trung Tâm Thương Mại</h4>
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
      <button class="btn-continue" @click="continueReading = !continueReading">Đọc tiếp</button></Fragment
    >

    <Fragment class="continue-reading" v-else>
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
      <Fragment class="ol-order"
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
      </Fragment></Fragment
    >
    <h4 class="related-content">Danh sách liên quan</h4>
    <div class="content-container">
      <div class="single-content" v-for="item in tableData">
        <img :src="item.image" alt="" class="body" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </NavigationVue>
</template>
<script>
import NavigationVue from '@/components/Navigation.vue';
export default {
  name: 'News',
  components: { NavigationVue },
  data() {
    return {
      continueReading: false,
      tableData: [
        { image: require('@/assets/items.png'), title: 'Phát triển hệ thống Booking' },
        { image: require('@/assets/items.png'), title: 'Phát triển hệ thống Booking' },
        { image: require('@/assets/items.png'), title: 'Phát triển hệ thống Booking' },
        { image: require('@/assets/items.png'), title: 'Phát triển hệ thống Booking' },
        { image: require('@/assets/items.png'), title: 'Phát triển hệ thống Booking' },
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
</style>
