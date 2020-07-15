<template>
  <div class="swiper" ref="swiper">
    <div class="swiperBox" ref="swiperBox">
      <!-- 图片的插槽 -->
      <slot></slot>
    </div>
    <!-- 下方圆点 -->
    <div class="dot_box">
      <div v-for="item in imgNum" :key="item" class="dot_item" ref="dot_item"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgNum: 0 // 图片数量
    };
  },
  mounted() {
    const width = window.getComputedStyle(this.$refs.swiper, null).width; // swiper宽度
    const imgNum = document.getElementsByClassName("swiperItem").length; // 图片数量
    this.imgNum = imgNum;
    this.autoMoveLeft(parseInt(width), imgNum);
  },
  methods: {
    /**
     * 轮播方法
     * param width 每次移动的距离
     * param imgNum 图片数量
     */
    autoMoveLeft(width, imgNum) {

      var img_box = this.$refs.swiperBox;
      var time = 1;
      var timer = setInterval(() => {
        if (time <= imgNum - 1) {
          img_box.style.left = time * -width + "px";
          time = time + 1;
        } else {
          img_box.style.left = "0px";
          time = 1;
        }
        this.dotChangeActive(time, imgNum);
      }, 2000);
    },
    dotChangeActive(activeIndex, imgNum) {
      for (let i = 0; i < imgNum; i++) {
        if (i + 1 === activeIndex) {
          this.$refs.dot_item[i].style.backgroundColor = "#000";
        } else {
          this.$refs.dot_item[i].style.backgroundColor = "#fff";
        }
      }
    }
  }
};
</script>
<style scoped>
.swiper {
  position: relative;
  width: 100vw;
  height: 30vh;
  overflow: hidden;
}
.swiperBox {
  width: 600vw;
  position: relative;
  left: 0;
  transition: all 1s;
}
.dot_box {
  display: flex;
  justify-content: space-around;
  width: 100px;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}
.dot_item {
  width: 10px;
  height: 10px;
  background-color: #fff;
  box-shadow: 0 0 1px #000;
  border-radius: 50%;
  opacity: 0.6;
}
.dot_item:nth-child(1) {
  width: 10px;
  height: 10px;
  background-color: #000;
  box-shadow: 0 0 1px #000;
  border-radius: 50%;
  opacity: 0.6;
}
</style>