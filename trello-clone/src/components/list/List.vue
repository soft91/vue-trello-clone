<template>
  <el-card 
    class="card-container"
  >
    <div
      slot="header"
      class="clearfix title"
    >
      <span>{{ title }}</span>
    </div>
    <div>
      <Card />
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/card/Card.vue';
import {Component, PropSync} from 'vue-property-decorator';

@Component({
  components: {
    Card
  }
})

export default class List extends Vue {
  @PropSync('title', {type: String, default: 'test'}) private msg!: string;
  toggleblur: Boolean = false;
}
</script>

<style scoped>
  .title {
    cursor: pointer;
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