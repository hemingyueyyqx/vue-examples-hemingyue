<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter'

// 数据
let toy = ref('奥特曼')
let computer = ref('')
// 给emitter绑定send-computer事件
emitter.on('send-computer', (value: any) => {
  computer.value = value
})
onUnmounted(() => {
  emitter.off('send-computer')
})
</script>
<template>
  <div class="child1">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>弟弟给的电脑：{{ computer }}</h4>
    <button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
  </div>
</template>
<style scoped>
.child1 {
  margin-top: 50px;
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
.child1 button {
  margin-right: 10px;
}
</style>
