<template>
  <el-card class="box-card">
    <div 
      slot="header" 
      class="clearfix"
    >
      <span>Card Title</span>
    </div>
    <div 
      v-for="o in 3"
      :key="o"
      class="text item"
    >
      <el-card shadow="hover">
        {{ 'List item ' + o }}
      </el-card>
    </div>
  </el-card>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>
<style>
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 480px;
  }
</style>