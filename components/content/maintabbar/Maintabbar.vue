<template>
    <div class="maintabbar">
        <tabbar>
            <tabbaritem path="/home">
                <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt="">
                <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active" alt="">
                <div slot="item-text">垃圾</div>
            </tabbaritem>
            <tabbaritem path="/user">
                <img src="~assets/img/tabbar/user.svg" slot="item-icon" alt="">
                <img src="~assets/img/tabbar/user_active.svg" slot="item-icon-active" alt="">
                <div slot="item-text">设置</div>
            </tabbaritem>
        </tabbar>
    </div>
</template>
<script>
import tabbar from "components/common/tabbar/tabbar";
import tabbaritem from "components/common/tabbar/tabbaritem";
export default {
  components: {
    tabbar,
    tabbaritem
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>