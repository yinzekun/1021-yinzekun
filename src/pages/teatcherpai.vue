<template>
  <div class="item">
    <!-- <el-button type="warning" class="btn" plain>添加</el-button> -->
    <v-paihang  @getc2="penter2"></v-paihang>
    <!-- <v-teatcheradd1 @getc2="penter2"></v-teatcheradd1> -->
    <el-table :data="tableData" class="table" border style="width: 90%" height="220">
      <el-table-column type="index" width="150" label="序号"></el-table-column>
      <el-table-column label="图片" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="head_pic" />
        </template>
      </el-table-column>
      <el-table-column prop="num" label="报名人数" width="250"></el-table-column>
      <el-table-column label="授课机构" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.teacherImg" class="head_pic" />
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <v-thatcher :id="scope.row.id" @getc1="del"></v-thatcher>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Api from "../common/js/Api";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    del(e) {
      this.$axios({
        url: Api.delTeacherTop,
        method: "get",
        params: {
          id: e
        }
      }).then(res => {
        if (res.data.isok) {
          this.$message(res.data.info);
          this.find();
        } else {
          alert(res.data.info);
        }
      });
    },
    find() {
      this.$axios({
        url: Api.teacherTop,
        method: "get"
      }).then(res => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    penter2(e) {
      this.$message(e);
      this.find();
    }
  },
  mounted() {
    this.find();
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.head_pic {
  width: 150px;
  height: 150px;
}

.item {
  padding-top: 30px;
  padding-left: 70px;
}

.btn {
  margin-left: 20px;
}

.table {
  margin-left: 0px;
}
</style>