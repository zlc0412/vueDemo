<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <div>
      <router-link to="/plane/a1">a1</router-link>
    </div>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: 'find',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>

</style>
