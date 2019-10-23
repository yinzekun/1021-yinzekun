<template>
  <div>
    <!-- <el-button type="warning" @click.native="bt1" class="btn">添加</el-button> -->
    <el-button type="warning" plain class="btn" @click.native="bt1">添加</el-button>
    <div class="box1" v-if="ishow" @click.self="ishow=false">
      <div class="box2">
        <h6>添加banner</h6>
        <div>
          <span class="tupian">图片</span>
          <el-upload action="#" class="tianjian" list-type="picture-card" :auto-upload="false">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{file}">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="80%" :src="user.img" alt />
          </el-dialog>
        </div>
        <div class="dibu">
          <span class="mshu">描述</span>
          <el-input v-model="user.type" class="miaoshu" placeholder="描述"></el-input>
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
        type: "",
        img: `http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg`
      },
      ishow: false,

      dialogVisible: false,
      disabled: false
    };
  },
  methods: {
    bt1() {
      this.ishow = true;
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },

    btn() {
      this.$axios({
        url: Api.addTeacherType,
        method: "get",
        params: {
          img: `http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg`,
          type: this.user.type
        }
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
  height: 350px;
  background-color: $color3;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.btn {
  margin-left: 20px;
}

h6 {
  font-size: 20px;
  line-height: 70px;
  text-indent: 2em;
  color: $color2;
}

.tianjian {
  margin-left: 50px;
  display: inline-block;
}

.tupian {
  display: inline-block;
  font-size: 16px;
  margin-left: 50px;
  color: $color2;
}

.miaoshu {
  width: 70%;
}

.dibu {
  margin-top: 15px;
  margin-left: 50px;
}

.mshu {
  font-size: 16px;
  margin-right: 50px;
  color: $color2;
}
</style>