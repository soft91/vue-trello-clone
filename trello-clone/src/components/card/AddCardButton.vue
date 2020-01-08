<template>
  <div class="container">
    <el-button
      v-if="toggleShow === true"
      v-show="toggleShow"
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
        v-model="title"
        placeholder="Enter list title..."
      />
      <el-button 
        type="success"
        @click="addCard"
      >
        Add List
      </el-button>
      <el-button
        type="primary" 
        icon="el-icon-close"
        @click="toggleShow = !toggleShow"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(){
    return {
      cardItems : [],
      title : '',
      toggleShow : true
    }
  },
  methods: {
    addCard(): void{
      localStorage.setItem(this.title, this.title);
      //this.cardItems.push(this.title);
      
      document.getElementsByTagName('input')[0].value = '';
      this.toggleShow = !this.toggleShow;
    }
  }
})
</script>
<style scoped>
.container {
  padding: 8px;
  text-align: left;
}
.add-list {
  width: 272px;
  border: 1px solid black;
  border-radius: 5px;
}
.addBtn {
  width: 272px;
  text-align: left;
}
</style>