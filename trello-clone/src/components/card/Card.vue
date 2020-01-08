<template>
  <el-card class="card-container">
    <div
      slot="header" 
      class="clearfix"
    >
      <span>Card Title</span> 
      <!-- Title은 생성된 Add list의 Title을 받음 -->
    </div>
    <div
      v-if="toggleShow === true"
      class="text" 
      @click="showAddCardList"
    >
      <span>+ Add a card</span>
    </div>
    <div
      v-if="toggleShow === false"
      class="add-list"
    >
      <el-input
        v-model="textarea1"
        type="textarea"
        autosize
        placeholder="Enter a title for this card..."
      />
      <div class="button-wrap">
        <el-button
          class="addlist-btn"
          type="success"
          @click="addCardList"
        >
          Add Card
        </el-button>
        <span
          class="el-icon-close"
          @click="toggleShow = !toggleShow"
        />
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  data(){
    return {
      textarea1: '',
      toggleShow: true
    }
  },
  methods: {
    showAddCardList(): void{
      // Card를 추가하는 Layout 출력 및 해제

      this.toggleShow = !this.toggleShow;
    },
    addCardList(): void {
      // Card List를 등록하는 로직 구현.

      this.toggleShow = !this.toggleShow;
    },
    dragFunc(event : any) : void {
      console.log(event);
    }
  }
})
</script>
<style>
  .text {
    cursor: pointer;
    font-size: 14px;
    padding: 5px;
  }
  .text:hover {
    background-color: #D5D5D5;
    border-radius: 3px;
  }
  .add-list {
    padding: 5px;
    border-radius: 5px;
    background-color: #ebecf0;
  }
  .addlist-btn{
    min-height: 32px;
    height: 32px;
    margin-top: 0;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .el-textarea__inner {
    height: 54px;
  }
  .el-icon-close {
    cursor: pointer;
    font-size: 27px;
    vertical-align: middle;
  }
  .button-wrap {
    padding-top: 3px;
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
  .el-card__header, .el-card__body {
    padding: 7px;
    text-align: left;
  }
</style>