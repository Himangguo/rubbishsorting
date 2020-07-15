<template>
  <div class="user">
    <navbar>
      <div slot="left"></div>
      <div slot="center">游戏设置</div>
      <div slot="right"></div>
    </navbar>
    游戏设置界面
  </div>
</template>
<script>
import navbar from "components/common/navbar/NavBar";
export default {
  components: {
    navbar
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>