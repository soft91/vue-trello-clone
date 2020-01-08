<template>
  <div>
    <el-card
      class="listCard"
      shadow="always"
    >test
      <router-link>
        test
      </router-link>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private listitem!: string[];
}
</script>
<style scoped>
.listCard {
  height: 80px;
}
</style>
