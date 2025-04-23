<template>
  <div>
    <div ref="test">{{ name }}</div>
    <button @click="handleClick">按钮</button>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
const name = ref('沐华')
const test = ref(null)
async function handleClick() {
  name.value = '掘金'
  console.log(test.value.innerText) // 沐华
  await nextTick()
  console.log(test.value.innerText) // 掘金
}
//  return { name, test, handleClick }
</script>
