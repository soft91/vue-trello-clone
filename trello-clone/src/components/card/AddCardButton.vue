<template>
  <div class="container">
    <el-button
      v-if="toggleShow === true"
      v-show="toggleShow"
      type="primary"
      class="addBtn"
      @click="toggleShow = !toggleShow"
    >
      + Add a list
    </el-button>
    <div
      v-else-if="toggleShow === false"
      class="add-list"
    >
      <el-input
        v-model="cardTitle"
        placeholder="Enter list title..."
      />
      <div class="button-wrap">
        <el-button
          class="addlist-btn"
          type="success"
          @click="addCard"
        >
          Add List
        </el-button>
        <span
          class="el-icon-close"
          @click="toggleShow = !toggleShow"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(){
    return {
      cardItems: [],
      toggleShow: true,
      cardTitle: ''
    }
  },
  methods: {
    addCard() {
      // LocalStorage에 Card를 추가하는 이벤트

      localStorage.setItem(this.cardTitle, this.cardTitle);
      //this.cardItems.push(this.cardTitle);
      
      document.getElementsByTagName('input')[0].value = '';
      this.toggleShow = !this.toggleShow;
    }
  }
})
</script>
<style scoped>
.container {
  text-align: left;
}
.add-list {
  width: 272px;
  padding: 5px;
  border-radius: 5px;
  background-color: #ebecf0
}
.button-wrap {
  padding-top: 3px;
}
.addBtn {
  width: 272px;
  text-align: left;
}
.addlist-btn{
  min-height: 32px;
  height: 32px;
  margin-top: 0;
  padding-top: 4px;
  padding-bottom: 4px;
}
.el-icon-close {
  cursor: pointer;
  font-size: 27px;
  vertical-align: middle;
}
</style>