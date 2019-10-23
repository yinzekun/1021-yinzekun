<template>
  <div class="row">
    <div class="item">
      <!-- <el-select v-model="value" placeholder="请选择" class="nav">
        <el-option label="全部" value></el-option>
        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>-->
      <el-select v-model="value" placeholder="请选择" class="nav">
        <el-option label="全部" value></el-option>
        <el-option v-for="item in waters" :key="item.value" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </div>
    <el-table :data="tableData" class="table" border style="width: 90%" height="280">
      <el-table-column type="index" width="150" label="序号"></el-table-column>
      <!-- <el-table-column prop="name" label="用户名称" width="250"></el-table-column>
      <el-table-column prop="content" label="评论内容" width="250"></el-table-column>
      <el-table-column prop="time" label="时间" width="250"></el-table-column>-->
      <el-table-column label="用户名称" width="180">
        <template slot-scope="scope">{{scope.row.name}}</template>
      </el-table-column>
      <el-table-column label="评论内容" width="180">
        <template slot-scope="scope">{{scope.row.content}}</template>
      </el-table-column>
      <el-table-column label="时间">
        <template slot-scope="scope">{{scope.row.time}}</template>
      </el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <v-thatcher :id="scope.row.id" @getc1="del"></v-thatcher>
          <!-- <v-xiuwiter :id="scope.row.id" @getc2="penter2"></v-xiuwiter> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Api from "../common/js/Api";
export default {
  mounted() {
    this.getComment({});
    this.$axios({
      url: Api.findWater
    }).then(res => {
      this.waters = res.data.data;
    });
  },
  data() {
    return {
      value: "",
      tableData: [],
      waters: []
    };
  },
  methods: {
    getComment(params) {
      this.$axios({
        url: Api.findComment,
        method: "get",
        params: params
      }).then(res => {
        this.tableData = res.data.data;
      });
    },
    del(e) {
      this.$axios({
        url: Api.delWater,
        method: "get",
        params: {
          id: e
        }
      }).then(res => {
        if (res.data.isok) {
          this.$message(res.data.info);
          this.getComment();
        } else {
          alert(res.data.info);
        }
      });
    }
  },
  watch: {
    value() {
      this.getComment({
        waterId: this.value
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.row {
  padding-top: 30px;
  padding-left: 70px;
}

.item {
  text-align: center;
}

.item .nav {
  width: 90%;
}
</style>