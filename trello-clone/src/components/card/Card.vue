<template>
  <div>
    <div>
      <el-card
        v-for="(value, index) in cardItems"
        :key="index"
        shadow="always"
        class="item"
      >
        {{ value }}
      </el-card>
    </div>
    <div>
      <div
        v-if="toggleShow === true"
        class="text"
        @click="toggleShow = !toggleShow"
      >
        <span>{{ addCardBtn }}</span>
      </div>
      <div
        v-else-if="toggleShow === false"
        class="add-list"
      >
        <el-input
          v-model="cardTitle"
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
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(){
    return {
      cardItems: new Array(),
      cardTitle: '',
      toggleShow: true,
      addCardBtn: '+ Add a card'
    }
  },
  created(){
    // 1. 이미 list가 있을 경우 'Add a list'의 버튼 명이 'Add another list'로 변경
    this.cardItems.length > 0 ? this.addCardBtn = '+ Add another card' : '+ Add a card'

  },
  methods: {
    addCardList(): void {
      // Card List를 등록하는 로직 구현.

      const test = {
        'test' : this.cardTitle
      };

      this.cardTitle.length === 0 ? null : this.cardItems.push(test.test);
      this.cardTitle = '';
      this.cardItems.length > 0 ? this.addCardBtn = '+ Add another card' : '+ Add a card';
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
  .item {
    margin-bottom: 8px;
    word-break: break-all;
  }
  .text:hover {
    background-color: #D5D5D5;
    border-radius: 3px;
  }
  .add-list {
    border-radius: 5px;
    background-color: #ebecf0;
  }
  .addlist-btn{
    min-height: 32px;
    height: 32px;
    margin-top: 3px;
    padding-top: 4px;
    padding-bottom: 4px;
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
  .el-card__header {
    padding: 3px 0px 3px 13px;
    text-align: left;
  }
  .el-card__body {
    padding: 3px;
    text-align: left;
  }
</style>