<template>
    <div class="hello">
      <h2>学习</h2>
      <el-row>
        <el-button type="primary">主要按钮</el-button>
      </el-row>
      <router-link to="/">主页</router-link>
      <router-link to="/button1/embed">嵌套</router-link>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'button1'
}
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
