<template>
  <div>
    <h1>{{$route.name}}</h1>

    <v-addbanner @getc2="penter2"></v-addbanner>
    <el-table :data="tableData" class="table" border style="width: 80%" height="350">
      <el-table-column type="index" width="150" label="序号"></el-table-column>
      <el-table-column label="图片" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.img" class="head_pic" />
        </template>
      </el-table-column>

      <el-table-column prop="des" label="描述" width="250"></el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <v-bannerdel :id="scope.row.id" @getc1="penter1"></v-bannerdel>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
          
<script>
import Api from "../common/js/Api";
export default {
  mounted() {
    this.bannerdel();
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    penter1(e) {
      this.$message(e);
      this.bannerdel();
    },
    penter2(e) {
      this.$message(e);
      this.bannerdel();
    },
    bannerdel() {
      this.$axios({
        url: Api.banner,
        method: "get"
      }).then(res => {
        this.tableData = res.data.data;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.btn {
  margin-left: 2em;
}

.head_pic {
  width: 150px;
  height: 150px;
}
</style>

      
     
