<template>
  <swiper>
      <swiperitem>
          <img src="~assets/img/swiper/widget-activity1.png" alt="">
      </swiperitem>
      <swiperitem>
          <img src="~assets/img/swiper/widget-activity2.png" alt="">
      </swiperitem>
      <swiperitem>
          <img src="~assets/img/swiper/widget-activity3.png" alt="">
      </swiperitem>
      <swiperitem>
          <img src="~assets/img/swiper/widget-activity4.png" alt="">
      </swiperitem>
      <swiperitem>
          <img src="~assets/img/swiper/widget-activity5.png" alt="">
      </swiperitem>
  </swiper>
</template>
<script>
import swiper from "components/common/swiper/Swiper";
import swiperitem from "components/common/swiper/SwiperItem";

export default {
  components: {
    swiper,
    swiperitem
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>