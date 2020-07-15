<template>
  <div class="swiperItem" >
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
 
  }
};
</script>
<style scoped>
.swiperItem img {
  width: 100vw;
  height: 30vh;
  float: left;
}
</style>