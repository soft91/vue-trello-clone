<template>
  <div>
    <div class="list-title-wrap">
      <span class="list-title">
        {{ this.$route.query.title }}
      </span>
    </div>
    <div class="list-wrap">
      <draggable
        class="list-group-wrap"
        group="list"
      >
        <div
          v-for="(value, index) in listItems"
          :key="index"
          class="list-group"
        >
          <List
            :title="value.title"
          />
        </div>
      </draggable>
      <div class="list-group-wrap">
        <div class="container">
          <el-button
            v-if="toggleShow === true"
            type="primary"
            class="addBtn"
            @click="toggleShow = !toggleShow"
          >
            {{ listItems.length > 0 ? '+ Add another list' : '+ Add a list' }}
          </el-button>
          <div
            v-else-if="toggleShow === false"
            class="add-list"
          >
            <el-input
              ref="listTitleInput"
              v-model="listTitle"
              placeholder="Enter list title..."
              @keyup.enter.native="addList"
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import List from '@/components/list/List.vue';
import axios from 'axios';
import draggable from 'vuedraggable';

@Component({
  components: {
    List,
    draggable
  }
})

export default class ListContainer extends Vue {

  listItems:  object[] = [];
  toggleShow: boolean  = true;
  listTitle:  string   = '';

  created(){
    // 추가 된 List를 listItems에 Setting 하여 List를 출력
    let self = this;

    axios.get('http://localhost:4000/searchList', {
      params : {
        bno: this.$route.params.id
      }
    })
      .then(response => {
        self.listItems = response.data.map((r: Object) => r);

        console.log(self.listItems);
      })
      .catch(err => {
        console.error('fetch failed', err);
      });

  }
  
  addList(): void {
    // List를 추가하는 이벤트
    axios.get('http://localhost:4000/addList',{
      params : {
        title : this.listTitle,
        bno: this.$route.params.id
      }
    })
      .then(response => {
        this.listItems.push({id: response.data.insertId, title : this.listTitle});

        this.listTitle = '';
        this.toggleShow = !this.toggleShow;
      })
      .catch(err => {
          console.error('fetch failed', err);
      });
  }
}
</script>

<style scoped>
.list-title-wrap {
  color: white;
  font-weight: bold;
  background-color: rgb(0, 121, 191);
  height: 32px;
  text-align: left;
}
.list-wrap {
  display: flex;
  padding: 8px;
  overflow: auto;
}
.list-group {
  display: flex;
  padding: 3px;
}
.list-group-wrap {
  display: flex;
  padding: 3px;
}
.list-title {
  vertical-align: middle;
  cursor: pointer;
  padding: 0 12px;
  font-size: 18px;
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