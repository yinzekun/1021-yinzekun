<template>
  <div class="item">
    <v-header></v-header>
    <div class="main">
      <v-left></v-left>
      <v-right></v-right>
    </div>
  </div>
</template>
<script>
import Api from "../common/js/Api";
import vHeader from "../components/navs/header";
import vLeft from "../components/navs/left";
import vRight from '../components/navs/right'
export default {
  components: {
    vHeader,
    vLeft,
    vRight,
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.item {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex: 1;
  // background-color #00000;
}
</style>