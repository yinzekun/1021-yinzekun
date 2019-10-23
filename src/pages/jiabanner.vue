<template>
  <div class="item">
 
    <v-addjiazheng @getc2="penter2"></v-addjiazheng>
    <el-table :data="tableData" class="table" border style="width: 90%" height="220">
      <el-table-column type="index" width="350" label="序号"></el-table-column>
      <el-table-column label="图片" width="500">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="head_pic" />
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
        url: Api.delHomeBanner,
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
        url: Api.homeBanner,
        method: "get"
      }).then(res => {
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