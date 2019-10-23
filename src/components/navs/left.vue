<template>
  <div class="left">
    <router-link to="/index/home" active-class="select" v-if="isAdmin=='0'">管理员管理</router-link>
    <router-link to="/index/banner" active-class="select" v-if="isAdmin=='1'" >banner管理</router-link>
    <router-link to="/index/teacher" active-class="select" v-if="isAdmin=='1'" >家教管理</router-link>
    <router-link to="/index/witer" active-class="select" v-if="isAdmin=='1'" >水站管理</router-link>
    <router-link to="/index/weixiu" active-class="select" v-if="isAdmin=='1'" >维修管理</router-link>
    <router-link to="/index/jiazheng" active-class="select" v-if="isAdmin=='1'" >家政管理</router-link>
    <router-link to="/index/xiugai" active-class="select" v-if="isAdmin=='1'" >修改密码</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAdmin: sessionStorage.getItem("isAdmin")
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.left {
  width: 150px;
  background-color: $font;

  a {
    display: block;
    font-size: 17px;
    line-height: 60px;
    text-align: center;
    color: $color3;
  }
}

.select {
  background-color: $color2;
}
</style>