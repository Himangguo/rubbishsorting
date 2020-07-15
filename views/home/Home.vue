<template>
  <div class="home">
    <navbar>
      <div slot="left"></div>
      <div slot="center">垃圾分类</div>
      <div slot="right"></div>
    </navbar>
    <h2 class="homeTitle">rubbish Sorting</h2>
    <div class="buttonEnter">
      <div class="buttonBox">
        <el-button type="primary" @click="sortPlay1">玩法一</el-button>
      </div>
      <div class="buttonBox">
        <el-button type="primary" @click="sortPlay2">玩法二</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
export default {
  name: "home",
  components: {
    navbar
  },
  data() {
    return {};
  },
  methods: {
    sortPlay1() {
      this.$router.push("/Game1");
    },
    sortPlay2() {
      this.$router.push("/Game2");
    }
  }
};
</script>
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: url("~assets/img/home/bgImage.svg") no-repeat center;
}
.homeTitle {
  width: 100vw;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 50px auto;
  font-family: Monospace;
  color: #7abcff;
  font-size: 2rem;
}
.buttonEnter {
  position: absolute;
  bottom: 100px;
  width: 100px;
  margin-left: -50px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.buttonBox {
  margin-right: 10px;
}
</style>
