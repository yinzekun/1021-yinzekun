<template>
  <div>
    <div class="box1">
      <div class="box3">
        <h1>登录</h1>
        <div>
          <el-select class="input" v-model="user.type" placeholder="请输入角色">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="wenzi">
          <el-input class="input" type="text" placeholder="请输入您的用户名" v-model="user.name"></el-input>
        </div>
        <div class="wenzi">
          <el-input class="input" placeholder="请输入您的密码" v-model="user.pass" show-password></el-input>
        </div>
        <div class="text-align">
          <el-button type="primary" class="but" @click="btn">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Api from "../common/js/Api";
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        }
      ],
      value: "",
      user: {
        type: "",
        name: "",
        pass: ""
      }
    };
  },
  methods: {
    btn() {
      this.$axios({
        url: Api.login,
        method: "post",
        data: this.user
      }).then(res => {
        if (res.data.isok) {
          localStorage.setItem('user',this.user.name);
          sessionStorage.setItem('isAdmin',res.data.type);
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.$router.push("/index");
        } else {
          this.$message.error(res.data.info);
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.box1 {
  width: 100vw;
  height: 100vh;
  background-color: $parend;
}

.box3 {
  width: 500px;
  height: 300px;
  background-color: $color3;
  border-radius: 12px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 25px;
    line-height: 45px;
    color: $color2;
  }
}

.but {
  margin-top: 10px;
}

.wenzi {
  margin-top: 20px;
}
</style>
