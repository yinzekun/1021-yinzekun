<template>
  <div>
    <div class="heade text-align">
      <el-button type="info" class="btn" @click="tui" plain>退出登录</el-button>
      <h3>{{num}}</h3>
    </div>
  </div>
</template>
<script>
import Api from "../../common/js/Api.js";
export default {
  data() {
    return {
      num: localStorage.getItem("user")
    };
  },
  methods: {
    tui() {
      this.$axios({
        url: Api.exit
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          localStorage.removeItem("user");
          this.$router.push("/login");
        } else {
          this.$message.error(res.data.info);
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.btn {
  float: right;
  margin: 30px 30px 0 0;
}

h3 {
  float: right;
  margin-right: 50px;
  font-size: 25px;
  margin-top: 30px;
}

.heade {
  height: 100px;
  background-color: $parend;
  overflow: hidden;
}
</style>