<template>
  <div class="item">
    <el-button type="warning" plain @click.native="bt1" class="btn">查看</el-button>
    <div class="box1" v-if="ishow" @click.self="ishow=false">
      <div class="box2">
        <h6>查看家政人员</h6>
        <div class="kuang">
          <span class="butt1">姓名</span>
          <el-input class="input1" placeholder="姓名" v-model="user.name"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">年龄</span>
          <el-input class="input1" placeholder="年龄" v-model="user.age"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">电话</span>
          <el-input class="input1" placeholder="电话" v-model="user.tel"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">资格认证</span>
          <div class="zhengshu">
            <el-checkbox-group v-model="user.qualification">
              <el-checkbox label="身份证"></el-checkbox>
              <el-checkbox label="学位证"></el-checkbox>
              <el-checkbox label="健康证"></el-checkbox>
              <el-checkbox label="上岗证"></el-checkbox>
              <el-checkbox label="母婴护理师证"></el-checkbox>
              <el-checkbox label="催乳师证"></el-checkbox>
              <el-checkbox label="产后恢复师证"></el-checkbox>
              <el-checkbox label="助理家政管理师"></el-checkbox>
              <el-checkbox label="家政管理师"></el-checkbox>
              <el-checkbox label="高级家政管理师"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="kuang">
          <span class="butt1">服务项目</span>
          <div class="zhengshu">
            <el-checkbox-group v-model="user.type">
              <el-checkbox label="保姆"></el-checkbox>
              <el-checkbox label="月嫂"></el-checkbox>
              <el-checkbox label="钟点工"></el-checkbox>
              <el-checkbox label="保洁"></el-checkbox>
              <el-checkbox label="家电清洗"></el-checkbox>
              <el-checkbox label="家具保养"></el-checkbox>
              <el-checkbox label="新居开荒"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="kuang">
          <span class="butt1">学历</span>
          <el-select class="input1" v-model="user.edu" placeholder="请选择">
            <el-option v-for="item in user.option" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </div>
        <div class="kuang">
          <span class="butt1">工作年限</span>
          <el-input class="input1" placeholder="工作年限" v-model="user.year"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">级别</span>
          <el-input class="input1" placeholder="级别" v-model="user.vNum"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">价格</span>
          <el-input class="input1" placeholder="价格" v-model="user.price"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">城市</span>
          <el-input class="input1" placeholder="城市" v-model="user.city"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">经验</span>
          <el-input class="input1" placeholder="经验" v-model="user.experience"></el-input>
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
          <span class="butt1">距离</span>
          <el-input class="input1" placeholder="距离" v-model="user.len"></el-input>
        </div>
        <div class="kuang">
          <span class="butt1">自我评价</span>
          <el-input class="input1" placeholder="自我评价" v-model="user.info"></el-input>
        </div>
        <div>
          <span class="tupian">免冠照片</span>
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
      ishow: false,
      dialogVisible: false,
      disabled: false,
      user: {
        type: [],
        qualification: [],
        img: "",
        name: "",
        age: "",
        year: "",
        vNum: "",
        price: "",
        city: "",
        experience: "",
        readNum: "",
        likeNum: "",
        len: "",
        tel: "",
        info: "",
        option: ["小学", "初中", "高中", "本科", "研究生", "博士"]
      },

      value: ""
    };
  },

  methods: {
    bt1() {
      this.ishow = true;
      this.$axios({
        url: Api.findHomeWorker,
        method: "get",
        params: {
          id: this.id
        }
      }).then(res => {
        this.user = res.data.data[0];
        this.user.type = JSON.parse(this.user.type);
        this.user.qualification = JSON.parse(this.user.qualification);
      });
    },
    btn() {
      this.$axios({
        url: Api.updateHomeWorker,
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
  height: 1300px;
  background-color: $color3;
  position: absolute;
  left: 0;
  right: 0;
  top: 500px;
  bottom: 0;
  margin: auto;
  overflow: hidden;
}

.zhengshu {
  display: inline-block;
  margin-left: 130px;
}

.tupian {
  display: inline-block;
  font-size: 16px;
  margin-left: 50px;
  color: $color2;
}

.btn {
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