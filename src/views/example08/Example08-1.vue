<script setup lang="ts">
import Child from './Example08-2.vue'
</script>
<template>
  <div>
    <div id="parent">
      <h3>父组件</h3>
      <Child />
    </div>
  </div>
</template>
<style scoped>
#parent {
  border: 5px solid blue;
}
</style>
