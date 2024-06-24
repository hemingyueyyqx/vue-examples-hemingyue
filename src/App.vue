<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'
// import ExampleView01 from './views/example01/ExampleView01.vue'
</script>

<template>
  <SidebarView id="sidebar" />
  <RouterView id="main" />
  <!-- <router-view id="router" /> -->
  <!-- <ExampleView01 /> -->
</template>
<style>
/* 全局css属性  */
#app {
  display: flex;
  max-width: 1200px;
  margin: auto;
  height: 100vw;
}
#sidebar {
  border: 1px solid red;
  padding: 10px;
  max-width: 250px;
}
#main {
  border: 1px solid red;
  padding: 10px;
  flex: 1;
}
</style>
