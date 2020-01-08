<template>
  <div class="home">
    <div class="board-list">
      <div class="board-title">
        <span class="el-icon-user" />
        <h3>Personal Boards</h3>
      </div>
      <el-row :gutter="12">
        <el-col
          v-for="(value, index) in listitems"
          :key="index"
          :span="6"
          class="board-list-col-padding"
        >
          <el-card
            class="listCard"
            shadow="always"
          >
            <router-link :to="`/board/${value}`">
              {{ value }}
            </router-link>
          </el-card>
        </el-col>
        <el-col 
          :span="5"
          class="board-list-col-padding"
        >
          <el-button
            class="create-board-btn"
            type="primary"
            @click="openDialog"
          >
            Create new Board
          </el-button>
        </el-col>
      </el-row>
      <!-- Board를 추가하기 위한 Dialog -->
      <el-dialog 
        :visible.sync="dialogFormVisible"
      >
        <el-input 
          v-model="boardTitle" 
          placeholder="Add Board title" 
          autocomplete="off"
          @keyup.enter="createBoard"
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

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'MainBoard',
  data(){
    return {
      listshow : true,
      dialogFormVisible: false,
      listitems : [],
      boardTitle: ''
    }
  },
  created(){
    // 앱이 초기화 할 때 LocalStroge에 저장되어 있는 값들을 리스트 배열안에 추가하여
    // 등록된 Board들을 메인 페이지에 출력.

    if(localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server")
          this.listitems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    openDialog() {
      // 메인 페이지에서 Board를 추가하기 위한 Input Dialog를 Open

      this.dialogFormVisible = true;
    },
    createBoard() {
      // 메인 페이지에서 LocalStorage에 Board를 추가하는 이벤트
      
      localStorage.setItem(this.boardTitle, this.boardTitle);
      this.listitems.push(this.boardTitle);
      
      document.getElementsByTagName('input')[0].value = '';
      this.dialogFormVisible = false;
    }
  }
})
</script>
<style scoped>
.home {
  padding: 8px;
}
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
  padding-right: 
}
.board-list-col-padding {
  padding: 6px;
}
.create-board-btn {
  width: 206px;
  height: 59px;
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
