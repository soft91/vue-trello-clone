<template>
  <el-card 
    class="card-container"
  >
    <div
      slot="header"
      class="clearfix"
    >
      <span class="title">{{ title }}</span>
    </div>
    <div>
      <Card />
    </div>
  </el-card>
</template>
<script lang="ts">
import Vue from 'vue';
import Card from '@/components/card/Card.vue';
export default Vue.extend({
  components: {
    Card
  },
  props: {
    title: {
      type: String,
      default: 'test'
    }
  },
  data(){
    return{
      toggleblur: false
    }
  }
})
</script>
<style scoped>
  .title {
    font-weight: bold;
  }
  .text {
    font-size: 14px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .card-container {
    width: 272px;
    background-color: #ebecf0;
  }
</style>