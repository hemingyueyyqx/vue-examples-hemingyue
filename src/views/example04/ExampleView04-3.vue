<script setup lang="ts">
import { computed, ref } from 'vue'
import { listCourses } from '@/datasource/DataSource'
const coursesR = ref(listCourses())
// substring(0, 16) 截取字符串的前 16 个字符，通常用于获取日期时间的部分信息
const formatDateC = computed(() => (date: string) => date.replace('T', ' ').substring(0, 16))

const addItem = () => {
  coursesR.value.push({
    id: coursesR.value.length + 1,
    name: 'Vue 3.0',
    // .toISOString() 是 Date 对象的一个方法，用于将 Date 对象转换为 ISO 8601 格式的字符串。
    createTime: new Date().toISOString()
  })
}
const removeItemF = (index: number) => {
  // splice()参数，预删除元素索引，删除之后的几个
  coursesR.value.splice(index, 1)
}
</script>
<template>
  <div>
    <h1>v-for</h1>
    路由链接是模拟的。
    <br />
    JS中for in(ES5)适合遍历对象的属性及属性值，for of(ES6)适合遍历数组中元素
    <ul>
      <!-- 为了跟踪每个节点的标识，从而重用和重新排序现有元素，需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的且唯一值 -->
      <li v-for="(c, index) of coursesR" :key="index">
        <router-link :to="`/courses/${c.id}`">{{ c.name }}</router-link>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>createTime</th>
          <th>operation</th>
        </tr>
      </thead>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ formatDateC(c.createTime ?? '') }}</td>
        <td>
          <button type="button" @click="removeItemF(index)">remove item</button>
        </td>
      </tr>
    </table>

    <button type="button" @click="addItem">add item</button>
  </div>
</template>
