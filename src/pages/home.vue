<template>
  <div>
    <h1>{{$route.name}}</h1>

    <v-add @getc="penter"></v-add>

    <el-table :data="d" class="table" border style="width: 80%" height="250">
      <el-table-column type="index" width="180" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="200"></el-table-column>
      <el-table-column prop="des" label="属性" width="200"></el-table-column>
      <!-- <el-table-column prop="time" label="时间" width="250"></el-table-column> -->
      <el-table-column label="时间" width="250" >
        <template slot-scope="scope">{{scope.row.time|transTime}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <v-del></v-del>
        <template slot-scope="scope">
          <v-xiugai :id="scope.row.id" @getc2="penter2"></v-xiugai>
          <v-del :id="scope.row.id" @getc1="penter1"></v-del>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Api from "../common/js/Api";
import vAdd from "../components/common/add";
export default {
  mounted() {
    this.posiy();
  },
  data() {
    return {
      d: [""]
    };
  },
  components: {
    vAdd
  },
  methods: {
    penter(e) {
      this.$message(e);
      this.posiy();
    },
    penter1(e) {
      this.$message(e);
      this.posiy();
    },
    penter2(e) {
      this.$message(e);
      this.posiy();
    },
    posiy() {
      this.$axios({
        url: Api.find,
        method: "post"
      }).then(res => {
        this.d = res.data.data;
      });
    },
    look() {
      console.log(sessionStorage.getItem("ishow"));

      sessionStorage.setItem("id", 0);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.btn {
  margin-left: 2em;
}
</style>