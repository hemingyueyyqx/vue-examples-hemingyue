<template>
  <div>
    <div>
      <h1>新添加属性</h1>
      <p>
        基于Proxy代理对象能够感知新添加的属性。
        <br />
        <button type="button" @click="changeAddress">changeAddress</button>
        <br />
        {{ userRef.name }} / {{ userRef.insertTime }} / {{ userRef.address }}
      </p>
    </div>
    <hr />
    <div>
      <h1>计算属性返回函数</h1>
      <p>
        正常computed()函数绑定计算的结果。但，当需要基于获取的数据，动态绑定计算结果时。
        <br />
        正常渲染结果： {{ userRef.insertTime }}
        <br />
        计算属性返回函数：{{ formatDateFunc(userRef.insertTime || '') }}
      </p>
    </div>
    <hr />
    <div>
      <h1>响应式数据的深度</h1>
      <p>
        响应式对象下的属性对象下的数据改变时，依然是响应式的。
        <br />
        {{ userR2.courses }}
        <br />
        <button @click="changeUserR2">改变user下的courses下的值</button>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { User } from '@/type'
import { computed, ref } from 'vue'
const user: User = {
  name: 'Mingyue',
  insertTime: '2024-06-26T10:56:34'
}
const userRef = ref(user)
const changeAddress = () => {
  // 返回一个字符串形式的0到999之间的整数。.toFixed(0): 这是一个方法，它将调用它的数字转换为字符串，保留指定的小数位数。在这里，传递参数0表示四舍五入为最接近的整数。
  userRef.value.address = (Math.random() * 1000).toFixed(0)
}
// 计算属性，返回的不是值，而是函数
const formatDateFunc = computed(() => (data: string) => data.replace('T', ' '))
//传递一个类型为User的参数
const userR2 = ref<User>({
  name: 'Mingyue',
  insertTime: '2024-06-26T10:56:34',
  //包含课程对象的数组
  courses: [{ id: 12 }]
})
const changeUserR2 = () => {
  //Math.floor() 是 JavaScript 中的一个数学函数，其作用是向下取整，即将一个数字向下舍入为最接近的整数。
  userR2.value.courses &&
    userR2.value.courses[0] &&
    (userR2.value.courses[0].id = Math.floor(Math.random() * 10))
}
</script>
