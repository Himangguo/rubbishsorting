<template>
  <div class="tab-bar-item" @click="changeActiveItem">
    <div v-if="!item_active">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbaritem",
  props: {
    path: "",
    activeColor: {
      default: "red"
    }
  },
  data() {
    return {};
  },
  computed: {
    item_active() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.item_active ? { color: this.activeColor } : {};
    }
  },
  methods: {
    changeActiveItem() {
      this.$router.replace(this.path);
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>