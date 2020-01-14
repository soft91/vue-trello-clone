<template>
  <div id="nav">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from '@/components/Header.vue';

@Component({
  components: {
      Header
  }
})

export default class App extends Vue {}
</script>

<style scoped>
#nav {
  text-align: center;
}
</style>