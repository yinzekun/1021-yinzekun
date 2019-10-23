<template>
  <div class="item">
    <v-addxiu @getc2="penter2"></v-addxiu>
    <!-- <v-teatcheradd1 @getc2="penter2"></v-teatcheradd1> -->
    <el-table :data="tableData" class="table" border style="width: 90%" height="280">
      <el-table-column type="index" width="150" label="序号"></el-table-column>
      <el-table-column prop="name" label="维修名称" width="250"></el-table-column>
      <el-table-column prop="tel" label="电话" width="250"></el-table-column>
      <el-table-column prop="type" label="类型" width="250"></el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <v-thatcher :id="scope.row.id" @getc1="del"></v-thatcher>
          <v-xiugainrong :id="scope.row.id" @getc2="penter2"></v-xiugainrong>
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>
       

<script>
import Api from "../common/js/Api";
export default {
  data() {
    prop: ["id"];
    return {
      tableData: []
    };
  },
  methods: {
    find() {
      this.$axios({
        url: Api.findRepair,
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
        url: Api.delRepair,
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