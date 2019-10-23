<template>
  <div>
    <h1>家教管理</h1>
    <router-link to="/index/teacher/teatherbanner" active-class="select">家教banner</router-link>
    <router-link to="/index/teacher/teatcherlei" active-class="select">家教类型</router-link>
    <router-link to="/index/teacher/teatcherpai" active-class="select">家教排行</router-link>
    <router-view></router-view>
  </div>
</template>
          
<script>
import Api from "../common/js/Api";
export default {};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

h1 {
  margin-bottom: 50px;
}

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