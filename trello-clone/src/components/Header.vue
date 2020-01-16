<template>
  <div 
    class="header"
  >
    <router-link
      to="/"
      class="main-link"
    >
      <span class="main-icon" />
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default class Header extends Vue{}
</script>

<style scoped>
.header {
  height: 32px;
  background: #026aa7;
  overflow: hidden;
  padding: 4px;
  text-align: center;
}
.main-link {
  display: block;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  top: 5px;
}
.main-icon {
  background-image: url("https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 80px 30px;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  width: 80px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  vertical-align: middle;
}
</style>