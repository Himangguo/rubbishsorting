<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- tabbar -->
    <maintabbar />
  </div>
</template>
<script>
import maintabbar from "components/content/maintabbar/Maintabbar";
export default {
  name: "app",
  components: {
    maintabbar
  },

};
</script>
<style>
/* 引入格式化样式 */
@import "~assets/css/base.css";
</style>
