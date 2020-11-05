<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="350px">
        <left-nav/>
      </el-aside>
      <el-container>
        <el-main>
          <find/>
        </el-main>
        <el-footer>
          Footer
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import LeftNav from './leftNav'
import Find from './find'
export default {
  name: 'index',
  components: {Find, LeftNav}
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  /*color: #333;*/
  /*text-align: center;*/
  /*line-height: 500px;*/
}

.el-main {
  background-color: #E9EEF3;
  /*color: #333;*/
  /*text-align: center;*/
  line-height: 300px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
