<script setup lang="ts">
import { ref } from 'vue'
import MyInput from './myInput.vue'
//数据
let username = ref('张三')
let password = ref('123456')
</script>
<template>
  <div>
    <div id="parent">
      <h3>父组件</h3>
      <h3>v-model既能父传子,也能子传父</h3>
      <h4>{{ username }}</h4>
      <!-- v-model用在html标签上 -->
      <!-- <input type="text" v-model="username" /> -->
      <!-- :value="username"实现数据到页面 -->
      <!-- $event事件对象，target事件本体，发生事件的元素 -->
      <!-- <input
        type="text"
        :value="username"
        @input="username = (<HTMLInputElement>$event.target).value" /> -->
      <!-- v-model用在组件标签上 -->
      <!-- <MyInput v-model="username" /> -->
      <!-- update:modelValue事件名 -->
      <!-- <MyInput :modelValue="username" @update:modelValue="username=$event"/> -->
      <!-- 起别名，把 modelValue替换成qwe-->
      <MyInput v-model:ming="username" v-model:mima="password" />
    </div>
  </div>
</template>
<style>
#parent {
  border: 5px solid blue;
  padding: 10px;
}
</style>
