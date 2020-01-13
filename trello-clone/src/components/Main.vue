<template>
  <div class="home">
    <div class="board-list">
      <div class="board-title">
        <span class="el-icon-user" />
        <h3>Personal Boards</h3>
      </div>
      <el-row :gutter="12">
        <el-col
          v-for="(value, index) in boarditems"
          :key="index"
          :span="6"
          class="board-list-col-padding"
        >
          <router-link :to="{path: `/list/${value.id}`, query: { title: value.title }}">
            <el-card
              class="create-board-btn"
              shadow="always"
            >
              {{ value.title }}
            </el-card>
          </router-link>
        </el-col>
        <el-col
          :span="5"
          class="board-list-col-padding"
        >
          <el-button
            class="create-board-btn"
            type="primary"
            @click="dialogFormVisible = !dialogFormVisible"
          >
            Create new Board
          </el-button>
        </el-col>
      </el-row>
      <!-- Board를 추가하기 위한 Dialog -->
      <el-dialog
        :visible.sync="dialogFormVisible"
        class="dialog-wrap"
        width="18%"
      >
        <el-input 
          v-model="boardTitle" 
          placeholder="Add Board title" 
          autocomplete="off"
          @keyup.enter.native="createBoard"
        />
        <span
          slot="footer" 
          class="dialog-footer"
        >
          <el-button 
            type="primary"
            @click="createBoard"
          >
            Create Board
          </el-button>
          <el-button @click="dialogFormVisible=false">Cancel</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import axios from 'axios';

@Component({
  name: 'Mainboard'
})

export default class Main extends Vue {

  boarditems:        Array<Object> = [];
  boardTitle:        String = '';
  dialogFormVisible: Boolean = false;

  created(){
    // 앱이 초기화 할 때 Database에 저장되어 있는 값들을 리스트 배열안에 추가하여
    // 등록된 Board들을 메인 페이지에 출력.

    let self = this;

    axios.get('http://localhost:4000/')
      .then(response => {
        self.boarditems = response.data.map((r: Object) => r);
      })
      .catch(err => {
        console.error('fetch failed', err);
      });
  }

  createBoard() {
    // 메인 페이지에서 LocalStorage에 Board를 추가하는 이벤트

    axios.get('http://localhost:4000/addBoard',{
      params : {
        title : this.boardTitle
        }
      })
      .then(response => {
        this.boarditems.push({id: response.data.insertId, title : this.boardTitle});
        
        this.boardTitle = '';
        this.dialogFormVisible = false;
      })
      .catch(err => {
          console.error('fetch failed', err);
      });
  }
}
</script>
<style scoped>
.board-list {
  width: 860px;
  margin: 0 auto;
}
.board-title {
  display: table;
}
.board-title > span {
  display: table-cell;
  font-size: 15pt;
  padding-right: 5px;
}
#dialog > div {
  width: 300px;
}
.board-list-col-padding {
  padding: 6px;
}
.create-board-btn {
  font-weight: bold;
  width: 206px;
  height: 64px;
}
.dialog-wrap > div {
  width: 300px;
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
