<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'tabbar',
  data() {
    return {};
  }
};
</script>
<style scoped>
body{
  margin: 0;
  padding: 0;
}
#tab-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, .1)
}

</style>