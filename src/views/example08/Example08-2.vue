<script setup lang="ts">
import { ref } from 'vue'
// 定义响应式变量
let toy = ref('wawa')
let toy1 = ref('奥特曼')
// 声明接受 props
const props = defineProps(['car', 'sendToy'])
// 定义要触发的事件
const emit = defineEmits(['get-toy'])
// 触发事件的函数
const sendToyToParent = () => {
  console.log(emit)
  emit('get-toy', toy1.value)
}
</script>

<template>
  <div id="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>玩具1：{{ toy1 }}</h4>
    <h4>父给的车：{{ car }} (defineProps直接传入数据)</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>
    <!-- <button @click="emit('get-toy', toy1)">把玩具1给父亲</button> -->
    <button @click="sendToyToParent">把玩具1给父亲</button>
  </div>
</template>

<style scoped>
#child {
  border: 5px solid red;
}
</style>
