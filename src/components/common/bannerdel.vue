<template>
  <div class="item">
    <el-button type="danger" @click="ishow=true">删除</el-button>
    <div class="box1" v-if="ishow" @click.self="ishow=false">
      <div class="box2">
        <h3>提示</h3>
        <h6>您确定要删除吗？</h6>
        <div class="fr box3">
          <el-button type="primary" @click="ishow=false" plain>取消</el-button>
          <el-button type="danger" @click="bty">删除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../../common/js/Api.js";
export default {
  props: ["id"],
  data() {
    return {
      ishow: false
    };
  },
  methods: {
    bty() {
      this.ishow = false;
      this.$axios({
        url: Api.delBanner,
        method: "get",
        params: {
          id: this.id
        }
      }).then(res => {
        if (res.data.isok) {
          this.ishow = false;
          this.$emit("getc1", res.data.info);
        } else {
          alert(res.data.info);
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.item {
  display: inline-block;
}

h3 {
  line-height: 40px;
  text-indent: 2em;
}

h6 {
  line-height: 50px;
  text-indent: 2em;
}

.box1 {
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
}

.box2 {
  width: 500px;
  height: 150px;
  background-color: $color3;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.box3 {
  margin-right: 30px;
}
</style>
