<template>
  <div class="left">
    <router-link to="/index/home" active-class='select'>管理员管理</router-link>
    <!-- <router-link to="/index/man" active-class='select'
     v-if="isAdmin=='0'||isAdmin=='1'"
    >用户管理</router-link>
    <router-link to="/index/tongzhi" active-class='select'>通知管理</router-link>
     <router-link to="/index/shebei" active-class='select'>设备</router-link>  -->
    
     
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAdmin:sessionStorage.getItem('isAdmin')
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.left {
  width: 150px;
  background-color: $font;
  a{
    display block;
    font-size 17px;
    line-height 60px;
    text-align center;
    color $color3
  }
}
.select{
  background-color $color2
}
</style>