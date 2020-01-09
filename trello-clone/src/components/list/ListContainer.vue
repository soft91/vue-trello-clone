<template>
  <div class="card-list">
    <h3 style="text-align:left;">
      {{ $route.params.id }}
    </h3>
    <el-row :gutter="10">
      <el-col
        v-for="(value, index) in listItems"
        :key="index"
        :span="3.5"
      >
        <List
          :title="value"
        />
      </el-col>
      <el-col :span="3">
        <div class="container">
          <el-button
            v-if="toggleShow === true"
            v-show="toggleShow"
            type="primary"
            class="addBtn"
            @click="toggleShow = !toggleShow"
          >
            {{ addListBtn }}
          </el-button>
          <div
            v-else-if="toggleShow === false"
            class="add-list"
          >
            <el-input
              v-model="listTitle"
              placeholder="Enter list title..."
            />
            <div class="button-wrap">
              <el-button
                class="addlist-btn"
                type="success"
                @click="addList"
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
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import List from '@/components/list/List.vue';

export default Vue.extend({
  components: {
    List,
  },
  data(){
    return {
      listItems: new Array(),
      addListBtn: '+ Add a list',
      toggleShow: true,
      listTitle: ''
    }
  },
  created(){
    // 1. 이미 list가 있을 경우 'Add a list'의 버튼 명이 'Add another list'로 변경
    this.listItems.length > 0 ? this.addListBtn = '+ Add another list' : '+ Add a list'

    //여기서 이 아이디 값을 가지고 서버에서 로드 했다고 치고 이 데이터를 List와 바인딩

    // this.children = {
    //   'name' : 'sdtset',
    //   'lists' : [
    //     {
    //       'list_title' : 'g',
    //       'cards' : [
    //         {
    //           'parent' : 'g',
    //           'uuid' : 'sdfsadfsdafsadf'
    //           'card_title' : 'a',
    //         }
    //       ]
    //     },
    //     {
    //       'list_title' : 'f',
    //       'cards' : []
    //     }
    //   ]
    // }
  },
  methods: {
    addList() {
      // List를 추가하는 이벤트

      const test = {
        'title' : this.listTitle
      };

      this.listItems.push(`${test.title}`);
      
      this.listItems.length > 0 ? this.addListBtn = '+ Add another list' : '+ Add a list'
      this.toggleShow = !this.toggleShow;
    }
  }
})
</script>
<style scoped>
.card-list {
  padding: 8px;
}
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