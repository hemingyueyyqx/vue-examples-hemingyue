<script setup lang="ts">
import Child from './Example08-2.vue'
import { ref } from 'vue'
// 定义响应式变量
let car = ref('bmw')
let toy = ref('') //需要子传递的变量
let toy1 = ref('') //需要子传递的变量
//传递方法
function sendToy(value: string) {
  console.log('父', value)
  toy.value = value
}
//接收子通过defineEmits传来的数据
function getToy(value: string) {
  console.log('通过defineEmits传递数据')
  toy1.value = value
}
//测试$event(特殊占位符，事件对象)
const test = (x: number, y: Event) => {
  console.log('test', x, y)
}
</script>
<template>
  <div>
    <div id="parent">
      <h3>父组件</h3>
      <h4>汽车：{{ car }}</h4>
      <h4>
        子给的玩具1：{{ toy }}
        <br />
        （父定义方法，方法传递给子，子调用props方法，将数据作为参数传递给父）
      </h4>
      <h4>子给的玩具2：{{ toy1 }}</h4>
      <button @click="test(6, $event)">测试$event</button>
      <!-- 给子组件绑定事件 get-toy自定义事件名 子中要声明 -->
      <!-- 两种方法接收子给的数据都可以 -->
      <!-- <Child :car="car" :sendToy="sendToy" @get-toy="toy1 = $event" /> -->
      <Child :car="car" :sendToy="sendToy" @get-toy="getToy" />
    </div>
  </div>
</template>
<style scoped>
#parent {
  border: 5px solid blue;
}
</style>
