<template>
  <div class="item">
    <!-- <el-button type="warning" class="btn" plain>添加</el-button -->
    <v-addwiter @getc2="penter2"></v-addwiter>
    <!-- <v-teatcheradd1 @getc2="penter2"></v-teatcheradd1> -->
    <el-table :data="tableData" class="table" border style="width: 90%" height="280">
      <el-table-column type="index" width="150" label="序号"></el-table-column>
      <el-table-column prop="name" label="水站名称" width="250"></el-table-column>
      <el-table-column prop="tel" label="电话" width="250"></el-table-column>
      <el-table-column prop="price" label="价格" width="250"></el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <v-thatcher :id="scope.row.id" @getc1="del"></v-thatcher>
          <v-xiuwiter :id="scope.row.id" @getc2="penter2"></v-xiuwiter>
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
    find() {
      this.$axios({
        url: Api.findWater,
        method: "get"
      }).then(res => {
        this.tableData = res.data.data;
      });
    },
    penter2(e) {
      this.$message(e);
      this.find();
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
          this.find();
        } else {
          alert(res.data.info);
        }
      });
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