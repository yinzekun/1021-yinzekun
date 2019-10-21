<template>
  <div class="item">
    <el-button type="warning" @click.native="bt1" class="btn">添加</el-button>
    <div class="box1" v-if="ishow">
      <div class="box2">
        <h6>添加 | 修改管理员</h6>
        <div class="kuang">
          <span class="butt1">账号</span>
          <el-input class="input1" v-model="user.name" placeholder="请输入账号"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">密码</span>
          <el-input class="input1" placeholder="请输入密码" v-model="user.pass" show-password></el-input>
        </div>
        <div>
          <span class="butt2">确认密码</span>
          <el-input class="input1" placeholder="请输入确认密码" v-model="user.pass" show-password></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">描述</span>
          <el-input class="input1" v-model="user.des" placeholder="描述"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">时间</span>
          <el-date-picker class="input1" v-model="user.time" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <div class="wenben">
          <el-button @click.native="ishow=false">取消</el-button>
          <el-button type="success" @click="btn">添加</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../../common/js/Api";
export default {
  props: [""],
  data() {
    return {
      user: {
        name: "",
        pass: "",
        time: "",
        des: ""
      },
      ishow: false
    };
  },
  methods: {
    bt1() {
      sessionStorage.setItem("id", 1);
      this.ishow = true;
    },
    btn() {
      this.$axios({
        url: Api.add,
        method: "post",
        data: this.user
      }).then(res => {
        // console.log(res.data.info);
        if (res.data.isok) {
          alert(res.data.info);
          this.ishow = false;
          this.$emit("getc", res.data.info);
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

// .item {
// display: inline-block;
// }
.wenben {
  margin-top: 25px;
  float: right;
  margin-right: 30px;
}

.box1 {
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 10;
}

.box2 {
  width: 800px;
  height: 500px;
  background-color: $color3;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.btn {
  margin-left: 2em;
}

h6 {
  font-size: 20px;
  line-height: 70px;
  text-indent: 2em;
  color: $color2;
}

.butt1 {
  font-size: 16px;
  margin-left: 60px;
  margin-right: 30px;
  color: $color2;
}

.kuang {
  margin-top: 20px;
  margin-bottom: 20px;
}

.input1 {
  width: 60%;
}

.butt2 {
  font-size: 16px;
  line-height: 20px;
  margin-left: 30px;
  margin-right: 30px;
  color: $color2;
}
</style>