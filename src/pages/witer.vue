<template>
    <div>
         <h1>水站管理</h1>
         <router-link to="/index/witer/witerzhan" active-class='select'>水站</router-link>
         <router-link to="/index/witer/witerguan" active-class='select'>水站评论</router-link>
       <router-view></router-view>
      
    </div>
</template>
<script>
import Api from '../common/js/Api'
export default {
    
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
h1 {
  margin-bottom: 20px;
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
</style>