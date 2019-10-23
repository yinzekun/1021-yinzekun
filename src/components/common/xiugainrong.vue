<template>
  <div class="item">
    <el-button type="warning" @click.native="bt1" class="btn">查看</el-button>
    <div class="box1" v-if="ishow" @click.self="ishow=false">
      <div class="box2">
        <h6>添加水站</h6>
        <div class="kuang">
          <span class="butt1">名称</span>
          <el-input class="input1" placeholder="名称" v-model="user.name"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">评分</span>
          <el-input class="input1" placeholder="评分" v-model="user.score"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">类型</span>
          <el-input class="input1" placeholder="类型" v-model="user.type"></el-input>
        </div>

        <div class="kuang">
          <span class="butt1">点赞数量</span>
          <el-input class="input1" placeholder="点赞数量" v-model="user.likeNum"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">关注人数</span>
          <el-input class="input1" placeholder="关注人数" v-model="user.readNum"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">商家地址</span>
          <el-input class="input1" placeholder="商家地址" v-model="user.address"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">距离</span>
          <el-input class="input1" placeholder="距离" v-model="user.len"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">商家信息</span>
          <el-input class="input1" placeholder="商家信息" v-model="user.info"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">电话</span>
          <el-input class="input1" placeholder="电话" v-model="user.tel"></el-input>
        </div>
        <div class="wenben">
          <el-button @click.native="ishow=false">取消</el-button>
          <el-button type="success" @click="btn">修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../../common/js/Api";
export default {
  props: ["id"],

  data() {
    return {
      user: {
        score: "",
        type: "",
        likeNum: "",
        readNum: "",
        address: "",
        len: "",
        info: "",
        tel: ""
      },
      ishow: false,
      dialogVisible: false,
      disabled: false
    };
  },
  mounted() {},
  methods: {
    bt1() {
      this.ishow = true;
      this.$axios({
        url: Api.findRepair,
        method: "get",
        params: {
          id: this.id
        }
      }).then(res => {
        this.user = res.data.data[0];
      });
    },
    btn() {
      this.$axios({
        url: Api.updateRepair,
        method: "get",
        params: this.user,
      }).then(res => {
        if (res.data.isok) {
          alert(res.data.info);
          this.ishow = false;
          this.$emit("getc2", res.data.info);
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

.wenben {
  margin-top: 25px;
  float: right;
  margin-right: 30px;
}

.box1 {
  width: 100vw;
  height: 800px;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 10;
  overflow: auto;
}

.box2 {
  width: 800px;
  height: 1000px;
  background-color: $color3;
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
  bottom: 0;
  margin: auto;
  overflow: hidden;
}

.tupian {
  display: inline-block;
  font-size: 16px;
  margin-left: 50px;
  color: $color2;
}

.btn {
  margin-left: -50px;
  margin-top: -15px;
}

.tianjian {
  margin-left: 80px;
  font-size: 16px;
  color: $color2;
  display: inline-block;
}

h6 {
  font-size: 20px;
  line-height: 70px;
  text-indent: 2em;
  color: $color2;
}

.butt1 {
  font-size: 16px;
  margin-left: 30px;
  margin-right: 30px;
  color: $color2;
}

.kuang {
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
}

.input1 {
  float: right;
  width: 70%;
  margin-right: 70px;
}
</style>