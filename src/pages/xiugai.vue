<template>
  <div>
    <h1>{{$route.name}}</h1>

    <div class="kuang">
      <span class="butt1">名称</span>
      <el-input class="input1" placeholder="名称" v-model="user.name" :disabled="true"></el-input>
    </div>
    <div class="kuang">
      <span class="butt1">原始密码</span>
      <el-input class="input1" placeholder="原始密码" show-password v-model="user.oldpass"></el-input>
    </div>
    <div class="kuang">
      <span class="butt1">新密码</span>

      <el-input class="input1" placeholder="新密码" show-password v-model="user.newpass"></el-input>
    </div>
    <div class="kuang">
      <span class="butt1">确认密码</span>
      <el-input class="input1" placeholder="确认密码" show-password v-model="user.input"></el-input>
    </div>
    <div class="text-align ent">
      <el-button type="warning" plain @click="xiugai">修改</el-button>
    </div>
  </div>
</template>
<script>
import Api from "../common/js/Api";
export default {
  data() {
    return {
      user: {
        name: "",
        oldpass: "",
        newpass: "",
        input: ""
      }
    };
  },
  methods: {
    xiugai() {
      this.$axios({
        url: Api.changePassManage,
        method: "post",
        data: {
          name: this.user.name,
          oldpass: this.user.oldpass,
          newpass: this.user.newpass
        }
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.$router.push("/login");
        } else {
          this.$message.error(res.data.info);
        }
      });
    }
  },
  mounted() {
    this.user.name = localStorage.getItem("user");
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.butt1 {
  font-size: 16px;
  margin-left: 100px;
  color: $color2;
}

.input1 {
  float: right;
  width: 70%;
  margin-right: 100px;
}

.kuang {
  margin-top: 40px;
  overflow: hidden;
}

.ent {
  margin-top: 20px;
}
</style>