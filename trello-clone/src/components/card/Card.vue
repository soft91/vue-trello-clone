<template>
  <div>
    <div @change="changeItem">
      <draggable
        class="list-group"
        group="card"
      >
        <el-card
          v-for="(value, index) in cardItems"
          :key="index"
          shadow="always"
          class="item"
        >
          {{ value.title }}
        </el-card>
      </draggable>
    </div>
    <div>
      <div
        v-if="toggleShow === true"
        class="text"
        @click="toggleShow = !toggleShow"
      >
        <span>{{ cardItems.length > 0 ? '+ Add another card' : '+ Add a card' }}</span>
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
            @click="addCard"
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
import { Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import draggable from 'vuedraggable';

@Component({
  components: {
    draggable
  }
})

export default class Card extends Vue {

  @Prop() listId!: string;

  cardItems:  object[] = [];
  cardTitle:  string   = '';
  toggleShow: boolean  = true;

  created(){
    // List에 등록된 Card들의 배열을 Setting
    let self = this;

    axios.get('http://localhost:4000/card', {
      params : {
        lid: this.listId
      }
    })
      .then(response => {
        self.cardItems = response.data.map((r: Object) => r);
      })
      .catch(err => {
        console.error('fetch failed', err);
      });
  }

  addCard(): void {
    // Card List를 등록하는 로직 구현.

    if(this.cardTitle.length === 0) {
      return;
    }

    axios.get('http://localhost:4000/addCard',{
      params : {
        lid: this.listId,
        title : this.cardTitle
      }
    })
      .then(response => {
        this.cardItems.push({id: response.data.insertId, title : this.cardTitle});

        this.cardTitle = '';
        this.toggleShow = !this.toggleShow;
      })
      .catch(err => {
          console.error('fetch failed', err);
      });
  }

  changeItem(evt: any): void {
    // cardItem이 이동을 했을 때의 처리(Update)

    
  }

  deleteCard(): void {
    // cardItem을 삭제 했을 때 발생되는 처리(Delete)
  }
}
</script>

<style>
  .text {
    cursor: pointer;
    font-size: 14px;
    padding: 5px;
  }
  .item {
    cursor: pointer;
    margin-bottom: 8px;
    word-break: break-all;
  }
  .item:hover {
    background-color: aquamarine;
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