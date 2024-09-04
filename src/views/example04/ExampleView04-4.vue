<script setup lang="ts">
import { listCourses, listTitles } from '@/datasource/DataSource'
import type { Course, User } from '@/type'
import { computed, ref, watch, watchEffect } from 'vue'

const courses = listCourses()
const titles = listTitles()
const userR = ref<User>({ courses: [] })
const fileR = ref({ fileName: '', fileSize: '' })
/* 当用户选择文件时，fileChangeF 方法会被触发。
它检查选择的文件是否存在。
提取文件名和文件大小，并将这些信息存储在 fileR.value 对象中，以便在 Vue.js 组件中使用。*/
const fileChangeF = (event: Event) => {
  // 将 event.target 强制转换为 HTMLInputElement 类型。event.target 指向触发事件的元素，这里是 <input type="file">。
  const elment = event.target as HTMLInputElement
  // 检查 elment 是否存在以及 elment.files 是否存在。elment.files 是一个 FileList 对象，包含用户选择的所有文件。如果这两个条件不满足，则直接返回，函数不做任何处理。
  if (!elment || !elment.files) {
    return
  }
  fileR.value.fileName = elment.files[0].name
  // 计算文件的大小，将字节（elment.files[0].size）转换为兆字节（MB）。通过将字节除以 1024 计算千字节，再除以 1024 计算兆字节。toFixed(2) 方法将结果格式化为小数点后两位。最后，将文件大小的字符串表示形式（例如 1.23MB）赋值给 fileR.value.fileSize
  fileR.value.fileSize = `${(elment.files[0].size / 1024 / 1024).toFixed(2)}MB`
}
watch(
  userR,
  (newValue) => {
    console.log(newValue)
  },
  { deep: true }
)
watch(
  fileR,
  (newValue) => {
    console.log(newValue)
  },
  { deep: true }
)
//==================================================
const agreedR = ref(false)
const selectedCourses: Course[] = [{ id: 7 }]
const checkboxsR = ref<HTMLInputElement[]>([])
const amount = 2
const coursesR = ref<Course[]>(selectedCourses)
const checkboxDisabledC = computed(
  () => (index: number) =>
    !agreedR.value || (coursesR.value.length >= amount && !checkboxsR.value[index].checked)
)
const buttonDisabledC = computed(() => !agreedR.value || coursesR.value.length < amount)
</script>
<template>
  <div>
    <h1>v-model</h1>
    <form>
      <input type="text" v-model="userR.name" />
      <br />
      <!-- 这段代码创建了两个单选按钮，分别用来表示“男”和“女”。每个单选按钮的 value 属性指定了相应的值，用户选择一个单选按钮时，这个值会被赋给 userR.sex。通过 v-model 实现了双向绑定，确保 userR.sex 始终反映用户选择的性别。 -->
      <label for="">
        <input type="radio" v-model="userR.sex" value="male" />
        男
      </label>
      <br />
      <label for="">
        <input type="radio" v-model="userR.sex" value="female" />
        女
      </label>
      <br />
      <!-- 生成一个下拉选择框，选项从 titles 数组中动态生成，每个选项的值是一个对象 {id: t.id}。用户选择的值会通过 v-model 绑定到 userR.title，实现双向数据绑定。 -->
      <select v-model="userR.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <!-- 动态生成了一组复选框，每个复选框代表 courses 数组中的一个元素。每个复选框的值是一个包含课程 id 的对象。当复选框被选中时，相关的对象会被添加到 userR.courses 数组中，取消选中时则会移除。这使得用户可以选择多个课程，并将这些选择存储在 userR.courses 中。 -->
      <template v-for="(c, index) of courses" :key="index">
        <label for="">
          <input type="checkbox" v-model="userR.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button type="submit">提交</button>
    </form>
    <input type="file" @change="fileChangeF" />
    <hr />
    <!-- 这个警告意味着你在 Vue 组件中传递了一个非属性（例如 id）给一个渲染了片段或文本根节点的组件。由于 Vue 组件的根节点是片段或文本，无法自动处理这些额外的非属性。这些非属性可能不会被正确地应用或传递给子组件。解决方法是检查组件的根节点，确保它是一个有效的元素，或者调整组件的使用方式，避免传递无用的属性。 -->
    <label for="">
      <input type="checkbox" v-model="agreedR" />
      同意条款
    </label>
    <br />
    <template v-for="(c, index) in courses" :key="index">
      <label for="">
        <input
          v-model="coursesR"
          type="checkbox"
          ref="checkboxsR"
          :value="{ id: c.id }"
          :disabled="checkboxDisabledC(index)" />
        {{ c.name }}
      </label>
      <br />
    </template>
    <br />
    <button type="button" :disabled="buttonDisabledC">submit</button>
  </div>
</template>
