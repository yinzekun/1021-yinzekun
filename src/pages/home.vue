<template>
  <div>
    <h1>{{$route.name}}</h1>

    <v-add @getc="penter"></v-add>
    <el-table :data="d" class="table" border style="width: 80%" height="250">
      <el-table-column type="index" width="180" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="200"></el-table-column>
      <el-table-column prop="des" label="属性" width="200"></el-table-column>
      <el-table-column prop="time" label="时间" width="250"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" @click="look" >查看</el-button>
        
        <v-del></v-del>
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
    posiy() {
      this.$axios({
        url: Api.find,
        method: "post"
      }).then(res => {
        // console.log(res);

        this.d = res.data.data;
      });
    },
    look(){
        sessionStorage.setItem('id',0)

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