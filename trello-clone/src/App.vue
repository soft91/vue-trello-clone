<template>
  <div id="nav">
    <Header />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
    components: {
      Header
    }
})
</script>
<style scoped>
#nav {
  text-align: center;
}
</style>