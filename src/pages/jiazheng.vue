<template>
  <div>
    <h1>家政管理</h1>
    <router-link to="/index/jiazheng/jiabanner" active-class="select">家政banner</router-link>
    <router-link to="/index/jiazheng/jiaman" active-class="select">人员管理</router-link>
    <router-view></router-view>
  </div>
</template>
          
<script>
import Api from "../common/js/Api";
export default {};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';


a {
  margin-left: 70px;
  color: $color2;
  font-size: 17px;
  line-height: 40px;
  padding: 20px;
}

.select {
  background-color: $parend;
}

.head_pic {
  width: 150px;
  height: 150px;
}
</style>