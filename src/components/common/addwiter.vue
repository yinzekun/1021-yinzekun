<template>
  <div class="item">
    <el-button type="warning" @click.native="bt1" class="btn">添加</el-button>
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
          <span class="butt1">月销数量</span>
          <el-input class="input1" placeholder="月销数量" v-model="user.count"></el-input>
        </div>

        <div class="kuang">
          <span class="butt1">点赞数量</span>
          <el-input class="input1" placeholder="点赞数量" v-model="user.likeNum"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">浏览量</span>
          <el-input class="input1" placeholder="浏览量" v-model="user.readNum"></el-input>
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
          <el-input class="input1" placeholder="商家信息" v-model="user.des"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">电话</span>
          <el-input class="input1" placeholder="电话" v-model="user.tel"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">价格</span>
          <el-input class="input1" placeholder="价格" v-model="user.price"></el-input>
        </div>
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
        img: `http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg`,
        name: "",
        score: "",
        count: "",
        likeNum: "",
        readNum: "",
        address: "",
        len: "",
        des: "",
        tel: "",
        price: ""
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
    btn() {
      this.$axios({
        url: Api.addWater,
        method: "get",
        params: this.user
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