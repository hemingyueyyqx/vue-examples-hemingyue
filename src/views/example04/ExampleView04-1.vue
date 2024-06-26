<script setup lang="ts">
import type { User } from '@/type'
import { ref } from 'vue'
const userRef = ref<User>({ name: 'Mingyue', level: 5 })
const closeRef = ref(true)
const userNameLoginRef = ref(true)
const changeInput = () => {
  userNameLoginRef.value = !userNameLoginRef.value
}
const changeClose = () => {
  closeRef.value = !closeRef.value
}
</script>
<template>
  <div>
    <!-- v-if有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要非常频繁地切换，使用v-show较好；如果在运行时条件很少改变，则使用v-if较好。 -->
    <h1>v-if</h1>
    <p v-if="userRef.level && userRef.level >= 4">此内容仅level >=4</p>
    <p>vue3.0，input组件默认不会被复用</p>
    <button type="button" v-on:click="changeInput">切换</button>
    <br />
    <!-- 如果需要包含多个元素，而又无法声明div等元素包裹，可以使用<template>元素作为不可见的包裹元素 -->

    <template v-if="userNameLoginRef">
      <input type="text" placeholder="Enter you username" />
      <br />
      <input type="password" placeholder="Enter you password" />
    </template>
    <template v-else>
      <input type="text" placeholder="Enter youe key" />
    </template>
    <hr />
    <h1>v-show</h1>
    <button type="button" v-on:click="changeClose">切换</button>
    <p v-show="closeRef">此内容仅close为true可见</p>
  </div>
</template>
