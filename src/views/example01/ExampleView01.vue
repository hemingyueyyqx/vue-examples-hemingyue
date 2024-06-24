<script setup lang="ts">
import type { User } from '@/type/'
import { computed, ref, watch, watchEffect } from 'vue'
const message = 'hello'
const userAsync: User = {
  name: 'Lucy',
  address: 'Beijing',
  insertTime: '2024-06-25T22:43:25'
}
const user: User = {
  name: 'Mingyue',
  address: 'Herbin',
  insertTime: '2024-06-23T22:45:25'
}
//响应数据，改变原对象的值
const messageRef = ref('hello world')
const userRef = ref(user)
// console.log(messageRef)
// console.log(userRef)
const changeUserRef = () => {
  setTimeout(() => {
    userRef.value = userAsync
  }, 1000)
}
//用空格代替insertTime的T
const userComputed = computed(() => userRef.value.insertTime?.replace('T', ' '))

// 可监听userRef中对象引用的改变,两个参数
watch(userRef, () => alert(`watch被激活。用户对象改变`))

const changeUserRef2 = () => {
  setTimeout(() => {
    userRef.value.name = 'Sam'
  }, 1000)
}
// 可监听userRef中对象的改变，以及对象中属性数据的变化,三个参数，对象中可声明deep属性，可监听对象中属性的改变；immediate属性，即时监听响应式数据的改变
watch(
  userRef,
  (newUser) => alert(`watch被激活。用户对象中属性数据被改变，名被改为: ${newUser.name}`),
  { deep: true }
)
//首次初始化组件响应式数据时即执行回调，同时监听响应式对象属性的改变。类似整合immediate/deep的watch()

watchEffect(() => {
  console.log(`watchEffect: ${userRef.value.name}`)
})
</script>
<template>
  <div>
    <!-- <div>
      <h1>非响应式</h1>
      普通数据也可渲染在视图。以下message数据为非响应式的静态数据，即数据改变时视图无响应。
      <br />
      message: {{ message }}
      <br />
      当执行以下函数改变userRef值，此数据不会改变
      <br />
      user: {{ user.name }}
    </div>
    <hr /> -->
    <div>
      <h1>ref()</h1>
      <p>
        ref()函数，支持基本数据类型/数组/对象/数据转为响应式数据，
        在TS中通过value属性获取/修改，在视图模板直接使用自动拆箱。
      </p>
      <!-- messageRef: {{ messageRef }} -->

      <button type="button" @click="changeUserRef">changeUserRef</button>
      <br />
      {{ userRef?.name }} / {{ userRef?.address }} / {{ userRef?.insertTime }}
    </div>
    <hr />
    <div>
      <h1>computed()</h1>
      <p>
        computed()函数声明计算属性，当userRef中封装的对象或其属性数据改变时，重新计算并渲染user中insertTime属性值
        <br />
        {{ userRef?.name }} / {{ userRef?.address }} / {{ userComputed }}(友好的互交体验)
      </p>
    </div>
    <hr />
    <div>
      <h1>watch()</h1>
      <p>
        watch()函数，用以在响应式数据改变时执行操作(允许执行异步操作)。
        <br />
        watch()必须监听响应式属性(Ref对象)。支持2/3个参数；
        默认仅被监听响应式数据改变执行回调，当被监听响应式数据为对象，则对象中属性数据或属性数据对象中的数据改变时不回调。
        <br />
        参数1，被监听的响应式数据；
        <br />
        参数2，响应式数据改变的回调函数，可传入new/old值；
        <br />
        参数3，监听选项对象，对象中可声明deep: true属性，可监听对象中属性的改变
        <br />
        <button @click="changeUserRef2">改变响应式对象中的属性中数据，watch()可监听</button>
      </p>
    </div>
    <div>
      <h1>watchEffect()</h1>
      <p>
        watchEffect()函数，首次初始化组件响应式数据时即时执行回调，同时监听响应式对象属性的改变。类似整合immediate/deep的watch()。
      </p>
    </div>
  </div>
</template>
<style scoped>
/* h1 {
  color: red;
} */
</style>
