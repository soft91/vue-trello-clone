<template>
  <el-card 
    class="card-container"
  >
    <div
      slot="header"
      class="clearfix title"
    > 
      <el-input
        v-model="changeTitle"
        v-if="showInput === true"
        @blur="listTitleUpdate"
        @keyup.enter.native="$event.target.blur()"
      />
      <span 
        v-else
        @click="showInput = !showInput"
      >
        {{ changeTitle }}
      </span>
    </div>
    <div>
      <Card
        :listId="list_id"
      />
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/card/Card.vue';
import axios from 'axios';
import { Component, PropSync, Prop } from 'vue-property-decorator';

@Component({
  components: {
    Card
  }
})

export default class List extends Vue {

  @Prop() title!: string;
  @Prop() list_id!: string;

  showInput:   boolean = false;
  changeTitle: string  = this.title;
  
  listTitleUpdate(): void {
    // blur 처리를 할 때 List 타이틀의 이름을 바꿈.

    if(this.title == this.changeTitle){
      this.showInput = !this.showInput;
      return;
    } else {
      axios.get('http://localhost:4000/listTitleUpdate', {
        params: {
          id: this.list_id,
          listTitle: this.changeTitle
        }
      })
      .then(Response => {
        this.showInput = !this.showInput;
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
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