<template>
  <div class="card-list">
    <el-row :gutter="12">
      <el-col :span="6">
        <Card @show="toggleShow" />
      </el-col>
      <el-col :span="6">
        <Card @show="toggleShow" />
      </el-col>
      <el-col :span="6">
        <Card @show="toggleShow" />
      </el-col>
      <el-col :span="3">
        <AddCardButton />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Card from '@/components/card/Card.vue';
import AddCardButton from '@/components/card/AddCardButton.vue';

export default Vue.extend({
  components: {
    Card,
    AddCardButton
  },
  data(){
    return {
      toggleShow: false
    }
  }
})
</script>
<style scoped>
.card-list {
  padding: 8px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>