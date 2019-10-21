<template>
  <div class="right">
     <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.right {
  flex: 1;
  background-color: $mont;
}
</style>