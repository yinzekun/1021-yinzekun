<template>
  <div class="row">
    <!-- <v-addjiazheng @getc2="penter2"></v-addjiazheng> -->
    <v-addjiaman @getc2="penter2"></v-addjiaman>
    <div class="item">
      <el-select v-model="value" placeholder="请选择" class="nav">
        <el-option label="全部" value></el-option>
        <el-option
          v-for="item in type"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </div>
    <el-table :data="tableData" class="table" border style="width: 95%" height="300">
      <el-table-column type="index" width label="序号"></el-table-column>
      <el-table-column prop="name" label="名称" width></el-table-column>
      <el-table-column prop="tel" label="电话" width></el-table-column>
      <el-table-column prop="price" label="价格" width></el-table-column>
      <el-table-column prop="age" label="年龄" width></el-table-column>
      <el-table-column prop="edu" label="学历" width></el-table-column>
      <el-table-column prop="type" label="服务类型" width="200"></el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <v-thatcher :id="scope.row.id" @getc1="del"></v-thatcher>
          <v-shanjia :id="scope.row.id" @getc2="penter2"></v-shanjia>

          <!-- <v-xiuwiter :id="scope.row.id" @getc2="penter2"></v-xiuwiter> -->
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
      tableData: [""],
      value: "",
      type:["保姆","月嫂","钟点工","保洁",'家电清洗','家具保养','新居开荒'],
    };
  },
  methods: {
    find(params) {
      this.$axios({
        url: Api.findHomeWorker,
        method: "get",
        params:params
      }).then(res => {
        this.tableData = res.data.data;
      });
    },
    del(e) {
      this.$axios({
        url: Api.delHomeWorker,
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
    penter2(e) {
      this.$message(e);
      this.find();
    }
  },
  mounted() {
    this.find({});
  },
   watch:{
    value(){
      this.find({
        type:this.value
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.row {
  padding-top: 30px;
  padding-left: 130px;
  padding-right: 30px;
}

.item {
  margin-top: 20px;
  width: 90%;
}

.table {
  margin-left: -30px;
}

.nav {
  width: 85%;
}
</style>